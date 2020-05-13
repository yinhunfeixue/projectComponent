import { Button, Space, Spin, Tree } from 'antd';
import React, { Component, ReactNode } from 'react';
import ConfirmButton from '../confirmButton/ConfirmButton';
import IComponentProps from '../interfaces/IComponentProps';
import './FHTree.less';
const classnames = require('classnames');

const { TreeNode } = Tree;

interface IFHTreeState<T> {
  loading: boolean;
  autoExpandParent: boolean;
  treeData: T[];
  expandedKeys: any[];
  selectedKeys: React.ReactText[];
  selectedItems: T[];
  checkedKeys: any[];
  checkedItems: T[];
  type: string;
}

interface IFHTreeExtra<T> {
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
  type?: string;
}

interface IFHTreeProps<T> extends IComponentProps {
  /**
   * 自定义标识
   */
  getKey?: (values: T) => string;

  /**
   * 自定义节点名称
   */
  getTitle?: (values: T) => string | ReactNode;

  /**
   * 树的宽度
   */
  width: number;

  /**
   * 树最小高度
   */
  minHeight: number;

  /**
   * 添加树自定义的类
   */
  classTreeName: string;

  /**
   * 添加编辑自定义的类
   */
  classEditName: string;

  /**
   * 添加操作自定义的类
   */
  classOptName: string;

  /**
   * 添加多选自定义的类
   */
  classCheckName: string;

  /**
   *  Tree组件自带的属性
   */
  TreeProps?: Object;

  /**
   * 节点前添加 Checkbox 复选框
   */
  checkable?: boolean;

  /**
   * 获取树源数据
   */
  getTreeData: () => Promise<T[]>;

  /**
   * 删除节点
   */
  deleteFunction?: (ids: React.ReactText[]) => void;

  /**
   * 自定义操作
   */
  renderExtra?: (extraData: IFHTreeExtra<T>) => ReactNode;

  /**
   * 自定义编辑操作
   */
  renderEditExtra?: (extraData: IFHTreeExtra<T>) => ReactNode;

  /**
   *  自定义多选的操作
   */
  renderCheckExtra?: (extraData: IFHTreeExtra<T>) => ReactNode;
}

interface TreeInterfaces {
  [propName: string]: any;
}

class FHTree<T extends TreeInterfaces> extends Component<IFHTreeProps<T>, IFHTreeState<T>> {
  state: IFHTreeState<T> = {
    loading: false,
    autoExpandParent: true,
    treeData: [],
    expandedKeys: [],
    checkedKeys: [],
    checkedItems: [],
    selectedKeys: [],
    selectedItems: [],
    type: '',
  };

  componentDidMount() {
    this.requestTreeData();
  }

  private refresh = () => {
    this.requestTreeData();
  };

  private setLoading(loading: boolean) {
    this.setState({ loading });
  }

  private requestTreeData = async () => {
    const { getTreeData, getKey } = this.props;
    this.setLoading(true);
    const res = await getTreeData();
    this.setLoading(false);
    // 获取默认展开节点
    let expandedKeys: string[] = [];
    if (res && res.length && res[0].children && res[0].children.length) {
      const key = getKey ? getKey(res[0]) : res[0].id;
      expandedKeys = [key];
    }
    this.setState({
      treeData: res,
      expandedKeys,
    });
  };

  private renderTreeNodeItem = (treeData: T[] | undefined) => {
    const { getKey, getTitle } = this.props;
    return (
      treeData &&
      treeData.map((item: T) => {
        return (
          <TreeNode
            key={getKey ? getKey(item) : item.id}
            title={getTitle ? getTitle(item) : item.name}
          >
            {item.children && this.renderTreeNodeItem(item.children)}
          </TreeNode>
        );
      })
    );
  };

  private getItemsByIds = (treeData: T[], ids: React.ReactText[], selectedItems: T[]) => {
    for (let i = 0; i < treeData.length; i++) {
      for (let j = 0; j < ids.length; j++) {
        if (treeData[i].id === ids[j]) {
          selectedItems.push(treeData[i]);
        }
      }

      if (treeData[i].children) {
        this.getItemsByIds(treeData[i].children, ids, selectedItems);
      }
    }
  };

  private onSelect = (selectedKeys: React.ReactText[]) => {
    const selectedItems: T[] = [];
    const { treeData, expandedKeys } = this.state;
    this.getItemsByIds(treeData, selectedKeys, selectedItems);
    this.setState({
      selectedKeys,
      selectedItems,
      autoExpandParent: false,
      type: selectedKeys && selectedKeys.length ? 'edit' : 'add',
    });
  };

  private onExpand = (expandedKeys: React.ReactText[]) => {
    this.setState({
      expandedKeys,
    });
  };

  private onCheck = (checkedKeys: React.ReactText[]) => {
    const checkedItems: T[] = [];
    const { treeData } = this.state;
    this.getItemsByIds(treeData, checkedKeys, checkedItems);
    this.setState({
      checkedKeys,
      checkedItems,
    });
  };

  private defaultRenderOptItem = (extraData: IFHTreeExtra<T>) => {
    const { selectedKeys, checkedKeys, refresh } = extraData;
    const { deleteFunction, checkable } = this.props;
    return (
      <Space>
        <Button type="primary" onClick={() => this.setState({ type: 'add' })}>
          新增
        </Button>
        {selectedKeys && selectedKeys.length > 0 && (
          <ConfirmButton
            modalContent={{
              title: '这个操作可逆',
              content: (
                <span>
                  确定要<span style={{ color: 'red' }}>删除</span>改节点？
                </span>
              ),
            }}
            onConfirm={async () => {
              if (deleteFunction) {
                const ids = typeof checkable === 'undefined' ? selectedKeys : checkedKeys;
                await deleteFunction(ids);
                refresh();
              }
            }}
          />
        )}
      </Space>
    );
  };

  public render(): ReactNode {
    const {
      loading,
      treeData,
      expandedKeys,
      autoExpandParent,
      checkedKeys,
      checkedItems,
      selectedKeys,
      selectedItems,
      type,
    } = this.state;
    const {
      classTreeName,
      classEditName,
      classOptName,
      classCheckName,
      TreeProps,
      checkable,
      width = 200,
      minHeight = 300,
      renderExtra,
      renderEditExtra,
      renderCheckExtra,
    } = this.props;
    let checkProps = {};
    if (typeof checkable !== 'undefined') {
      checkProps = {
        checkable: true,
        onCheck: this.onCheck,
        checkedKeys,
      };
    }

    return (
      <div className="FHTree">
        <div className={classnames('optContent', classOptName)}>
          {renderExtra
            ? renderExtra({
                selectedKeys,
                selectedItems,
                checkedKeys,
                checkedItems,
                loading,
                refresh: this.refresh,
              })
            : renderEditExtra
            ? this.defaultRenderOptItem({
                selectedKeys,
                selectedItems,
                checkedKeys,
                checkedItems,
                loading,
                refresh: this.refresh,
              })
            : null}
        </div>
        <div className="content" style={{ minHeight }}>
          <div className={classnames('treeContent', classTreeName)} style={{ width }}>
            <Spin spinning={loading}>
              <Tree
                autoExpandParent={autoExpandParent}
                onSelect={this.onSelect}
                onExpand={this.onExpand}
                expandedKeys={expandedKeys}
                {...checkProps}
                {...TreeProps}
              >
                {this.renderTreeNodeItem(treeData)}
              </Tree>
            </Spin>
            <div className={classnames('checkContent', classCheckName)}>
              {typeof checkable !== 'undefined' && renderCheckExtra
                ? renderCheckExtra({
                    selectedKeys,
                    selectedItems,
                    checkedKeys,
                    checkedItems,
                    loading,
                    refresh: this.refresh,
                  })
                : null}
            </div>
          </div>
          <div className={classnames('editContent', classEditName)}>
            {renderEditExtra &&
              renderEditExtra({
                selectedKeys,
                selectedItems,
                checkedKeys,
                checkedItems,
                loading,
                refresh: this.refresh,
                type,
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default FHTree;
