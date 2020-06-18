"use strict";
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_sorter_1 = require("./given/a_sorter");
const semver_1 = require("semver");
describe('when sorting a list of versions where one version is invalid', () => {
    const version_sorter = new a_sorter_1.a_sorter().sorter;
    const valid_version = new semver_1.SemVer('2.0.0');
    const invalid_version = 'something1.1.0';
    let exception;
    try {
        version_sorter.sort([valid_version, invalid_version]);
    }
    catch (error) {
        exception = error;
    }
    it('should throw an exception', () => chai_1.expect(exception).to.not.undefined);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9WZXJzaW9uL2Zvcl9TZW1WZXJWZXJzaW9uU29ydGVyL3doZW5fc29ydGluZ19hX2xpc3Rfb2ZfdmVyc2lvbnNfd2hlcmVfb25lX3ZlcnNpb25faXNfaW52YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7QUFFckcsK0JBQThCO0FBQzlCLCtDQUE0QztBQUM1QyxtQ0FBZ0M7QUFFaEMsUUFBUSxDQUFDLDhEQUE4RCxFQUFFLEdBQUcsRUFBRTtJQUMxRSxNQUFNLGNBQWMsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFFN0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDekMsSUFBSSxTQUFnQixDQUFDO0lBQ3JCLElBQUk7UUFDQSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLGVBQWdDLENBQUMsQ0FBQyxDQUFDO0tBQzFFO0lBQ0QsT0FBTyxLQUFLLEVBQUU7UUFDVixTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3JCO0lBRUQsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6IlZlcnNpb24vZm9yX1NlbVZlclZlcnNpb25Tb3J0ZXIvd2hlbl9zb3J0aW5nX2FfbGlzdF9vZl92ZXJzaW9uc193aGVyZV9vbmVfdmVyc2lvbl9pc19pbnZhbGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHsgYV9zb3J0ZXIgfSBmcm9tICcuL2dpdmVuL2Ffc29ydGVyJztcbmltcG9ydCB7IFNlbVZlciB9IGZyb20gJ3NlbXZlcic7XG5cbmRlc2NyaWJlKCd3aGVuIHNvcnRpbmcgYSBsaXN0IG9mIHZlcnNpb25zIHdoZXJlIG9uZSB2ZXJzaW9uIGlzIGludmFsaWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmVyc2lvbl9zb3J0ZXIgPSBuZXcgYV9zb3J0ZXIoKS5zb3J0ZXI7XG5cbiAgICBjb25zdCB2YWxpZF92ZXJzaW9uID0gbmV3IFNlbVZlcignMi4wLjAnKTtcbiAgICBjb25zdCBpbnZhbGlkX3ZlcnNpb24gPSAnc29tZXRoaW5nMS4xLjAnO1xuICAgIGxldCBleGNlcHRpb246IEVycm9yO1xuICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb25fc29ydGVyLnNvcnQoW3ZhbGlkX3ZlcnNpb24sIGludmFsaWRfdmVyc2lvbiBhcyBhbnkgYXMgU2VtVmVyXSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBleGNlcHRpb24gPSBlcnJvcjtcbiAgICB9XG5cbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGV4Y2VwdGlvbicsICgpID0+IGV4cGVjdChleGNlcHRpb24pLnRvLm5vdC51bmRlZmluZWQpO1xufSk7XG4iXX0=
