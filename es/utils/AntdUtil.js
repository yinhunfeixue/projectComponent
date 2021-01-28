import "antd/es/tree/style/css";
import _Tree from "antd/es/tree";
import "antd/es/select/style/css";
import _Select from "antd/es/select";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import React from 'react';

var AntdUtil = /*#__PURE__*/function () {
  function AntdUtil() {
    _classCallCheck(this, AntdUtil);
  }

  _createClass(AntdUtil, null, [{
    key: "createSelectOptions",

    /**
     * 根据数据源创建select的options列表
     * @param dataSource 数据源
     * @param labelFunction 把每一项转换成显示文字的函数，如果不设置，则使用toString()
     */
    value: function createSelectOptions(dataSource, labelFunction, valueFunction) {
      if (dataSource && dataSource.length) {
        return dataSource.map(function (item, i) {
          return /*#__PURE__*/React.createElement(_Select.Option, {
            key: i.toString(),
            value: valueFunction ? valueFunction(item) : item
          }, labelFunction ? labelFunction(item) : item);
        });
      }

      return [];
    }
    /**
     * 渲染树
     *
     * @param dataSource 数据源
     * @param treeProps 给树的props，例如onSelect
     * @param getKey 获取key值，可以是属性名称，也可以是一个函数
     * @param getTitle 获取title值，可以是属性名称，也可以是一个函数
     * @param getChildren 获取子元素列表，可以是属性名称，也可以是一个函数
     * @param createNodeProps 创建给每个node的props
     */

  }, {
    key: "rendeTree",
    value: function rendeTree(dataSource, treeProps) {
      var getKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
      var getTitle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
      var getChildren = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'children';
      var createNodeProps = arguments.length > 5 ? arguments[5] : undefined;

      if (dataSource) {
        var treeData = this.loopTreeNode(dataSource, getKey, getTitle, getChildren, createNodeProps);
        return /*#__PURE__*/React.createElement(_Tree, Object.assign({}, treeProps, {
          treeData: treeData
        }));
      }

      return null;
    }
  }, {
    key: "loopTreeNode",
    value: function loopTreeNode(treeData) {
      var _this = this;

      var getKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
      var getTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'name';
      var getChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
      var createNodeProps = arguments.length > 4 ? arguments[4] : undefined;
      return treeData.map(function (item) {
        var children = typeof getChildren === 'string' ? item[getChildren] : getChildren(item);
        var key = typeof getKey === 'string' ? item[getKey] : getKey(item);
        var title = typeof getTitle === 'string' ? item[getTitle] : getTitle(item);
        var otherProps = createNodeProps ? createNodeProps(item) : null;

        var result = _objectSpread({
          key: key,
          title: title
        }, otherProps);

        if (children) {
          result.children = _this.loopTreeNode(children, getKey, getTitle, getChildren, createNodeProps);
        }

        return result;
      });
    }
  }]);

  return AntdUtil;
}();

export default AntdUtil;