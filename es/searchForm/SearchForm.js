function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/button/style/css";
import _Button from "antd/es/button";

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

import React, { Component } from 'react';
import FormUtil from '../utils/FormUtil';
import "./SearchForm.css";

var classnames = require('classnames');
/**
 * 搜索表单
 */


var SearchForm = /*#__PURE__*/function (_Component) {
  _inherits(SearchForm, _Component);

  var _super = _createSuper(SearchForm);

  function SearchForm() {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _super.apply(this, arguments);
    _this.form = null;
    return _this;
  }

  _createClass(SearchForm, [{
    key: "_defaultRenderSearchElement",
    value: function _defaultRenderSearchElement() {
      var renderSearchElement = this.props.renderSearchElement;
      return renderSearchElement ? renderSearchElement() : /*#__PURE__*/React.createElement(_Button, {
        type: "primary"
      }, "\u641C\u7D22");
    }
  }, {
    key: "_defaultRenderResetElement",
    value: function _defaultRenderResetElement() {
      var renderResetElement = this.props.renderResetElement;
      return renderResetElement ? renderResetElement() : /*#__PURE__*/React.createElement(_Button, null, "\u91CD\u7F6E");
    }
  }, {
    key: "submit",
    value: function submit() {
      var onSubmit = this.props.onSubmit;

      if (this.form && onSubmit) {
        this.form.validateFields().then(function (values) {
          onSubmit(values);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          itemList = _this$props.itemList,
          columnNumber = _this$props.columnNumber,
          className = _this$props.className,
          style = _this$props.style,
          _this$props$inlineMax = _this$props.inlineMaxNumber,
          inlineMaxNumber = _this$props$inlineMax === void 0 ? 3 : _this$props$inlineMax,
          initialValues = _this$props.initialValues,
          disabled = _this$props.disabled,
          getFormInstance = _this$props.getFormInstance;

      if (!itemList || !itemList.length) {
        return null;
      }

      var list = itemList;

      if (Boolean(!disabled)) {
        list = list.concat([{
          content: /*#__PURE__*/React.createElement("div", {
            className: "fb-ControlGroup"
          }, /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              _this2.submit();
            }
          }, this._defaultRenderSearchElement()), /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              if (_this2.form) {
                _this2.form.resetFields();

                _this2.submit();
              }
            }
          }, this._defaultRenderResetElement()))
        }]);
      }

      var useHorizontal = columnNumber || itemList.length > inlineMaxNumber;
      return /*#__PURE__*/React.createElement(_Form, {
        ref: function ref(target) {
          _this2.form = target;

          if (getFormInstance) {
            getFormInstance(_this2.form);
          }
        },
        initialValues: initialValues,
        className: classnames('fb-SearchForm', useHorizontal ? 'fb-SearchFormHorizontal' : '', className),
        style: style,
        layout: useHorizontal ? 'horizontal' : 'inline'
      }, useHorizontal ? FormUtil.renderFormItems(list, columnNumber || inlineMaxNumber) : FormUtil.renderInlinFormItems(list));
    }
  }]);

  return SearchForm;
}(Component);

export default SearchForm;