"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var UploadAcceptType;

(function (UploadAcceptType) {
  UploadAcceptType["IMAGE"] = ".jpg, .png, .gif, .svg, .bmp, .webp";
  UploadAcceptType["OFFICE"] = ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .vsd, .mpp, .mppx, .mppx";
  UploadAcceptType["ZIP"] = ".zip, .rar, .7zip";
})(UploadAcceptType || (UploadAcceptType = {}));

var _default = UploadAcceptType;
exports.default = _default;