import { Select, Tree } from 'antd';
import { TreeProps } from 'antd/lib/tree';
import { DataNode } from 'rc-tree/lib/interface';
import React, { ReactNode } from 'react';

class AntdUtil {
  /**
   * 根据数据源创建select的options列表
   * @param dataSource 数据源
   * @param labelFunction 把每一项转换成显示文字的函数，如果不设置，则使用toString()
   */
  public static createSelectOptions<T extends React.ReactText>(
    dataSource: T[],
    labelFunction?: (item: T) => ReactNode,
    valueFunction?: (item: T) => React.ReactText,
  ): ReactNode {
    if (dataSource && dataSource.length) {
      return dataSource.map((item, i) => {
        return (
          <Select.Option key={i.toString()} value={valueFunction ? valueFunction(item) : item}>
            {labelFunction ? labelFunction(item) : item}
          </Select.Option>
        );
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
  public static rendeTree<T extends any>(
    dataSource: T[],
    treeProps?: TreeProps,
    getKey: ((item: T) => string) | string = 'id',
    getTitle: ((item: T) => ReactNode) | string = 'name',
    getChildren: ((item: T) => T[]) | string = 'children',
    createNodeProps?: (item: T) => DataNode,
  ): React.ReactElement | null {
    if (dataSource) {
      const treeData = this.loopTreeNode(
        dataSource,
        getKey,
        getTitle,
        getChildren,
        createNodeProps,
      );
      return <Tree {...treeProps} treeData={treeData} />;
    }
    return null;
  }

  private static loopTreeNode<T extends any>(
    treeData: T[],
    getKey: ((item: T) => string) | string = 'id',
    getTitle: ((item: T) => ReactNode) | string = 'name',
    getChildren: ((item: T) => T[]) | string = 'children',
    createNodeProps?: (item: T) => DataNode,
  ): DataNode[] | undefined {
    return treeData.map(item => {
      const children =
        typeof getChildren === 'string' ? (item as any)[getChildren] : getChildren(item);
      const key = typeof getKey === 'string' ? (item as any)[getKey] : getKey(item);
      const title =
        typeof getTitle === 'string' ? ((item as any)[getTitle] as ReactNode) : getTitle(item);
      const otherProps = createNodeProps ? createNodeProps(item) : null;
      const result: DataNode = { key, title, ...otherProps };
      if (children) {
        result.children = this.loopTreeNode(
          children,
          getKey,
          getTitle,
          getChildren,
          createNodeProps,
        );
      }
      return result;
    });
  }
}

export default AntdUtil;
