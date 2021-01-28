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

export default UploadType;