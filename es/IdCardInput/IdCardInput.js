function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/input/style/css";
import _Input from "antd/es/input";

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

import lodash from 'lodash';
import React, { Component } from 'react';

var IdCard = require('idcard');

var classnames = require('classnames');

var IdCardInput = /*#__PURE__*/function (_Component) {
  _inherits(IdCardInput, _Component);

  var _super = _createSuper(IdCardInput);

  function IdCardInput() {
    var _this;

    _classCallCheck(this, IdCardInput);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: _this.props.value
    };

    _this.setIdCardInfo = function (value) {
      var onSuccess = _this.props.onSuccess;

      if (value && IdCard.verify(value)) {
        var info = IdCard.info(value);
        onSuccess(info);
      } else {
        onSuccess({
          province: {},
          city: {},
          area: {}
        });
      }
    };

    _this.onChange = function (e) {
      var idCard = e.target.value;
      var onChange = _this.props.onChange;

      _this.setState({
        value: idCard
      }, function () {
        _this.setIdCardInfo(idCard);
      });

      if (onChange) {
        onChange(idCard);
      }
    };

    return _this;
  }

  _createClass(IdCardInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      this.setIdCardInfo(value);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!lodash.isEqual(this.props.value, prevProps.value)) {
        var value = this.props.value;
        this.setState({
          value: value
        });
        this.setIdCardInfo(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/React.createElement("span", {
        className: classnames('IdCardInput', className),
        style: style
      }, /*#__PURE__*/React.createElement(_Input, {
        onChange: this.onChange,
        value: this.state.value
      }));
    }
  }]);

  return IdCardInput;
}(Component);

export default IdCardInput;