var ImageFitType;

(function (ImageFitType) {
  // MOZ_INITIAL = "-moz-initial",
  // INHERIT = "inherit",
  // INITIAL = "initial",
  // REVERT = "revert",
  // UNSET = "unset",
  ImageFitType["CONTAIN"] = "contain";
  ImageFitType["COVER"] = "cover"; // FILL = "fill",

  ImageFitType["NONE"] = "none"; // SCALE_DOWN = "scale-down",
})(ImageFitType || (ImageFitType = {}));

export default ImageFitType;