import { DataNode } from 'rc-tree/lib/interface';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import './TreeCurd.less';
export declare enum EditType {
    ADD = "add",
    EDIT = "edit",
    DEFAULT = ""
}
interface ITreeCurdState<T> {
    loading: boolean;
    autoExpandParent: boolean;
    treeData: T[];
    expandedKeys: any[];
    selectedKeys: React.ReactText[];
    selectedItems: T[];
    checkedKeys: any[];
    checkedItems: T[];
    searchValue: string;
    type: EditType;
}
interface ITreeCurdExtra<T> {
    /**
     * 选取节点的keys
     */
    selectedKeys: React.ReactText[];
    /**
     * 选取节点的数据
     */
    selectedItems: T[];
    /**
     * 多选的节点keys
     */
    checkedKeys: any[];
    /**
     * 多选节点数据
     */
    checkedItems: T[];
    /**
     *  树加载状态
     */
    loading: boolean;
    /**
     * 刷新
     */
    refresh: () => void;
    /**
     * 操作类型
     */
    type?: EditType;
}
/**
 * 属性
 *
 * @interface ITreeCurdProps
 * @extends {IComponentProps}
 * @template T
 */
interface ITreeCurdProps<T> extends IComponentProps {
    /**
     * 自定义标识
     */
    getKey?: ((item: T) => string) | string;
    /**
     * 自定义节点名称
     */
    getTitle?: ((item: T) => ReactNode) | string;
    /**
     * 自定义数据子节点集合属性名或者自定义子节点集合
     */
    getChildren?: ((item: T) => T[]) | string;
    /**
     * 选中回调
     */
    onCheck?: (extraData: ITreeCurdExtra<T>, checkedInfo: {
        checkedNodes: DataNode[];
    }) => void;
    /**
     * 展开回调
     */
    onExpand?: (expandedKeys: React.ReactText[]) => void;
    /**
     * 树的宽度
     */
    width?: number;
    /**
     * 是否是一个是否可编辑的树,默认为true
     */
    editEnable?: boolean;
    /**
     * 树最小高度
     */
    minHeight?: number;
    /**
     * 树顶部操作区窗口的样式名
     */
    treeContentClassName?: string;
    /**
     * 编辑顶部操作区窗口的样式名
     */
    editContentClassName?: string;
    /**
     * 操作顶部操作区窗口的样式名
     */
    optClassOName?: string;
    /**
     * 多选顶部操作区窗口的样式名
     */
    checkClassName?: string;
    /**
     *  Tree组件自带的属性
     */
    treeProps?: Object;
    /**
     * 节点前添加 Checkbox 复选框
     */
    checkable?: boolean;
    /**
     * 获取树源数据
     */
    getTreeData: (searchValue?: string) => Promise<T[]>;
    /**
     * 是否可搜索
     */
    showSearch?: boolean;
    /**
     * 删除节点
     */
    deleteFunction?: (ids: React.ReactText[]) => Promise<any>;
    /**
     * 自定义操作
     */
    renderExtra?: (extraData: ITreeCurdExtra<T>, defaultRender: (extraData: ITreeCurdExtra<T>) => ReactNode) => ReactNode;
    /**
     * 自定义编辑操作
     */
    renderEditExtra?: (extraData: ITreeCurdExtra<T>) => ReactNode;
    /**
     * 默认展开的节点
     */
    defaultExpandedKeys?: any[];
    /**
     * 默认选中的节点
     */
    defaultCheckedKeys?: any[];
    getNodeProps?: (item: T) => DataNode;
    /**
     *  自定义多选的操作
     */
    renderCheckExtra?: (extraData: ITreeCurdExtra<T>) => ReactNode;
}
interface TreeInterfaces {
    [propName: string]: any;
}
/**
 * 一个可以增删改查的树
 *
 * @class TreeCurd
 * @extends {Component<ITreeCurdProps<T>, ITreeCurdState<T>>}
 * @template T
 */
declare class TreeCurd<T extends TreeInterfaces> extends Component<ITreeCurdProps<T>, ITreeCurdState<T>> {
    state: ITreeCurdState<T>;
    componentDidMount(): void;
    private refresh;
    private updateSelectedItems;
    componentDidUpdate(prevProps: ITreeCurdProps<T>): void;
    private getExtraData;
    private updateCheckedItems;
    private setLoading;
    private getNodeChildren;
    private getItemKey;
    private requestTreeData;
    private getItemsByIds;
    private onSelect;
    private onExpand;
    private onCheck;
    private defaultRenderOptItem;
    render(): ReactNode;
}
export default TreeCurd;
