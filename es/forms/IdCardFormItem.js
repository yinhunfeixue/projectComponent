function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/input/style/css";
import _Input from "antd/es/input";
import "antd/es/form/style/css";
import _Form from "antd/es/form";

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
import FormRegExp from '../enums/FormRegExp';

var IdCard = require('idcard');

var classnames = require('classnames');

var IdCardFormItem = /*#__PURE__*/function (_Component) {
  _inherits(IdCardFormItem, _Component);

  var _super = _createSuper(IdCardFormItem);

  function IdCardFormItem() {
    var _this;

    _classCallCheck(this, IdCardFormItem);

    _this = _super.apply(this, arguments);

    _this.getIdCard = function (type) {
      var idCard = FormRegExp.IDCARD;

      switch (type) {
        case 1:
          idCard = FormRegExp.IDCARD;
          break;

        case 2:
          idCard = FormRegExp.HK_IDCARD;
          break;

        case 3:
          idCard = FormRegExp.TW_IDCARD;
          break;

        default:
          break;
      }

      return idCard;
    };

    _this.onChange = function (e) {
      var idCard = e.target.value;

      if (idCard && IdCard.verify(idCard)) {
        var info = IdCard.info(idCard);
        var onSuccess = _this.props.onSuccess;

        if (onSuccess) {
          onSuccess(info);
        }
      }
    };

    return _this;
  }

  _createClass(IdCardFormItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fromItemProps = _this$props.fromItemProps,
          className = _this$props.className,
          required = _this$props.required,
          idCardType = _this$props.idCardType,
          style = _this$props.style,
          name = _this$props.name,
          label = _this$props.label,
          emptyMsg = _this$props.emptyMsg,
          errMsg = _this$props.errMsg;
      return /*#__PURE__*/React.createElement(_Form.Item, Object.assign({
        className: classnames('idCard-from', className),
        style: style
      }, this.props, fromItemProps, {
        name: name,
        label: label,
        rules: [{
          required: required,
          message: emptyMsg || '请填写身份证号码'
        }, {
          pattern: this.getIdCard(idCardType),
          message: errMsg || '身份证号码格式不正确'
        }]
      }), /*#__PURE__*/React.createElement(_Input, {
        onChange: this.onChange
      }));
    }
  }]);

  return IdCardFormItem;
}(Component);

export default IdCardFormItem;