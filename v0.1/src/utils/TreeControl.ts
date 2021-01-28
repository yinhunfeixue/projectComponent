type equalFunctionType<T> = (node: T, index: number, parentNode: T | null) => boolean;

/**
 * 一个通用的树结构操作器，对源数据的结构没有要求
 * @author yinhunfeixue
 * @email yinhunfeixue@163.com
 */
class TreeControl<T extends { [key: string]: any }> {
  private dataGetter: string | ((item: T) => any);
  private childrenGetter: string | ((item: T) => T[]);
  private childrenCreater: string | ((item: T, children?: T[]) => T[]);

  /**
   * 创建树控制器实例
   * @param {String|Function} dataGetter 获取结点值的方法，为字符串或(node)=>object的函数
   * @param {String|Function} childrenGetter 获取结点子结点列表的方法，为字符串或(node)=>object的函数
   */
  constructor(
    dataGetter: string | ((item: T) => any) = 'value',
    childrenGetter: string | ((item: T) => any[]) = 'children',
    childrenCreater: string | ((item: T, children?: T[]) => any[]) = 'children',
  ) {
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
  public filter(tree: T[], equal: equalFunctionType<T>): T[] {
    return this._filterInner(tree, equal, null);
  }

  private _filterInner(tree: T[], equal: equalFunctionType<T>, parentNode: T | null): T[] {
    if (!tree) {
      return [];
    }
    const result: T[] = [];
    // 循环tree
    // 对于每一项，如果equal返回true，添加到结果列表中；否则，递归子列表，如果递归的子列表>=0，添加到结果列表
    for (let i = 0; i < tree.length; i++) {
      const item = { ...(tree[i] as any) };
      if (equal(item, i, parentNode)) {
        result.push(item);
      } else {
        const filterChildren = this._filterInner(this.getChildren(item), equal, item);
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
  public listToTree(list: T[], equalParent: (node: T, parentNode: T | null) => boolean): T[] {
    return this.innerListTree(list, equalParent, null);
  }

  private innerListTree(
    list: T[],
    equalParent: (node: T, parentNode: T | null) => boolean,
    parent: T | null,
  ): T[] {
    if (!list) {
      return [];
    }
    // 循环list，针对每一项item：使用equalParent判断parent是否是item的父结点
    // 如果是，则添加到结果列表；并以item为父结点，查找子列表
    // 否则，不处理
    const result: T[] = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (equalParent(item, parent)) {
        result.push(item);
        const children = this.innerListTree(list, equalParent, item);
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
  search(tree: T[], equalFunction: equalFunctionType<T>) {
    let chain = this._searchChainInner(tree, equalFunction);
    return chain && chain.length ? chain[chain.length - 1] : null;
  }

  /**
   * 搜索满足指定条件的第一个结点的父结点
   * @param tree 树
   * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
   */
  searchParent(tree: T[], equalFunction: equalFunctionType<T>) {
    let chain = this._searchChainInner(tree, equalFunction);
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
  getIndex(tree: T[], equalFunction: equalFunctionType<T>) {
    let parent = this.searchParent(tree, equalFunction);
    if (parent) {
      let children = this.getChildren(parent);
      for (let i = 0; i < children.length; i++) {
        if (equalFunction(children[i], i, parent)) {
          return i;
        }
      }
    }
    return -1;
  }

  addAt(tree: T[], equalFunction: equalFunctionType<T>, child: T, index = -1) {
    let node = this.search(tree, equalFunction);
    if (node) {
      let children = this.getChildren(node);
      if (!children) {
        children = this._createChildren(node);
      }

      if (children) {
        let realIndex = Math.max(0, Math.min(children.length, index));
        children[realIndex] = child;
      }
    }
  }

  remove(tree: T[], equalFunction: equalFunctionType<T>) {
    this._removeInner(tree, equalFunction);
  }

  /**
   *
   * @param tree
   * @param equalFunction
   */
  _removeInner(tree: T[], equalFunction: equalFunctionType<T>, parent: T | null = null) {
    if (tree) {
      //遍历结点
      for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
        //如果当前结点符合被删除的条件，则删除；不符合，则递归子结点
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
  searchChain(tree: T[], equalFunction: equalFunctionType<T>) {
    return this._searchChainInner(tree, equalFunction);
  }

  /**
   * 遍历树结点，并对每个结点执行回调函数
   * @param {Array} tree 树
   * @param {Function} forEachFunction 回调函数
   */
  forEach(tree: T[], forEachFunction: (node: T, index: number, parentNode: T | null) => void) {
    this._forEachInner(tree, forEachFunction);
  }

  /**
   * 查找所有符合条件的结点，并返回符合条件结点的一维数组
   * @param tree 树
   * @param equalFunction 匹配函数
   */
  find(tree: T[], equalFunction: equalFunctionType<T>) {
    let result: T[] = [];
    this.forEach(tree, (node, i, parent) => {
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
  count(tree: T[]) {
    let result = 0;
    this.forEach(tree, () => {
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
  map<W>(
    tree: T[],
    mapFunction: (node: T, index: number, oldParent: T | null, newChildren: W[] | null) => W,
  ) {
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
  _mapInner<W>(
    tree: T[],
    mapFunction: (node: T, index: number, oldParent: T | null, newChildren: W[] | null) => W,
    parent: T | null = null,
  ) {
    //循环树结点，并先递归子树，获取用mapFunction创建的新子树
    //子树递归完成后，用mapFunction对当前结点创建新结点，并放到新树中
    //把子树放到新结点的子列表中
    if (tree) {
      let result = [];
      for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
        let children = this._mapInner(this.getChildren(node), mapFunction, node);
        let newNode = mapFunction(node, i, parent, children);
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
  private _searchChainInner(
    tree: T[],
    equalFunction: equalFunctionType<T>,
    parent: T | null = null,
  ): T[] | null {
    if (tree) {
      //循环树，如果有结点符合条件，则放到数组中返回
      //如果结点不符合条件，但是有子结点，则递归子结点，如果从子结点中找到结点，把当前结点放到子结果中，一起返回
      for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
        if (equalFunction(node, i, parent)) {
          return [node];
        } else {
          let children = this.getChildren(node);
          if (children) {
            let childResult = this._searchChainInner(children, equalFunction, node);
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
  private _forEachInner(
    tree: T[],
    forEachFunction: (node: T, index: number, parentNode: T | null) => void,
    parent = null,
  ) {
    if (tree) {
      //遍历结点，对结点执行操作，并递归子结点
      for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
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
  getNodeData(node: T) {
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
  getChildren(node: T) {
    if (this.childrenGetter instanceof Function) {
      return this.childrenGetter(node);
    } else {
      return node[this.childrenGetter];
    }
  }

  _createChildren(node: T, children?: T[]) {
    if (this.childrenCreater instanceof Function) {
      return this.childrenCreater(node, children);
    } else {
      (node as any)[this.childrenCreater] = children || [];
      return node[this.childrenCreater];
    }
  }
}

export default TreeControl;
