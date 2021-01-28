"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _react = _interopRequireWildcard(require("react"));

require("./ConfirmButton.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var classnames = require('classnames');
/**
 * 确认按钮
 */


var ConfirmButton = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmButton, _Component);

  var _super = _createSuper(ConfirmButton);

  function ConfirmButton(props) {
    var _this;

    _classCallCheck(this, ConfirmButton);

    _this = _super.call(this, props);
    _this.clickHandler = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var onConfirm, isConfirm;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onConfirm = _this.props.onConfirm;
              isConfirm = false;

              _this.setState({
                loading: true
              });

              _context.next = 5;
              return _this.validate();

            case 5:
              isConfirm = _context.sent;

              _this.setState({
                loading: false
              });

              if (isConfirm && onConfirm) {
                onConfirm();
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ConfirmButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: classnames('ConfirmButton', className),
        style: style,
        onClick: this.clickHandler
      }, this.getChildren());
    }
  }, {
    key: "validate",
    value: function validate() {
      var validate = this.props.validate;

      if (validate) {
        return validate();
      } else {
        return this.defaultValidate();
      }
    }
  }, {
    key: "defaultValidate",
    value: function defaultValidate() {
      var _this2 = this;

      return new Promise(function (resolve) {
        var modalContent = _this2.props.modalContent;

        _modal.default.confirm({
          title: modalContent ? modalContent.title : '操作不可恢复',
          content: modalContent ? modalContent.content : '此操作不可恢复，请确认是否继续',
          onOk: function onOk() {
            resolve(true);
          },
          onCancel: function onCancel() {
            resolve(false);
          }
        });
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var loading = this.state.loading;
      var _this$props2 = this.props,
          getElement = _this$props2.getElement,
          text = _this$props2.text;

      if (getElement) {
        return getElement(loading);
      }

      return /*#__PURE__*/_react.default.createElement(_button.default, {
        danger: true,
        ghost: true,
        loading: loading
      }, text || '删除');
    }
  }]);

  return ConfirmButton;
}(_react.Component);

var _default = ConfirmButton;
exports.default = _default;