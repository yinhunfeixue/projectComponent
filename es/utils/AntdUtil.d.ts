import { TreeProps } from 'antd/lib/tree';
import { DataNode } from 'rc-tree/lib/interface';
import React, { ReactNode } from 'react';
declare class AntdUtil {
    /**
     * 根据数据源创建select的options列表
     * @param dataSource 数据源
     * @param labelFunction 把每一项转换成显示文字的函数，如果不设置，则使用toString()
     */
    static createSelectOptions<T extends React.ReactText>(dataSource: T[], labelFunction?: (item: T) => ReactNode, valueFunction?: (item: T) => React.ReactText): ReactNode;
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
    static rendeTree<T extends any>(dataSource: T[], treeProps?: TreeProps, getKey?: ((item: T) => string) | string, getTitle?: ((item: T) => ReactNode) | string, getChildren?: ((item: T) => T[]) | string, createNodeProps?: (item: T) => DataNode): React.ReactElement | null;
    private static loopTreeNode;
}
export default AntdUtil;
