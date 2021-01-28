declare type equalFunctionType<T> = (node: T, index: number, parentNode: T | null) => boolean;
/**
 * 一个通用的树结构操作器，对源数据的结构没有要求
 * @author yinhunfeixue
 * @email yinhunfeixue@163.com
 */
declare class TreeControl<T extends {
    [key: string]: any;
}> {
    private dataGetter;
    private childrenGetter;
    private childrenCreater;
    /**
     * 创建树控制器实例
     * @param {String|Function} dataGetter 获取结点值的方法，为字符串或(node)=>object的函数
     * @param {String|Function} childrenGetter 获取结点子结点列表的方法，为字符串或(node)=>object的函数
     */
    constructor(dataGetter?: string | ((item: T) => any), childrenGetter?: string | ((item: T) => any[]), childrenCreater?: string | ((item: T, children?: T[]) => any[]));
    /**
     * 过滤树
     * @param tree 树
     * @param equal 是否匹配的方法，返回true，表示结果中包含此结点及基子结点
     */
    filter(tree: T[], equal: equalFunctionType<T>): T[];
    private _filterInner;
    /**
     * 一维数组转换成树结构
     * @param list
     */
    listToTree(list: T[], equalParent: (node: T, parentNode: T | null) => boolean): T[];
    private innerListTree;
    /**
     * 搜索满足指定条件的第一个结点
     * @param 树结点的数据
     * @param 匹配函数
     */
    search(tree: T[], equalFunction: equalFunctionType<T>): T | null;
    /**
     * 搜索满足指定条件的第一个结点的父结点
     * @param tree 树
     * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
     */
    searchParent(tree: T[], equalFunction: equalFunctionType<T>): T | null;
    /**
     * 获取满足指定条件的第一个结点在父结点子列表中的位置，如果无父结点，或结点不存在，返回-1
     * @param tree 树
     * @param equalFunction 匹配函数，格式为(node, index, parentNode)=>bool
     *
     * @return {Number} 指定条件的结点所在的位置
     */
    getIndex(tree: T[], equalFunction: equalFunctionType<T>): number;
    addAt(tree: T[], equalFunction: equalFunctionType<T>, child: T, index?: number): void;
    remove(tree: T[], equalFunction: equalFunctionType<T>): void;
    /**
     *
     * @param tree
     * @param equalFunction
     */
    _removeInner(tree: T[], equalFunction: equalFunctionType<T>, parent?: T | null): void;
    /**
     * 搜索满足条件的第一个结点，并返回从一级结点到指定结点的数组，第一项是一级结点，最后一项是符合条件的结点
     * @param tree 树
     * @param equalFunction 匹配函数
     */
    searchChain(tree: T[], equalFunction: equalFunctionType<T>): T[] | null;
    /**
     * 遍历树结点，并对每个结点执行回调函数
     * @param {Array} tree 树
     * @param {Function} forEachFunction 回调函数
     */
    forEach(tree: T[], forEachFunction: (node: T, index: number, parentNode: T | null) => void): void;
    /**
     * 查找所有符合条件的结点，并返回符合条件结点的一维数组
     * @param tree 树
     * @param equalFunction 匹配函数
     */
    find(tree: T[], equalFunction: equalFunctionType<T>): T[];
    /**
     * 计算树的结点总数
     * @param tree 树
     */
    count(tree: T[]): number;
    /**
     * 遍历树，并创建和原结构一致的新树。新树的结点为原树结点调用函数处理后的值
     *
     * **注意**，新树不会自动创建子结点，需要在mapFunction中，把返回值和参数中的newChildren进行关联，例如result.children = newChildren
     *
     * @param tree
     * @param {*} mapFunction 格式为(node, index, oldParent, newChildren)=>Object
     */
    map<W>(tree: T[], mapFunction: (node: T, index: number, oldParent: T | null, newChildren: W[] | null) => W): W[] | null;
    /**
     *
     * @param {*} tree
     * @param {*} mapFunction
     * @param {*} parent
     *
     * @private
     */
    _mapInner<W>(tree: T[], mapFunction: (node: T, index: number, oldParent: T | null, newChildren: W[] | null) => W, parent?: T | null): W[] | null;
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
    private _searchChainInner;
    /**
     * 遍历树
     * @param tree
     * @param forEachFunction 要对结点进行操作的函数，格式为(node, index, parentNode)=>void
     * @param parent
     *
     * @private
     */
    private _forEachInner;
    /**
     * 获取结点的值
     * @param {*} node
     */
    getNodeData(node: T): any;
    /**
     * 获取结点的子结点列表
     * @param {*} node
     *
     * @return {Array}
     */
    getChildren(node: T): any;
    _createChildren(node: T, children?: T[]): any;
}
export default TreeControl;
