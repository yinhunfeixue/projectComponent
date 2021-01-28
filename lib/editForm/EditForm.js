"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _Form = _interopRequireDefault(require("antd/lib/form/Form"));

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _FormUtil = _interopRequireDefault(require("../utils/FormUtil"));

require("./EditForm.css");

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

/**
 * 编辑表单，支持：编辑，阅读两种模式；会自行判断是新增还是修改
 */
var EditForm = /*#__PURE__*/function (_Component) {
  _inherits(EditForm, _Component);

  var _super = _createSuper(EditForm);

  function EditForm(props) {
    var _this;

    _classCallCheck(this, EditForm);

    _this = _super.call(this, props);
    _this.formRef = /*#__PURE__*/_react.default.createRef();

    _this.getControl = function () {
      var loading = _this.state.loading;

      if (_this.readOnly) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "fhControlGroup"
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        loading: loading,
        htmlType: "submit"
      }, "\u4FDD\u5B58"), /*#__PURE__*/_react.default.createElement(_button.default, {
        disabled: loading,
        onClick: function onClick() {
          _this.cancel();
        }
      }, "\u53D6\u6D88"));
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(EditForm, [{
    key: "submit",
    value: function submit() {
      if (this.formRef.current) {
        this.formRef.current.submit();
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var onCancel = this.props.onCancel;

      if (onCancel) {
        onCancel();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateStateSource();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_lodash.default.isEqual(this.props.source, prevProps.source)) {
        this.updateStateSource();
      }
    }
  }, {
    key: "updateStateSource",
    value: function () {
      var _updateStateSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, source, getDetailFunction, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, source = _this$props.source, getDetailFunction = _this$props.getDetailFunction;

                if (source) {
                  _context.next = 5;
                  break;
                }

                this.setState({
                  source: undefined
                });
                _context.next = 13;
                break;

              case 5:
                if (!getDetailFunction) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return getDetailFunction(source);

              case 8:
                data = _context.sent;
                this.setState({
                  source: data
                });
                _context.next = 13;
                break;

              case 12:
                this.setState({
                  source: source
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateStateSource() {
        return _updateStateSource.apply(this, arguments);
      }

      return updateStateSource;
    }()
  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      var onLoadingChange = this.props.onLoadingChange;
      this.setState({
        loading: loading
      });

      if (onLoadingChange) {
        onLoadingChange(loading);
      }
    }
  }, {
    key: "save",
    value: function save(value) {
      var _this2 = this;

      var _this$props2 = this.props,
          addFunction = _this$props2.addFunction,
          updateFunction = _this$props2.updateFunction,
          onOk = _this$props2.onOk,
          onError = _this$props2.onError;
      var source = this.state.source;
      var promise = null;

      if (source) {
        if (updateFunction) {
          promise = updateFunction(value, source);
        }
      } else {
        if (addFunction) {
          promise = addFunction(value);
        }
      }

      if (promise) {
        this.setLoading(true);
        promise.then(function () {
          if (onOk) {
            onOk();
          }
        }).catch(function (error) {
          if (onError) {
            onError(error);
          }
        }).finally(function () {
          _this2.setLoading(false);
        });
      }
    }
  }, {
    key: "getControlFormItemList",
    value: function getControlFormItemList() {
      if (this.readOnly) {
        return [];
      }

      return [{
        span: 24,
        content: this.getControl()
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          formItemList = _this$props3.formItemList,
          _this$props3$columnsC = _this$props3.columnsCount,
          columnsCount = _this$props3$columnsC === void 0 ? 1 : _this$props3$columnsC,
          _this$props3$key = _this$props3.key,
          key = _this$props3$key === void 0 ? 'id' : _this$props3$key,
          className = _this$props3.className,
          style = _this$props3.style,
          hideControls = _this$props3.hideControls;
      var source = this.state.source;
      var controlList = hideControls ? [] : this.getControlFormItemList();
      var readOnly = this.readOnly;

      if (readOnly) {
        formItemList.forEach(function (item) {
          if (item.content && /*#__PURE__*/_react.default.isValidElement(item.content)) {
            item.content = /*#__PURE__*/_react.default.cloneElement(item.content, {
              disabled: true
            });
          }
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "fhEditForm"
      }, /*#__PURE__*/_react.default.createElement(_Form.default, {
        ref: this.formRef,
        className: className,
        style: style,
        key: source ? source[key] : '',
        initialValues: source,
        onFinish: function onFinish(value) {
          _this3.save(value);
        }
      }, _FormUtil.default.renderFormItems(formItemList.concat(controlList), columnsCount)));
    }
  }, {
    key: "readOnly",
    get: function get() {
      var _this$props4 = this.props,
          source = _this$props4.source,
          updateFunction = _this$props4.updateFunction;
      return source && !updateFunction;
    }
  }]);

  return EditForm;
}(_react.Component);

var _default = EditForm;
exports.default = _default;