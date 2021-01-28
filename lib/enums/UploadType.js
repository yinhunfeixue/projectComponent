"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var UploadType;

(function (UploadType) {
  /**
   * 文件
   */
  UploadType[UploadType["FILE"] = 0] = "FILE";
  /**
   * 图片
   */

  UploadType[UploadType["IMAGE"] = 1] = "IMAGE";
})(UploadType || (UploadType = {}));

var _default = UploadType;
exports.default = _default;