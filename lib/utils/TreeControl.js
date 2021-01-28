"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 一个通用的树结构操作器，对源数据的结构没有要求
 * @author yinhunfeixue
 * @email yinhunfeixue@163.com
 */
var TreeControl = /*#__PURE__*/function () {
  /**
   * 创建树控制器实例
   * @param {String|Function} dataGetter 获取结点值的方法，为字符串或(node)=>object的函数
   * @param {String|Function} childrenGetter 获取结点子结点列表的方法，为字符串或(node)=>object的函数
   */
  function TreeControl() {
    var dataGetter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
    var childrenGetter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
    var childrenCreater = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    _classCallCheck(this, TreeControl);

    if (!dataGetter) {
      throw new Error('dataGetter need value');
    } else if (!childrenGetter) {
      throw new Error('childrenGetter need value');
    } else {
      this.dataGetter = dataGetter;
      this.childrenGetter = childrenGetter;
      this.childrenCreater = childrenCreater;
    }
  }
  /**
   * 过滤树
   * @param tree 树
   * @param equal 是否匹配的方法，返回true，表示结果中包含此结点及基子结点
   */


  _createClass(TreeControl, [{
    key: "filter",
    value: function filter(tree, equal) {
      return this._filterInner(tree, equal, null);
    }
  }, {
    key: "_filterInner",
    value: function _filterInner(tree, equal, parentNode) {
      if (!tree) {
        return [];
      }

      var result = []; // 循环tree
      // 对于每一项，如果equal返回true，添加到结果列表中；否则，递归子列表，如果递归的子列表>=0，添加到结果列表

      for (var i = 0; i < tree.length; i++) {
        var item = _objectSpread({}, tree[i]);

        if (equal(item, i, parentNode)) {
          result.push(item);
        } else {
          var filterChildren = this._filterInner(this.getChildren(item), equal, item);

          if (filterChildren && filterChildren.length > 0) {
            result.push(item);

            this._createChildren(item, filterChildren);
          }
        }
      }

      return result;
    }
    /**
     * 一维数组转换成树结构
     * @param list
     */

  }, {
    key: "listToTree",
    value: function listToTree(list, equalParent) {
      return this.innerListTree(list, equalParent, null);
    }
  }, {
    key: "innerListTree",
    value: function innerListTree(list, equalParent, parent) {
      if (!list) {
        return [];
      } // 循环list，针对每一项item：使用equalParent判断parent是否是item的父结点
      // 如果是，则添加到结果列表；并以item为父结点，查找子列表
      // 否则，不处理


      var result = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];

        if (equalParent(item, parent)) {
          result.push(item);
          var children = this.innerListTree(list, equalParent, item);

          if (children && children.length) {
            this._createChildren(item, children);
          }
        }
      }

      return result;
    }
    /**
     * 搜索满足指定条件的第一个结点
     * @param 树结点的数据
     * @param 匹配函数
     */

  }, {
    key: "search",
    value: function search(tree, equalFunction) {
      var chain = this._searchChainInner(tree, equalFunction);

      return chain && chain.length ? chain[chain.length - 1] : null;
    }
    /**
     * 搜索满足指定条件的第一个结点的父结点
     * @param tree 树
     * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
     */

  }, {
    key: "searchParent",
    value: function searchParent(tree, equalFunction) {
      var chain = this._searchChainInner(tree, equalFunction);

      if (chain && chain.length >= 2) {
        return chain[chain.length - 2];
      }

      return null;
    }
    /**
     * 获取满足指定条件的第一个结点在父结点子列表中的位置，如果无父结点，或结点不存在，返回-1
     * @param tree 树
     * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
     *
     * @return {Number} 指定条件的结点所在的位置
     */

  }, {
    key: "getIndex",
    value: function getIndex(tree, equalFunction) {
      var parent = this.searchParent(tree, equalFunction);

      if (parent) {
        var children = this.getChildren(parent);

        for (var i = 0; i < children.length; i++) {
          if (equalFunction(children[i], i, parent)) {
            return i;
          }
        }
      }

      return -1;
    }
  }, {
    key: "addAt",
    value: function addAt(tree, equalFunction, child) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
      var node = this.search(tree, equalFunction);

      if (node) {
        var children = this.getChildren(node);

        if (!children) {
          children = this._createChildren(node);
        }

        if (children) {
          var realIndex = Math.max(0, Math.min(children.length, index));
          children[realIndex] = child;
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(tree, equalFunction) {
      this._removeInner(tree, equalFunction);
    }
    /**
     *
     * @param tree
     * @param equalFunction
     */

  }, {
    key: "_removeInner",
    value: function _removeInner(tree, equalFunction) {
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (tree) {
        //遍历结点
        for (var i = 0; i < tree.length; i++) {
          var node = tree[i]; //如果当前结点符合被删除的条件，则删除；不符合，则递归子结点

          if (equalFunction(node, i, parent)) {
            tree.splice(i, 1);
            i--;
          } else {
            this._removeInner(this.getChildren(node), equalFunction, node);
          }
        }
      }
    }
    /**
     * 搜索满足条件的第一个结点，并返回从一级结点到指定结点的数组，第一项是一级结点，最后一项是符合条件的结点
     * @param tree 树
     * @param equalFunction 匹配函数
     */

  }, {
    key: "searchChain",
    value: function searchChain(tree, equalFunction) {
      return this._searchChainInner(tree, equalFunction);
    }
    /**
     * 遍历树结点，并对每个结点执行回调函数
     * @param {Array} tree 树
     * @param {Function} forEachFunction 回调函数
     */

  }, {
    key: "forEach",
    value: function forEach(tree, forEachFunction) {
      this._forEachInner(tree, forEachFunction);
    }
    /**
     * 查找所有符合条件的结点，并返回符合条件结点的一维数组
     * @param tree 树
     * @param equalFunction 匹配函数
     */

  }, {
    key: "find",
    value: function find(tree, equalFunction) {
      var result = [];
      this.forEach(tree, function (node, i, parent) {
        if (equalFunction(node, i, parent)) {
          result.push(node);
        }
      });
      return result;
    }
    /**
     * 计算树的结点总数
     * @param tree 树
     */

  }, {
    key: "count",
    value: function count(tree) {
      var result = 0;
      this.forEach(tree, function () {
        result++;
      });
      return result;
    }
    /**
     * 遍历树，并创建和原结构一致的新树。新树的结点为原树结点调用函数处理后的值
     *
     * **注意**，新树不会自动创建子结点，需要在mapFunction中，把返回值和参数中的newChildren进行关联，例如result.children = newChildren
     *
     * @param tree
     * @param {*} mapFunction 格式为(node, index, oldParent, newChildren)=>Object
     */

  }, {
    key: "map",
    value: function map(tree, mapFunction) {
      return this._mapInner(tree, mapFunction);
    }
    /**
     *
     * @param {*} tree
     * @param {*} mapFunction
     * @param {*} parent
     *
     * @private
     */

  }, {
    key: "_mapInner",
    value: function _mapInner(tree, mapFunction) {
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      //循环树结点，并先递归子树，获取用mapFunction创建的新子树
      //子树递归完成后，用mapFunction对当前结点创建新结点，并放到新树中
      //把子树放到新结点的子列表中
      if (tree) {
        var result = [];

        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];

          var children = this._mapInner(this.getChildren(node), mapFunction, node);

          var newNode = mapFunction(node, i, parent, children);
          result.push(newNode);
        }

        return result;
      }

      return null;
    }
    /**
     * 内部用于递归搜索结点链的函数
     * @param tree 树
     * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
     * @param parent 父结点
     *
     * @private
     *
     * @return {Array} 从根结点当符合条件的结点的数组
     */

  }, {
    key: "_searchChainInner",
    value: function _searchChainInner(tree, equalFunction) {
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (tree) {
        //循环树，如果有结点符合条件，则放到数组中返回
        //如果结点不符合条件，但是有子结点，则递归子结点，如果从子结点中找到结点，把当前结点放到子结果中，一起返回
        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];

          if (equalFunction(node, i, parent)) {
            return [node];
          } else {
            var children = this.getChildren(node);

            if (children) {
              var childResult = this._searchChainInner(children, equalFunction, node);

              if (childResult) {
                childResult.unshift(node);
                return childResult;
              }
            }
          }
        }
      }

      return null;
    }
    /**
     * 遍历树
     * @param tree
     * @param forEachFunction 要对结点进行操作的函数，格式为(node, index, parentNode)=>void
     * @param parent
     *
     * @private
     */

  }, {
    key: "_forEachInner",
    value: function _forEachInner(tree, forEachFunction) {
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (tree) {
        //遍历结点，对结点执行操作，并递归子结点
        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];
          forEachFunction(node, i, parent);

          this._forEachInner(this.getChildren(node), forEachFunction);
        }
      }

      return null;
    }
    /**
     * 获取结点的值
     * @param {*} node
     */

  }, {
    key: "getNodeData",
    value: function getNodeData(node) {
      if (this.dataGetter instanceof Function) {
        return this.dataGetter(node);
      } else {
        return node[this.dataGetter];
      }
    }
    /**
     * 获取结点的子结点列表
     * @param {*} node
     *
     * @return {Array}
     */

  }, {
    key: "getChildren",
    value: function getChildren(node) {
      if (this.childrenGetter instanceof Function) {
        return this.childrenGetter(node);
      } else {
        return node[this.childrenGetter];
      }
    }
  }, {
    key: "_createChildren",
    value: function _createChildren(node, children) {
      if (this.childrenCreater instanceof Function) {
        return this.childrenCreater(node, children);
      } else {
        node[this.childrenCreater] = children || [];
        return node[this.childrenCreater];
      }
    }
  }]);

  return TreeControl;
}();

var _default = TreeControl;
exports.default = _default;