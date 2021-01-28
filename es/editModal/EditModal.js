function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/modal/style/css";
import _Modal from "antd/es/modal";
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
import EditForm from '../editForm/EditForm';

var EditModal = /*#__PURE__*/function (_Component) {
  _inherits(EditModal, _Component);

  var _super = _createSuper(EditModal);

  function EditModal(props) {
    var _this;

    _classCallCheck(this, EditModal);

    _this = _super.call(this, props);
    _this.editForm = null;

    _this.close = function () {
      var close = _this.props.close;

      if (close) {
        close();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(EditModal, [{
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props = this.props,
          editFormProps = _this$props.editFormProps,
          renderTitle = _this$props.renderTitle;

      if (renderTitle) {
        return renderTitle();
      }

      var source = editFormProps.source,
          updateFunction = editFormProps.updateFunction;

      if (!source) {
        return '新增';
      } else if (!updateFunction) {
        return '查看';
      } else {
        return '编辑';
      }
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this2 = this;

      var loading = this.state.loading;

      if (this.readOnly) {
        return null;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, {
        disabled: loading,
        onClick: function onClick() {
          if (_this2.editForm) {
            _this2.editForm.cancel();
          }
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(_Button, {
        loading: loading,
        type: "primary",
        onClick: function onClick() {
          if (_this2.editForm) {
            _this2.editForm.submit();
          }
        }
      }, "\u4FDD\u5B58"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          visible = _this$props2.visible,
          editFormProps = _this$props2.editFormProps,
          modalProps = _this$props2.modalProps,
          className = _this$props2.className,
          style = _this$props2.style;
      var _onOk = editFormProps.onOk;
      var loading = this.state.loading;
      return /*#__PURE__*/React.createElement(_Modal, Object.assign({
        className: className,
        style: style,
        maskClosable: !loading
      }, modalProps, {
        title: this.renderTitle(),
        destroyOnClose: true,
        visible: visible,
        footer: this.renderFooter(),
        onCancel: this.close,
        closable: !loading
      }), /*#__PURE__*/React.createElement(EditForm, Object.assign({
        ref: function ref(target) {
          if (_this3.editForm !== target) {
            _this3.editForm = target;
          }
        },
        onLoadingChange: function onLoadingChange(loading) {
          _this3.setState({
            loading: loading
          });
        },
        hideControls: true
      }, editFormProps, {
        onCancel: function onCancel() {
          _this3.close();

          if (editFormProps.onCancel) {
            editFormProps.onCancel();
          }
        },
        onOk: function onOk() {
          _this3.close();

          if (_onOk) {
            _onOk();
          }
        }
      })));
    }
  }, {
    key: "readOnly",
    get: function get() {
      var editFormProps = this.props.editFormProps;
      var source = editFormProps.source,
          updateFunction = editFormProps.updateFunction;
      return source && !updateFunction;
    }
  }]);

  return EditModal;
}(Component);

export default EditModal;