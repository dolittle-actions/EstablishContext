"use strict";
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
const a_sorter_1 = require("./given/a_sorter");
describe('when sorting empty list', () => {
    const version_sorter = new a_sorter_1.a_sorter().sorter;
    const res = version_sorter.sort([]);
    it('should return an empty list', () => res.should.be.empty);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9WZXJzaW9uL2Zvcl9TZW1WZXJWZXJzaW9uU29ydGVyL3doZW5fc29ydGluZ19lbXB0eV9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0MscUdBQXFHOztBQUVyRywrQ0FBNEM7QUFFNUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUNyQyxNQUFNLGNBQWMsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDN0MsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiVmVyc2lvbi9mb3JfU2VtVmVyVmVyc2lvblNvcnRlci93aGVuX3NvcnRpbmdfZW1wdHlfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBhX3NvcnRlciB9IGZyb20gJy4vZ2l2ZW4vYV9zb3J0ZXInO1xuXG5kZXNjcmliZSgnd2hlbiBzb3J0aW5nIGVtcHR5IGxpc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgdmVyc2lvbl9zb3J0ZXIgPSBuZXcgYV9zb3J0ZXIoKS5zb3J0ZXI7XG4gICAgY29uc3QgcmVzID0gdmVyc2lvbl9zb3J0ZXIuc29ydChbXSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYW4gZW1wdHkgbGlzdCcsICgpID0+IHJlcy5zaG91bGQuYmUuZW1wdHkpO1xufSk7XG4iXX0=
