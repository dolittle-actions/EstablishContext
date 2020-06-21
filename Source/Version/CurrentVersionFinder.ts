// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import semver, { SemVer } from 'semver';
import { ILogger } from '@dolittle/github-actions.shared.logging';
import { Context } from '@actions/github/lib/context';
import { GitHub } from '@actions/github/lib/utils';
import { IFindCurrentVersion } from './IFindCurrentVersion';
import { IVersionSorter } from './IVersionSorter';

/**
 * Represents an implementation of {ICanGetLatestVersion} that can get the latest version from Github
 *
 * @export
 * @class GithubLatestVersionFinder
 * @implements {ICanGetLatestVersion}
 */
export class CurrentVersionFinder implements IFindCurrentVersion {

    /**
     * Instantiates an instance of {GithubVersionTags}.
     */
    constructor(
        private readonly _versionSorter: IVersionSorter,
        private readonly _context: Context,
        private readonly _github: InstanceType<typeof GitHub>,
        private readonly _logger: ILogger) {}

    /**
     * @inheritdoc
     */
    async find(prereleaseBranch: SemVer | undefined): Promise<SemVer> {
        const {owner, repo} = this._context.repo;
        this._logger.debug(`Getting version tags from github.com/${owner}/${repo}`);
        const versions = await this._getVersionsFromRepoTags(owner, repo);
        if (!versions || versions.length === 0) {
            const defaultVersion = new SemVer('1.0.0');
            this._logger.info(`No version tags. Defaulting to version ${defaultVersion.version}`);
            return defaultVersion;
        }

        this._logger.debug(`Version tags: [
${versions.join(',\n')}
]`);

        const currentVersion = this._findGreatestMatchingVersion(this._versionSorter.sort(versions, true), prereleaseBranch);
        this._logger.info(`Current version '${currentVersion}'`);
        return currentVersion;
    }

    private async _getVersionsFromRepoTags(owner: string, repo: string): Promise<SemVer[]> {
        const versions = await this._github.paginate(
            this._github.repos.listTags,
            {owner, repo},
            response => response.data
                                    .filter(tag => semver.valid(tag.name))
                                    .map(_ => _.name!));

        return versions.map(_ => semver.parse(_)!);
    }
    private _findGreatestMatchingVersion(versionsDescending: SemVer[], prereleaseBranch: SemVer | undefined) {
        const greatestVersion = versionsDescending[0];
        if (prereleaseBranch === undefined) return greatestVersion;

        const prereleaseId = prereleaseBranch.prerelease[0];
        for (const version of versionsDescending.slice(1)) {
            if (semver.gt(prereleaseBranch, version)) return prereleaseBranch;
            const versionPrerelease = version.prerelease;
            if (versionPrerelease === null) continue;
            if (semver.eq(semver.inc(prereleaseBranch, 'patch')!, semver.inc(version, 'patch')!)
                && versionPrerelease[0] === prereleaseId) {
                    return version;
                }
        }
        return prereleaseBranch;
    }
}
