import { Button, Space, Spin } from 'antd';
import React, { Component, ReactNode } from 'react';
import ConfirmButton from '../confirmButton/ConfirmButton';
import IComponentProps from '../interfaces/IComponentProps';
import AntdUtil from '../utils/AntdUtil';
import './TreeCurd.less';

const classnames = require('classnames');

export enum EditType {
  ADD = 'add',
  EDIT = 'edit',
  DEFAULT = '',
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
   * 树的宽度
   */
  width?: number;

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
  getTreeData: () => Promise<T[]>;

  /**
   * 删除节点
   */
  deleteFunction?: (ids: React.ReactText[]) => void;

  /**
   * 自定义操作
   */
  renderExtra?: (extraData: ITreeCurdExtra<T>) => ReactNode;

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
class TreeCurd<T extends TreeInterfaces> extends Component<ITreeCurdProps<T>, ITreeCurdState<T>> {
  state: ITreeCurdState<T> = {
    loading: false,
    autoExpandParent: true,
    treeData: [],
    expandedKeys: [],
    checkedKeys: [],
    checkedItems: [],
    selectedKeys: [],
    selectedItems: [],
    type: EditType.DEFAULT,
  };

  componentDidMount() {
    this.requestTreeData();
  }

  private refresh = () => {
    this.requestTreeData().then(() => {
      this.updateSelectedItems();
    });
  };

  private updateSelectedItems = () => {
    const { selectedKeys } = this.state;
    const selectedItems: T[] = [];
    const { treeData } = this.state;
    this.getItemsByIds(treeData, selectedKeys, selectedItems);
    this.setState({
      selectedItems,
    });
  };

  private updateCheckedItems = () => {
    const { checkedKeys } = this.state;
    const checkedItems: T[] = [];
    const { treeData } = this.state;
    this.getItemsByIds(treeData, checkedKeys, checkedItems);
    this.setState({
      checkedItems,
    });
  };

  componentDidUpdate(prveProps: ITreeCurdProps<T>) {
    if (
      this.props.defaultCheckedKeys !== prveProps.defaultCheckedKeys ||
      this.props.defaultExpandedKeys !== prveProps.defaultExpandedKeys
    ) {
      this.requestTreeData();
    }
  }

  private setLoading(loading: boolean) {
    this.setState({ loading });
  }

  private requestTreeData = () => {
    return new Promise(async (resolve) => {
      const { getTreeData, getKey, defaultExpandedKeys, defaultCheckedKeys } = this.props;
      this.setLoading(true);
      const res = await getTreeData();
      this.setLoading(false);
      // 获取默认展开节点
      let expandedKeys: string[] = [];
      let checkedKeys = [];
      if (res && res.length && res[0].children && res[0].children.length) {
        const key =
          typeof getKey === 'string' ? res[0][getKey] : getKey ? getKey(res[0]) : res[0].id;
        expandedKeys = defaultExpandedKeys ? defaultExpandedKeys : [key];
      }
      if (defaultCheckedKeys) {
        checkedKeys = defaultCheckedKeys;
      }
      this.setState(
        {
          treeData: res,
          expandedKeys,
          checkedKeys,
        },
        () => {
          resolve();
        },
      );
    });
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
    this.setState(
      {
        selectedKeys,
        autoExpandParent: false,
        type: selectedKeys && selectedKeys.length ? EditType.EDIT : EditType.DEFAULT,
      },
      () => {
        this.updateSelectedItems();
      },
    );
  };

  private onExpand = (expandedKeys: React.ReactText[]) => {
    this.setState({
      expandedKeys,
    });
  };

  private onCheck = (checkedKeys: React.ReactText[]) => {
    this.setState(
      {
        checkedKeys,
      },
      () => {
        this.updateCheckedItems();
      },
    );
  };

  private defaultRenderOptItem = (extraData: ITreeCurdExtra<T>) => {
    const { selectedKeys, checkedKeys, refresh } = extraData;
    const { deleteFunction, checkable } = this.props;
    return (
      <Space>
        <Button type="primary" onClick={() => this.setState({ type: EditType.ADD })}>
          新增
        </Button>
        {selectedKeys && selectedKeys.length > 0 && (
          <ConfirmButton
            modalContent={{
              title: '这个操作不可逆',
              content: (
                <span>
                  确定要<span style={{ color: 'red' }}>删除</span>改节点？
                </span>
              ),
            }}
            onConfirm={async () => {
              if (deleteFunction) {
                const ids = checkable !== undefined ? selectedKeys : checkedKeys;
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
      getKey,
      getTitle,
      getChildren,
      treeContentClassName,
      editContentClassName,
      optClassOName,
      checkClassName,
      treeProps,
      checkable,
      width = 200,
      minHeight = 300,
      renderExtra,
      renderEditExtra,
      renderCheckExtra,
    } = this.props;
    let checkProps = {};
    if (checkable !== undefined) {
      checkProps = {
        checkable: true,
        onCheck: this.onCheck,
        checkedKeys,
      };
    }

    const TreeProps = {
      autoExpandParent,
      onSelect: this.onSelect,
      onExpand: this.onExpand,
      expandedKeys,
      ...checkProps,
      ...treeProps,
    };

    return (
      <div className="TreeCurd">
        <div className={classnames('optContent', optClassOName)}>
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
        <div className="treeCurdContent" style={{ minHeight }}>
          <div className={classnames('treeContent', treeContentClassName)} style={{ width }}>
            <Spin spinning={loading}>
              {AntdUtil.rendeTree<T>(treeData, TreeProps, getKey, getTitle, getChildren)}
            </Spin>
            <div className={classnames('checkContent', checkClassName)}>
              {checkable !== undefined && renderCheckExtra
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
          <div className={classnames('editContent', editContentClassName)}>
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

export default TreeCurd;
