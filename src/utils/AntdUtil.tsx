import { Tree } from 'antd';
import { AntTreeNodeProps, TreeProps } from 'antd/lib/tree';
import React, { ReactElement } from 'react';

class AntdUtil {
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
  public static rendeTree<T extends any>(
    dataSource: T[],
    treeProps?: TreeProps,
    getKey: ((item: T) => string) | string = 'id',
    getTitle: ((item: T) => ReactElement) | string = 'name',
    getChildren: ((item: T) => T[]) | string = 'children',
    createNodeProps?: (item: T) => AntTreeNodeProps,
  ): ReactElement | null {
    if (dataSource) {
      return (
        <Tree {...treeProps}>
          {AntdUtil.loopTreeNode<T>(dataSource, getKey, getTitle, getChildren, createNodeProps)}
        </Tree>
      );
    }
    return null;
  }

  private static loopTreeNode<T extends any>(
    treeData: T[],
    getKey: ((item: T) => string) | string = 'id',
    getTitle: ((item: T) => ReactElement) | string = 'name',
    getChildren: ((item: T) => T[]) | string = 'children',
    createNodeProps?: (item: T) => AntTreeNodeProps,
  ): ReactElement[] {
    const { TreeNode } = Tree;
    return treeData.map(
      (item, i): ReactElement => {
        const children = typeof getChildren === 'string' ? item[getChildren] : getChildren(item);
        const key = typeof getKey === 'string' ? item[getKey] : getKey(item);
        const title = typeof getTitle === 'string' ? item[getTitle] : getTitle(item);
        const otherProps = createNodeProps ? createNodeProps(item) : null;
        return (
          <TreeNode key={key} title={title} {...otherProps}>
            {children ? AntdUtil.loopTreeNode(children, getKey, getTitle, getChildren) : null}
          </TreeNode>
        );
      },
    );
  }
}

export default AntdUtil;
