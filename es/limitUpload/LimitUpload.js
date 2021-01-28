function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/upload/style/css";
import _Upload from "antd/es/upload";
import "antd/es/message/style/css";
import _message from "antd/es/message";
import "antd/es/button/style/css";
import _Button from "antd/es/button";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import UploadAcceptType from '../enums/UploadAcceptType';
import UploadType from '../enums/UploadType';

var LimitUpload = /*#__PURE__*/function (_Component) {
  _inherits(LimitUpload, _Component);

  var _super = _createSuper(LimitUpload);

  function LimitUpload(props) {
    var _this;

    _classCallCheck(this, LimitUpload);

    _this = _super.call(this, props);

    _this.onChange = function (info) {
      var validateFile = _this.props.validateFile; // this.setState({ fileList: info.fileList });

      if (!validateFile) {
        throw new Error('need validateFile');
      }

      var loading = false;
      var file = info.file;
      var fileList = info.fileList;

      switch (file.status) {
        case 'done':
          var success = validateFile(file);

          if (success) {
            _this.validateFileList(fileList);
          } else {
            _this.onError(file);
          }

          break;

        case 'uploading':
          loading = true;
          break;

        case 'error':
          _this.validateFileList(fileList);

          _this.onError(file);

          break;

        case 'removed':
          _this.validateFileList(fileList);

          break;

        default:
          break;
      }

      if (loading !== _this.state.loading) {
        _this.setState({
          loading: loading
        });
      }
    };

    var defaultFileList = props.defaultFileList,
        value = props.value;
    _this.state = {
      loading: false,
      fileList: value || defaultFileList || []
    };
    return _this;
  }

  _createClass(LimitUpload, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if ('value' in this.props) {
        var value = this.props.value;
        var fileList = this.state.fileList; // 如果有值，且不相同，赋值；
        // 如果无值，但是state有值，清除state的值

        if (value) {
          if (value !== fileList) {
            this.setState({
              fileList: value
            });
          }
        } else if (fileList && fileList.length) {
          this.setState({
            fileList: []
          });
        }
      }
    }
  }, {
    key: "getAccept",
    value: function getAccept() {
      var _this$props = this.props,
          accept = _this$props.accept,
          type = _this$props.type;

      if (accept === undefined) {
        switch (type) {
          case UploadType.IMAGE:
            return UploadAcceptType.IMAGE;

          default:
            return '';
        }
      }

      return accept;
    }
  }, {
    key: "renderChooseer",
    value: function renderChooseer() {
      var _this$state = this.state,
          loading = _this$state.loading,
          fileList = _this$state.fileList;
      var _this$props2 = this.props,
          maxNumber = _this$props2.maxNumber,
          renderChooser = _this$props2.renderChooser,
          type = _this$props2.type,
          disabled = _this$props2.disabled;
      var fileNumber = fileList.length;
      var chooseEnable = !maxNumber || fileNumber < maxNumber;

      if (!chooseEnable) {
        return null;
      }

      if (renderChooser) {
        return renderChooser(loading);
      }

      switch (type) {
        case UploadType.IMAGE:
          return /*#__PURE__*/React.createElement("div", null, loading ? /*#__PURE__*/React.createElement(LoadingOutlined, null) : /*#__PURE__*/React.createElement(PlusOutlined, null), /*#__PURE__*/React.createElement("div", {
            className: "ant-upload-text"
          }, "\u4E0A\u4F20"));

        default:
          return /*#__PURE__*/React.createElement(_Button, {
            loading: loading,
            disabled: disabled,
            icon: /*#__PURE__*/React.createElement(UploadOutlined, null)
          }, "\u4E0A\u4F20");
      }
    }
  }, {
    key: "onError",
    value: function onError(file) {
      var onError = this.props.onError;

      if (onError) {
        onError(file);
      } else {
        _message.error("".concat(file.name, "\u4E0A\u4F20\u5931\u8D25"));
      }
    }
  }, {
    key: "validateFileList",
    value: function validateFileList(fileList) {
      var _this$props3 = this.props,
          validateFile = _this$props3.validateFile,
          onChange = _this$props3.onChange;

      if (!validateFile) {
        throw new Error('need validateFile');
      }

      var newFileList = fileList.filter(function (file) {
        return validateFile(file);
      });
      this.setState({
        fileList: newFileList
      }, function () {
        if (onChange) {
          onChange(newFileList);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          type = _this$props4.type,
          disabled = _this$props4.disabled,
          action = _this$props4.action,
          uploadProps = _this$props4.uploadProps,
          disableCredentials = _this$props4.disableCredentials;
      var fileList = this.state.fileList;

      var props = _objectSpread({
        fileList: fileList,
        disabled: disabled,
        accept: this.getAccept(),
        action: action,
        withCredentials: !disableCredentials,
        onChange: this.onChange,
        listType: type === UploadType.IMAGE ? 'picture-card' : 'text'
      }, uploadProps);

      switch (type) {
        case UploadType.IMAGE:
          return /*#__PURE__*/React.createElement(_Upload, Object.assign({}, props, {
            listType: "picture-card"
          }), this.renderChooseer());

        default:
          return /*#__PURE__*/React.createElement(_Upload, Object.assign({}, props), this.renderChooseer());
      }
    }
  }]);

  return LimitUpload;
}(Component);

export default LimitUpload;