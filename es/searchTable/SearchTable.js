function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/table/style/css";
import _Table from "antd/es/table";

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
var Column = _Table.Column;

var SearchTable = /*#__PURE__*/function (_Component) {
  _inherits(SearchTable, _Component);

  var _super = _createSuper(SearchTable);

  function SearchTable(props) {
    var _this;

    _classCallCheck(this, SearchTable);

    _this = _super.call(this, props);

    _this.refresh = function () {
      _this.requestList();
    };

    _this.setSearchParams = function (searchParams) {
      var onSearchParamsChange = _this.props.onSearchParamsChange;

      _this.setState({
        searchParams: searchParams
      }, function () {
        _this.changePage(1);

        if (onSearchParamsChange) {
          onSearchParamsChange(searchParams);
        }
      });
    };

    _this.setColumn = function (source, target) {
      var newColumns = _this.state.newColumns;
      var titleList = [];
      var newColumns1 = [];

      for (var i = 0; i < newColumns.length; i += 1) {
        titleList.push(newColumns[i].title);
        newColumns1.push(newColumns[i]);
      }

      var sourceIndex = titleList.indexOf(source.title);
      var targetIndex = titleList.indexOf(target.title);
      newColumns1[sourceIndex] = newColumns[targetIndex];
      newColumns1[targetIndex] = newColumns[sourceIndex];

      _this.setState({
        newColumns: newColumns1
      });
    };

    _this.state = {
      total: 0,
      current: 1,
      dataSource: [],
      newColumns: _this.props.columns,
      loading: false,
      searchParams: props.defaultSearchParams
    };
    return _this;
  }

  _createClass(SearchTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.requestList();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.columns !== this.props.columns) {
        this.setState({
          newColumns: this.props.columns
        });
      }
    }
  }, {
    key: "changePage",
    value: function changePage(pageIndex) {
      var _this2 = this;

      var current = this.state.current;

      if (!pageIndex) {
        pageIndex = current;
      }

      var maxPageIndex = this.maxPageIndex;

      if (pageIndex < 1) {
        pageIndex = 1;
      }

      if (pageIndex > maxPageIndex) {
        pageIndex = maxPageIndex;
      }

      this.setState({
        current: pageIndex
      }, function () {
        return _this2.requestList();
      });
    }
  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this.setState({
        loading: loading
      });
    }
  }, {
    key: "requestList",
    value: function () {
      var _requestList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var _this$props, getListFunction, onDataChange, searchParams, current, res, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, getListFunction = _this$props.getListFunction, onDataChange = _this$props.onDataChange;
                searchParams = this.state.searchParams;
                current = this.state.current;
                this.setLoading(true);
                _context.next = 6;
                return getListFunction(current, this.pageSize, searchParams);

              case 6:
                res = _context.sent;
                this.setLoading(false);
                data = {
                  dataSource: res.dataSource,
                  total: res.total
                };
                this.setState(_objectSpread({}, data), function () {
                  if (onDataChange) {
                    onDataChange(data);
                  }

                  if (_this3.state.current > _this3.maxPageIndex) {
                    _this3.changePage();
                  }
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestList() {
        return _requestList.apply(this, arguments);
      }

      return requestList;
    }()
  }, {
    key: "defaultShowTotal",
    value: function defaultShowTotal(total, range) {
      return "\u5171".concat(total, "\u9879");
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          tableClassName = _this$props2.tableClassName,
          style = _this$props2.style,
          tableStyle = _this$props2.tableStyle,
          tableProps = _this$props2.tableProps,
          renderExtra = _this$props2.renderExtra,
          rowKey = _this$props2.rowKey,
          disableAutoHidePage = _this$props2.disableAutoHidePage,
          _this$props2$showTota = _this$props2.showTotal,
          showTotal = _this$props2$showTota === void 0 ? this.defaultShowTotal : _this$props2$showTota,
          selectedEnable = _this$props2.selectedEnable,
          _this$props2$showSize = _this$props2.showSizeChanger,
          showSizeChanger = _this$props2$showSize === void 0 ? true : _this$props2$showSize,
          _this$props2$showQuic = _this$props2.showQuickJumper,
          showQuickJumper = _this$props2$showQuic === void 0 ? true : _this$props2$showQuic,
          dragEnable = _this$props2.dragEnable;
      var pageSize = this.pageSize;
      var _this$state = this.state,
          selectedRowKeys = _this$state.selectedRowKeys,
          selectedRows = _this$state.selectedRows,
          loading = _this$state.loading,
          dataSource = _this$state.dataSource,
          total = _this$state.total,
          current = _this$state.current,
          newColumns = _this$state.newColumns,
          searchParams = _this$state.searchParams;
      var pageTotal = total / pageSize;
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        style: style
      }, renderExtra && renderExtra({
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        loading: loading,
        searchParams: searchParams,
        refresh: this.refresh,
        setSearchParams: this.setSearchParams
      }), /*#__PURE__*/React.createElement(_Table, Object.assign({
        className: tableClassName,
        bordered: true,
        style: tableStyle
      }, tableProps, {
        rowKey: rowKey || 'id',
        loading: loading,
        dataSource: dataSource,
        pagination: !disableAutoHidePage && pageTotal <= 1 ? false : {
          total: total,
          current: current,
          showQuickJumper: showQuickJumper,
          showTotal: showTotal === false ? undefined : showTotal,
          showSizeChanger: showSizeChanger,
          pageSize: pageSize,
          onChange: function onChange(value) {
            _this4.changePage(value);
          },
          onShowSizeChange: function onShowSizeChange(_, size) {
            var oldIndex = current * pageSize;
            var newIndex = Math.ceil(oldIndex / size);

            _this4.setState({
              pageSize: size
            }, function () {
              return _this4.changePage(newIndex);
            });
          }
        },
        rowSelection: selectedEnable ? {
          onChange: function onChange(selectedRowKeys, selectedRows) {
            _this4.setState({
              selectedRowKeys: selectedRowKeys,
              selectedRows: selectedRows
            });
          }
        } : undefined,
        columns: newColumns
      })));
    }
  }, {
    key: "pageSize",
    get: function get() {
      return this.state.pageSize || this.props.pageSize || SearchTable.defaultPageSize || 10;
    }
  }, {
    key: "maxPageIndex",
    get: function get() {
      var total = this.state.total;
      return Math.max(1, Math.ceil(total / this.pageSize));
    }
  }]);

  return SearchTable;
}(Component);

SearchTable.defaultPageSize = 10;
export default SearchTable;