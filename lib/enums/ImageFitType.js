"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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

var _default = ImageFitType;
exports.default = _default;