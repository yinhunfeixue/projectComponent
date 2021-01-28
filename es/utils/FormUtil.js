import "antd/es/row/style/css";
import _Row from "antd/es/row";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import Col from 'antd/lib/col';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';

var FormUtil = /*#__PURE__*/function () {
  function FormUtil() {
    _classCallCheck(this, FormUtil);
  }

  _createClass(FormUtil, null, [{
    key: "renderFormItems",

    /**
     * 渲染表单项
     * @param formItemList 表单数据源
     *    * @param columnCount 列数，默认为2
     * @param defaultLabelSpan 每个表单项的标签默认占用的列数
     */
    value: function renderFormItems(formItemList) {
      var columnCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var defaultLabelSpan = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
      var defaultWrapSpan = arguments.length > 3 ? arguments[3] : undefined;

      if (!formItemList || !formItemList.length) {
        return null;
      }

      var defaultSpan = 24 / columnCount;
      var rows = []; // 循环表单项

      for (var i = 0; i < formItemList.length; i++) {
        var item = formItemList[i]; // 获取一个表单项占多少列，优先级从高到低为
        // 1. item.span
        // 2. item.label.length > 6? 占一整列（24）：defaultSpan

        var span = item.span;

        if (!span) {
          if (item.label && typeof item.label === 'string' && item.label.length > 6) {
            span = 24;
          } else {
            span = defaultSpan;
          }
        }

        span = Math.min(24, span); // 创建formItem
        // 获取 label占用的空间，优先用item设置的值，未设置，则根据defaultSpan取一个合适的值，以确保对齐
        // 例如：defaultSpan是12, defaultLabelSpan=6，而当前ispan = 8, 则当前item的labelspan= 12*6/8

        var labelSpan = Math.min(24, item.labelSpan !== undefined ? item.labelSpan : Math.round(defaultLabelSpan * defaultSpan / span)); // 如果表单项有label，则设置labelCol；否则，设置offsetCol，以确保表单元素是对齐的

        var itemProps = {};
        itemProps.wrapperCol = {};

        if (item.label) {
          itemProps.labelCol = {
            span: labelSpan
          };
        } else {
          itemProps.wrapperCol.offset = labelSpan;
        } // 设置内容占用的列数
        // 优先使用item.wrapSpan，
        // 其次为defaultWrapSpan
        // 如果都未设置，则: 自动计算 = 24 - labelSpan


        if (item.wrapSpan !== undefined) {
          itemProps.wrapperCol.span = item.wrapSpan;
        } else if (defaultWrapSpan) {
          itemProps.wrapperCol.span = defaultWrapSpan;
        } else {
          itemProps.wrapperCol.span = 24 - labelSpan;
        }

        var formItem = null;

        if (item.content) {
          var props = Object.assign(_objectSpread(_objectSpread(_objectSpread({
            label: item.label,
            name: item.name,
            rules: item.rules,
            valuePropName: item.valuePropName || 'value'
          }, itemProps), item.formItemProps), {}, {
            children: null
          }));

          if (item.contentIsFormItem) {
            formItem = /*#__PURE__*/React.cloneElement(item.content, Object.assign(props, item.content.props));
          } else {
            formItem = /*#__PURE__*/React.createElement(FormItem, Object.assign({}, props), item.content);
          }
        } // 创建col


        var col = {
          span: span,
          formItem: formItem
        }; // 获取合适的row
        // 先获取已存在的最后一个row，如果不存在，或者span装不下当前col，则新建一个

        var row = void 0;

        if (rows.length) {
          row = rows[rows.length - 1];
        }

        if (!row || row.totalSpan + span > 24) {
          row = {
            totalSpan: 0,
            cols: []
          };
          rows.push(row);
        }

        row.totalSpan += span;
        row.cols.push(col);
      } // 循环row，渲染react节点


      return rows.map(function (row, rowIndex) {
        return /*#__PURE__*/React.createElement(_Row, {
          key: rowIndex
        }, row.cols.map(function (col, colIndex) {
          return /*#__PURE__*/React.createElement(Col, {
            key: colIndex,
            span: col.span
          }, col.formItem);
        }));
      });
    }
  }, {
    key: "renderInlinFormItems",
    value: function renderInlinFormItems(formItemList) {
      if (!formItemList || !formItemList.length) {
        return null;
      }

      return formItemList.map(function (item, index) {
        return /*#__PURE__*/React.createElement(FormItem, Object.assign({
          key: index,
          label: item.label,
          name: item.name,
          rules: item.rules
        }, item.formItemProps), item.content);
      });
    }
  }]);

  return FormUtil;
}();

export default FormUtil;