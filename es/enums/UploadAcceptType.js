var UploadAcceptType;

(function (UploadAcceptType) {
  UploadAcceptType["IMAGE"] = ".jpg, .png, .gif, .svg, .bmp, .webp";
  UploadAcceptType["OFFICE"] = ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .vsd, .mpp, .mppx, .mppx";
  UploadAcceptType["ZIP"] = ".zip, .rar, .7zip";
})(UploadAcceptType || (UploadAcceptType = {}));

export default UploadAcceptType;