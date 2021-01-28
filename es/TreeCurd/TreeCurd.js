function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/spin/style/css";
import _Spin from "antd/es/spin";
import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/input/style/css";
import _Input from "antd/es/input";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React, { Component } from 'react';
import ConfirmButton from '../confirmButton/ConfirmButton';
import AntdUtil from '../utils/AntdUtil';
import "./TreeCurd.css";

var classnames = require('classnames');

var Search = _Input.Search;
export var EditType;

(function (EditType) {
  EditType["ADD"] = "add";
  EditType["EDIT"] = "edit";
  EditType["DEFAULT"] = "";
})(EditType || (EditType = {}));
/**
 * 一个可以增删改查的树
 *
 * @class TreeCurd
 * @extends {Component<ITreeCurdProps<T>, ITreeCurdState<T>>}
 * @template T
 */


var TreeCurd = /*#__PURE__*/function (_Component) {
  _inherits(TreeCurd, _Component);

  var _super = _createSuper(TreeCurd);

  function TreeCurd() {
    var _this;

    _classCallCheck(this, TreeCurd);

    _this = _super.apply(this, arguments);
    _this.state = {
      loading: false,
      autoExpandParent: true,
      treeData: [],
      expandedKeys: [],
      checkedKeys: [],
      checkedItems: [],
      selectedKeys: [],
      selectedItems: [],
      searchValue: '',
      type: EditType.DEFAULT
    };

    _this.refresh = function () {
      _this.requestTreeData().then(function () {
        _this.updateSelectedItems();
      });
    };

    _this.updateSelectedItems = function () {
      var selectedKeys = _this.state.selectedKeys;
      var selectedItems = [];
      var treeData = _this.state.treeData;

      _this.getItemsByIds(treeData, selectedKeys, selectedItems);

      _this.setState({
        selectedItems: selectedItems
      });
    };

    _this.getExtraData = function () {
      var _this$state = _this.state,
          checkedKeys = _this$state.checkedKeys,
          checkedItems = _this$state.checkedItems,
          selectedKeys = _this$state.selectedKeys,
          selectedItems = _this$state.selectedItems,
          loading = _this$state.loading,
          type = _this$state.type;
      return {
        checkedKeys: checkedKeys,
        checkedItems: checkedItems,
        selectedKeys: selectedKeys,
        selectedItems: selectedItems,
        loading: loading,
        refresh: _this.refresh,
        type: type
      };
    };

    _this.updateCheckedItems = function (checkedInfo) {
      var checkedKeys = _this.state.checkedKeys;
      var checkedItems = [];
      var treeData = _this.state.treeData;

      _this.getItemsByIds(treeData, checkedKeys, checkedItems);

      _this.setState({
        checkedItems: checkedItems
      }, function () {
        var extraData = _this.getExtraData();

        if (_this.props.onCheck) {
          _this.props.onCheck(extraData, checkedInfo);
        }
      });
    };

    _this.requestTreeData = function (type) {
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
          var searchValue, _this$props, getTreeData, getKey, defaultExpandedKeys, defaultCheckedKeys, res, expandedKeys, checkedKeys, node0, children, key;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  searchValue = _this.state.searchValue;
                  _this$props = _this.props, getTreeData = _this$props.getTreeData, getKey = _this$props.getKey, defaultExpandedKeys = _this$props.defaultExpandedKeys, defaultCheckedKeys = _this$props.defaultCheckedKeys;

                  _this.setLoading(true);

                  _context.next = 5;
                  return getTreeData(searchValue);

                case 5:
                  res = _context.sent;

                  _this.setLoading(false); // 获取默认展开节点


                  expandedKeys = [];
                  checkedKeys = [];

                  if (res && res.length) {
                    node0 = res[0];
                    children = _this.getNodeChildren(node0);

                    if (children && children.length) {
                      key = _this.getItemKey(node0);
                      expandedKeys = defaultExpandedKeys && defaultExpandedKeys.length > 0 ? defaultExpandedKeys : [key];
                    }
                  }

                  if (defaultCheckedKeys) {
                    checkedKeys = defaultCheckedKeys;
                  }

                  _this.setState({
                    treeData: res,
                    expandedKeys: expandedKeys,
                    checkedKeys: checkedKeys
                  }, function () {
                    resolve('');
                  });

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.getItemsByIds = function (treeData, ids, selectedItems) {
      var _this$props2 = _this.props,
          _this$props2$getKey = _this$props2.getKey,
          getKey = _this$props2$getKey === void 0 ? 'id' : _this$props2$getKey,
          _this$props2$getChild = _this$props2.getChildren,
          getChildren = _this$props2$getChild === void 0 ? 'children' : _this$props2$getChild;

      for (var i = 0; i < treeData.length; i++) {
        var item = treeData[i];

        var key = _this.getItemKey(item);

        var children = _this.getNodeChildren(item);

        for (var j = 0; j < ids.length; j++) {
          if (key === ids[j]) {
            selectedItems.push(treeData[i]);
          }
        }

        if (children) {
          _this.getItemsByIds(children, ids, selectedItems);
        }
      }
    };

    _this.onSelect = function (selectedKeys) {
      _this.setState({
        selectedKeys: selectedKeys,
        autoExpandParent: false,
        type: selectedKeys && selectedKeys.length ? EditType.EDIT : EditType.DEFAULT
      }, function () {
        _this.updateSelectedItems();
      });
    };

    _this.onExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys
      }, function () {
        if (_this.props.onExpand) {
          _this.props.onExpand(expandedKeys);
        }
      });
    };

    _this.onCheck = function (checkedKeys, checkedInfo) {
      _this.setState({
        checkedKeys: checkedKeys
      }, function () {
        _this.updateCheckedItems(checkedInfo);
      });
    };

    _this.defaultRenderOptItem = function (extraData) {
      var selectedKeys = extraData.selectedKeys,
          checkedKeys = extraData.checkedKeys,
          refresh = extraData.refresh;
      var _this$props3 = _this.props,
          deleteFunction = _this$props3.deleteFunction,
          checkable = _this$props3.checkable;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, {
        type: "primary",
        onClick: function onClick() {
          return _this.setState({
            type: EditType.ADD
          });
        }
      }, "\u65B0\u589E"), selectedKeys && selectedKeys.length > 0 && /*#__PURE__*/React.createElement(ConfirmButton, {
        modalContent: {
          title: '这个操作不可逆',
          content: /*#__PURE__*/React.createElement("span", null, "\u786E\u5B9A\u8981", /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'red'
            }
          }, "\u5220\u9664"), "\u8BE5\u8282\u70B9\uFF1F")
        },
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var ids;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!deleteFunction) {
                      _context2.next = 5;
                      break;
                    }

                    ids = checkable !== undefined ? checkedKeys : selectedKeys;
                    _context2.next = 4;
                    return deleteFunction(ids);

                  case 4:
                    refresh();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      }));
    };

    return _this;
  }

  _createClass(TreeCurd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.requestTreeData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultCheckedKeys !== this.props.defaultCheckedKeys) {
        this.requestTreeData();
      }
    }
  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this.setState({
        loading: loading
      });
    }
  }, {
    key: "getNodeChildren",
    value: function getNodeChildren(item) {
      var _this$props$getChildr = this.props.getChildren,
          getChildren = _this$props$getChildr === void 0 ? 'children' : _this$props$getChildr;
      return typeof getChildren === 'string' ? item[getChildren] : getChildren(item);
    }
  }, {
    key: "getItemKey",
    value: function getItemKey(item) {
      var _this$props$getKey = this.props.getKey,
          getKey = _this$props$getKey === void 0 ? 'id' : _this$props$getKey;
      return typeof getKey === 'string' ? item[getKey] : getKey(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          loading = _this$state2.loading,
          treeData = _this$state2.treeData,
          expandedKeys = _this$state2.expandedKeys,
          autoExpandParent = _this$state2.autoExpandParent,
          checkedKeys = _this$state2.checkedKeys,
          checkedItems = _this$state2.checkedItems,
          selectedKeys = _this$state2.selectedKeys,
          selectedItems = _this$state2.selectedItems,
          type = _this$state2.type;
      var _this$props4 = this.props,
          getKey = _this$props4.getKey,
          getTitle = _this$props4.getTitle,
          getChildren = _this$props4.getChildren,
          treeContentClassName = _this$props4.treeContentClassName,
          editContentClassName = _this$props4.editContentClassName,
          optClassOName = _this$props4.optClassOName,
          checkClassName = _this$props4.checkClassName,
          treeProps = _this$props4.treeProps,
          checkable = _this$props4.checkable,
          _this$props4$width = _this$props4.width,
          width = _this$props4$width === void 0 ? 200 : _this$props4$width,
          _this$props4$minHeigh = _this$props4.minHeight,
          minHeight = _this$props4$minHeigh === void 0 ? 300 : _this$props4$minHeigh,
          renderExtra = _this$props4.renderExtra,
          renderEditExtra = _this$props4.renderEditExtra,
          renderCheckExtra = _this$props4.renderCheckExtra,
          showSearch = _this$props4.showSearch,
          getNodeProps = _this$props4.getNodeProps,
          _this$props4$editEnab = _this$props4.editEnable,
          editEnable = _this$props4$editEnab === void 0 ? true : _this$props4$editEnab;
      var checkProps = {};

      if (checkable !== undefined) {
        checkProps = {
          checkable: true,
          onCheck: this.onCheck,
          checkedKeys: checkedKeys
        };
      }

      var TreeProps = _objectSpread(_objectSpread({
        autoExpandParent: autoExpandParent,
        onSelect: this.onSelect,
        onExpand: this.onExpand,
        expandedKeys: expandedKeys
      }, checkProps), treeProps);

      return /*#__PURE__*/React.createElement("div", {
        className: "TreeCurd"
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames('optContent', optClassOName)
      }, editEnable ? renderExtra ? renderExtra(this.getExtraData(), this.defaultRenderOptItem) : this.defaultRenderOptItem(this.getExtraData()) : null), /*#__PURE__*/React.createElement("div", {
        className: "treeCurdContent",
        style: {
          minHeight: minHeight
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames('treeContent', treeContentClassName),
        style: {
          width: width
        }
      }, showSearch !== undefined && /*#__PURE__*/React.createElement("div", {
        style: {
          marginBottom: 20
        }
      }, /*#__PURE__*/React.createElement(Search, {
        enterButton: true,
        onChange: function onChange(e) {
          return _this2.setState({
            searchValue: e.target.value
          }, function () {
            return _this2.refresh();
          });
        }
      })), /*#__PURE__*/React.createElement(_Spin, {
        spinning: this.props.defaultExpandedKeys || this.props.defaultCheckedKeys ? false : loading
      }, AntdUtil.rendeTree(treeData, TreeProps, getKey, getTitle, getChildren, getNodeProps)), /*#__PURE__*/React.createElement("div", {
        className: classnames('checkContent', checkClassName)
      }, checkable !== undefined && renderCheckExtra ? renderCheckExtra(this.getExtraData()) : null)), /*#__PURE__*/React.createElement("div", {
        className: classnames('editContent', editContentClassName)
      }, renderEditExtra && renderEditExtra(this.getExtraData()))));
    }
  }]);

  return TreeCurd;
}(Component);

export default TreeCurd;