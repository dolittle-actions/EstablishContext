"use strict";
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const an_extractor_1 = require("./given/an_extractor");
describe('when extracting from string with only a non release type', () => {
    const extractor = new an_extractor_1.an_extractor().extractor;
    const labels = ['something'];
    const result = extractor.extract(labels);
    it('should return undefined', () => chai_1.expect(result).to.be.undefined);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZWxlYXNlVHlwZS9mb3JfUmVsZWFzZVR5cGVFeHRyYWN0b3Ivd2hlbl9leHRyYWN0aW5nX2Zyb21fc3RyaW5nX3dpdGhfb25seV9hX25vbl9yZWxlYXNlX3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7O0FBRXJHLCtCQUE4QjtBQUM5Qix1REFBb0Q7QUFFcEQsUUFBUSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtJQUN0RSxNQUFNLFNBQVMsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDL0MsTUFBTSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJSZWxlYXNlVHlwZS9mb3JfUmVsZWFzZVR5cGVFeHRyYWN0b3Ivd2hlbl9leHRyYWN0aW5nX2Zyb21fc3RyaW5nX3dpdGhfb25seV9hX25vbl9yZWxlYXNlX3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgeyBhbl9leHRyYWN0b3IgfSBmcm9tICcuL2dpdmVuL2FuX2V4dHJhY3Rvcic7XG5cbmRlc2NyaWJlKCd3aGVuIGV4dHJhY3RpbmcgZnJvbSBzdHJpbmcgd2l0aCBvbmx5IGEgbm9uIHJlbGVhc2UgdHlwZScsICgpID0+IHtcbiAgICBjb25zdCBleHRyYWN0b3IgPSBuZXcgYW5fZXh0cmFjdG9yKCkuZXh0cmFjdG9yO1xuICAgIGNvbnN0IGxhYmVscyA9IFsnc29tZXRoaW5nJ107XG4gICAgY29uc3QgcmVzdWx0ID0gZXh0cmFjdG9yLmV4dHJhY3QobGFiZWxzKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCcsICgpID0+IGV4cGVjdChyZXN1bHQpLnRvLmJlLnVuZGVmaW5lZCk7XG59KTtcbiJdfQ==
