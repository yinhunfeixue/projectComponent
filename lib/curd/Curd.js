"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _icons = require("@ant-design/icons");

var _react = _interopRequireWildcard(require("react"));

var _ConfirmButton = _interopRequireDefault(require("../confirmButton/ConfirmButton"));

var _SearchForm = _interopRequireDefault(require("../searchForm/SearchForm"));

var _SearchTable = _interopRequireDefault(require("../searchTable/SearchTable"));

require("./Curd.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var classnames = require('classnames');
/**
 * 包含增删改查的组件
 *
 * ## 自带以下功能
 * + 列表--分页表格
 * + 增--表格上方操作区“新增按钮”-->打开新建弹窗
 * + 改--操作列“编辑按钮”-->打开编辑弹窗
 * + 删--操作列“删除按钮”-->删除操作
 *
 * ## 必填属性
 * + columns--表格列
 * + getListFunction--获取列表的方法
 *
 * ## 可选属性
 *
 * + rowKey--标识符，默认ID。 删除会用以rowKey为参数
 * + 扩展操作列
 * + 扩展表格上方操作区
 * + searchItems--搜索表单项，如设置，则自动在表格上方显示搜索表单
 * + renderEdit--渲染编辑视图，如果设置，则自动自动显示编辑按钮和新建按钮。
 * + renderCreate--渲染新建视图，如果新建和编辑一样，可共享renderEdit方法
 * + deleteFunction--删除，如设置，则
 *    + 自动显示“删除按钮”
 *    + 自动使表格可选择
 * + 禁用：增、改、删
 * + 禁用：编辑列
 * + 自定义：编辑按钮、删除按钮、新建按钮
 */


var Curd = /*#__PURE__*/function (_Component) {
  _inherits(Curd, _Component);

  var _super = _createSuper(Curd);

  function Curd(props) {
    var _this;

    _classCallCheck(this, Curd);

    _this = _super.call(this, props);

    _this.defaultRenderExtra = function (extraData) {
      var selectedRowKeys = extraData.selectedRowKeys;
      var _this$props = _this.props,
          disabledCreate = _this$props.disabledCreate,
          renderCreater = _this$props.renderCreater,
          renderCreateElement = _this$props.renderCreateElement,
          renderBatchDeleteElement = _this$props.renderBatchDeleteElement;
      var deletingKeyList = _this.state.deletingKeyList;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disabledCreate && renderCreater && /*#__PURE__*/_react.default.createElement("span", {
        onClick: function onClick() {
          _this.showCreate();
        }
      }, renderCreateElement ? renderCreateElement() : /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        icon: /*#__PURE__*/_react.default.createElement(_icons.EditOutlined, null)
      }, "\u65B0\u5EFA")), _this._batchDeleteEnable && /*#__PURE__*/_react.default.createElement(_ConfirmButton.default, {
        onConfirm: function onConfirm() {
          _this.remove(selectedRowKeys);
        },
        getElement: function getElement(loading) {
          return renderBatchDeleteElement ? renderBatchDeleteElement() : /*#__PURE__*/_react.default.createElement(_button.default, {
            icon: /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, null),
            danger: true,
            loading: loading || deletingKeyList.length > 0
          }, "\u6279\u91CF\u5220\u9664");
        }
      }));
    };

    _this.defaultRenderEditColumns = function (record, params) {
      var _ref = params || {},
          _ref$disabledRecordDe = _ref.disabledRecordDelete,
          disabledRecordDelete = _ref$disabledRecordDe === void 0 ? false : _ref$disabledRecordDe,
          _ref$disabledRecordEd = _ref.disabledRecordEdit,
          disabledRecordEdit = _ref$disabledRecordEd === void 0 ? false : _ref$disabledRecordEd,
          _ref$disabledRecordPr = _ref.disabledRecordPreview,
          disabledRecordPreview = _ref$disabledRecordPr === void 0 ? false : _ref$disabledRecordPr;

      var showDelete = _this._showDelete && !disabledRecordDelete;
      var showEdit = _this._showEdit && !disabledRecordEdit;
      var showPreview = _this._showPreview && !disabledRecordPreview;

      var key = _this.getRecordKey(record);

      var _this$props2 = _this.props,
          renderDeleteElement = _this$props2.renderDeleteElement,
          renderEditElement = _this$props2.renderEditElement,
          renderEditPreviewElement = _this$props2.renderEditPreviewElement;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showDelete && /*#__PURE__*/_react.default.createElement(_ConfirmButton.default, {
        onConfirm: function onConfirm() {
          _this.remove([_this.getRecordKey(record)]);
        },
        getElement: function getElement(loading) {
          var loadingDelete = _this.state.deletingKeyList;
          return renderDeleteElement ? renderDeleteElement() : /*#__PURE__*/_react.default.createElement(_tooltip.default, {
            title: "\u5220\u9664"
          }, /*#__PURE__*/_react.default.createElement(_button.default, {
            type: "link",
            danger: true,
            icon: /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, null),
            loading: loading || loadingDelete.indexOf(key) >= 0
          }));
        }
      }), showEdit && /*#__PURE__*/_react.default.createElement("span", {
        onClick: function onClick() {
          return _this.edit(record);
        }
      }, renderEditElement ? renderEditElement() : /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        title: "\u7F16\u8F91"
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        icon: /*#__PURE__*/_react.default.createElement(_icons.EditOutlined, null),
        type: "link"
      }))), showPreview && (renderEditPreviewElement ? renderEditPreviewElement() : /*#__PURE__*/_react.default.createElement("span", {
        onClick: function onClick() {
          return _this.preview(record);
        }
      }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        title: "\u67E5\u770B"
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        icon: /*#__PURE__*/_react.default.createElement(_icons.EyeOutlined, null),
        type: "link"
      })))));
    };

    _this.closeEdit = function () {
      _this.setState({
        visibleEdit: false
      });
    };

    _this.closePreview = function () {
      _this.setState({
        visiblePreview: false
      });
    };

    _this.showCreate = function () {
      _this.setState({
        visibleCreate: true
      });
    };

    _this.closeCreate = function () {
      _this.setState({
        visibleCreate: false
      });
    };

    _this.state = {
      deletingKeyList: []
    };
    return _this;
  }

  _createClass(Curd, [{
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(idList) {
        var deleteFunction;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (idList) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                deleteFunction = this.props.deleteFunction;

                if (deleteFunction) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.setState({
                  deletingKeyList: idList
                });
                _context.next = 8;
                return deleteFunction(idList);

              case 8:
                this.setState({
                  deletingKeyList: []
                });

                if (this.extraData) {
                  this.extraData.refresh();
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function remove(_x) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "edit",
    value: function edit(record) {
      this.setState({
        visibleEdit: true,
        editRecord: record
      });
    }
  }, {
    key: "preview",
    value: function preview(record) {
      this.setState({
        visiblePreview: true,
        editRecord: record
      });
    }
  }, {
    key: "getRecordKey",
    value: function getRecordKey(record) {
      var _this$props$rowKey = this.props.rowKey,
          rowKey = _this$props$rowKey === void 0 ? 'id' : _this$props$rowKey;

      if (typeof rowKey === 'string') {
        return record[rowKey];
      }

      return rowKey(record);
    }
  }, {
    key: "getEditColumn",
    value: function getEditColumn() {
      var _this2 = this;

      var _this$props3 = this.props,
          disabledEditColumn = _this$props3.disabledEditColumn,
          renderEditColumns = _this$props3.renderEditColumns,
          _this$props3$editColu = _this$props3.editColumnWidth,
          editColumnWidth = _this$props3$editColu === void 0 ? 120 : _this$props3$editColu;

      if (disabledEditColumn) {
        return null;
      }

      return {
        title: '操作',
        fixed: 'right',
        width: editColumnWidth,
        align: 'right',
        className: 'fh-CurdEditColumn',
        render: function render(text, record, index) {
          return renderEditColumns ? renderEditColumns(record, index, _this2.defaultRenderEditColumns) : _this2.defaultRenderEditColumns(record);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          columns = _this$props4.columns,
          getListFunction = _this$props4.getListFunction,
          onDataChange = _this$props4.onDataChange,
          onSearchParamsChange = _this$props4.onSearchParamsChange,
          _this$props4$rowKey = _this$props4.rowKey,
          rowKey = _this$props4$rowKey === void 0 ? 'id' : _this$props4$rowKey,
          deleteFunction = _this$props4.deleteFunction,
          selectedEnable = _this$props4.selectedEnable,
          renderTableExtra = _this$props4.renderTableExtra,
          searchItem = _this$props4.searchItem,
          pageSize = _this$props4.pageSize,
          disabledCreate = _this$props4.disabledCreate,
          disabledDelete = _this$props4.disabledDelete,
          renderCreater = _this$props4.renderCreater,
          renderEditer = _this$props4.renderEditer,
          renderPreviewer = _this$props4.renderPreviewer,
          showSizeChanger = _this$props4.showSizeChanger,
          showQuickJumper = _this$props4.showQuickJumper,
          inlineMaxNumber = _this$props4.inlineMaxNumber,
          searchFormProps = _this$props4.searchFormProps,
          tableProps = _this$props4.tableProps,
          className = _this$props4.className,
          style = _this$props4.style,
          showTotal = _this$props4.showTotal;
      var _this$state = this.state,
          visibleCreate = _this$state.visibleCreate,
          visibleEdit = _this$state.visibleEdit,
          editRecord = _this$state.editRecord,
          visiblePreview = _this$state.visiblePreview;
      var tableSelectedEnable = Boolean(selectedEnable === true || selectedEnable === undefined && !disabledDelete && deleteFunction);
      var editColumn = this.getEditColumn();
      var useColumns = editColumn ? columns.concat([editColumn]) : columns;
      return /*#__PURE__*/_react.default.createElement(_SearchTable.default, {
        columns: useColumns,
        getListFunction: getListFunction,
        onDataChange: onDataChange,
        onSearchParamsChange: onSearchParamsChange,
        rowKey: rowKey,
        pageSize: pageSize,
        showSizeChanger: showSizeChanger,
        showQuickJumper: showQuickJumper,
        showTotal: showTotal,
        tableProps: _objectSpread({
          scroll: {
            x: 800
          }
        }, tableProps),
        defaultSearchParams: searchFormProps === null || searchFormProps === void 0 ? void 0 : searchFormProps.initialValues,
        style: style,
        className: classnames('fh-Curd', className),
        selectedEnable: tableSelectedEnable,
        renderExtra: function renderExtra(extraData) {
          var setSearchParams = extraData.setSearchParams;
          _this3.extraData = extraData;
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, searchItem && /*#__PURE__*/_react.default.createElement(_SearchForm.default, Object.assign({}, searchFormProps, {
            inlineMaxNumber: inlineMaxNumber,
            itemList: searchItem,
            onSubmit: function onSubmit(values) {
              setSearchParams(values);
            }
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: "fh-ControlGroup"
          }, renderTableExtra ? renderTableExtra(extraData, _this3.defaultRenderExtra) : _this3.defaultRenderExtra(extraData)), !disabledCreate && renderCreater && renderCreater(Boolean(visibleCreate), _this3.closeCreate, extraData), _this3._showEdit && editRecord && renderEditer && renderEditer(Boolean(visibleEdit), _this3.closeEdit, extraData, editRecord), _this3._showPreview && editRecord && renderPreviewer && renderPreviewer(Boolean(visiblePreview), _this3.closePreview, extraData, editRecord));
        }
      });
    }
  }, {
    key: "_showDelete",
    get: function get() {
      var _this$props5 = this.props,
          deleteFunction = _this$props5.deleteFunction,
          disabledDelete = _this$props5.disabledDelete;
      return Boolean(!disabledDelete && deleteFunction);
    }
  }, {
    key: "_showEdit",
    get: function get() {
      var _this$props6 = this.props,
          renderEditer = _this$props6.renderEditer,
          disabledEdit = _this$props6.disabledEdit;
      return Boolean(!disabledEdit && renderEditer);
    }
  }, {
    key: "_showPreview",
    get: function get() {
      var _this$props7 = this.props,
          renderPreviewer = _this$props7.renderPreviewer,
          disabledPreview = _this$props7.disabledPreview;
      return Boolean(!disabledPreview && renderPreviewer);
    }
  }, {
    key: "_batchDeleteEnable",
    get: function get() {
      if (this.extraData) {
        var selectedRowKeys = this.extraData.selectedRowKeys;
        var _this$props8 = this.props,
            disabledDelete = _this$props8.disabledDelete,
            deleteFunction = _this$props8.deleteFunction;
        return Boolean(!disabledDelete && deleteFunction && selectedRowKeys && selectedRowKeys.length);
      }

      return false;
    }
  }]);

  return Curd;
}(_react.Component);

var _default = Curd;
exports.default = _default;