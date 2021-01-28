import { Button, Input, Spin } from 'antd';
import { DataNode } from 'rc-tree/lib/interface';
import React, { Component, ReactNode } from 'react';
import ConfirmButton from '../confirmButton/ConfirmButton';
import IComponentProps from '../interfaces/IComponentProps';
import AntdUtil from '../utils/AntdUtil';
import './TreeCurd.less';

const classnames = require('classnames');

const { Search } = Input;

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
  onCheck?: (
    extraData: ITreeCurdExtra<T>,
    checkedInfo: {
      checkedNodes: DataNode[];
    },
  ) => void;

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
  renderExtra?: (
    extraData: ITreeCurdExtra<T>,
    defaultRender: (extraData: ITreeCurdExtra<T>) => ReactNode,
  ) => ReactNode;

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
    searchValue: '',
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

  componentDidUpdate(prevProps: ITreeCurdProps<T>) {
    if (prevProps.defaultCheckedKeys !== this.props.defaultCheckedKeys) {
      this.requestTreeData();
    }
  }

  private getExtraData = () => {
    const { checkedKeys, checkedItems, selectedKeys, selectedItems, loading, type } = this.state;
    return {
      checkedKeys,
      checkedItems,
      selectedKeys,
      selectedItems,
      loading,
      refresh: this.refresh,
      type,
    };
  };

  private updateCheckedItems = (checkedInfo: { checkedNodes: DataNode[] }) => {
    const { checkedKeys } = this.state;
    const checkedItems: T[] = [];
    const { treeData } = this.state;
    this.getItemsByIds(treeData, checkedKeys, checkedItems);
    this.setState(
      {
        checkedItems,
      },
      () => {
        const extraData = this.getExtraData();
        if (this.props.onCheck) {
          this.props.onCheck(extraData, checkedInfo);
        }
      },
    );
  };

  private setLoading(loading: boolean) {
    this.setState({ loading });
  }

  private getNodeChildren(item: T) {
    const { getChildren = 'children' } = this.props;
    return typeof getChildren === 'string' ? item[getChildren] : getChildren(item);
  }

  private getItemKey(item: T) {
    const { getKey = 'id' } = this.props;
    return typeof getKey === 'string' ? item[getKey] : getKey(item);
  }

  private requestTreeData = (type?: string) => {
    return new Promise(async resolve => {
      const { searchValue } = this.state;
      const { getTreeData, getKey, defaultExpandedKeys, defaultCheckedKeys } = this.props;
      this.setLoading(true);
      const res = await getTreeData(searchValue);
      this.setLoading(false);
      // 获取默认展开节点
      let expandedKeys: string[] = [];
      let checkedKeys = [];
      if (res && res.length) {
        const node0 = res[0];
        const children = this.getNodeChildren(node0);
        if (children && children.length) {
          const key = this.getItemKey(node0);
          expandedKeys =
            defaultExpandedKeys && defaultExpandedKeys.length > 0 ? defaultExpandedKeys : [key];
        }
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
          resolve('');
        },
      );
    });
  };

  private getItemsByIds = (treeData: T[], ids: React.ReactText[], selectedItems: T[]) => {
    const { getKey = 'id', getChildren = 'children' } = this.props;
    for (let i = 0; i < treeData.length; i++) {
      const item = treeData[i];
      const key = this.getItemKey(item);
      const children = this.getNodeChildren(item);
      for (let j = 0; j < ids.length; j++) {
        if (key === ids[j]) {
          selectedItems.push(treeData[i]);
        }
      }
      if (children) {
        this.getItemsByIds(children, ids, selectedItems);
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
    this.setState(
      {
        expandedKeys,
      },
      () => {
        if (this.props.onExpand) {
          this.props.onExpand(expandedKeys);
        }
      },
    );
  };

  private onCheck = (
    checkedKeys: React.ReactText[],
    checkedInfo: {
      checkedNodes: DataNode[];
    },
  ) => {
    this.setState(
      {
        checkedKeys,
      },
      () => {
        this.updateCheckedItems(checkedInfo);
      },
    );
  };

  private defaultRenderOptItem = (extraData: ITreeCurdExtra<T>) => {
    const { selectedKeys, checkedKeys, refresh } = extraData;
    const { deleteFunction, checkable } = this.props;
    return (
      <React.Fragment>
        <Button type="primary" onClick={() => this.setState({ type: EditType.ADD })}>
          新增
        </Button>
        {selectedKeys && selectedKeys.length > 0 && (
          <ConfirmButton
            modalContent={{
              title: '这个操作不可逆',
              content: (
                <span>
                  确定要<span style={{ color: 'red' }}>删除</span>该节点？
                </span>
              ),
            }}
            onConfirm={async () => {
              if (deleteFunction) {
                const ids = checkable !== undefined ? checkedKeys : selectedKeys;
                await deleteFunction(ids);
                refresh();
              }
            }}
          />
        )}
      </React.Fragment>
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
      showSearch,
      getNodeProps,
      editEnable = true,
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
          {editEnable
            ? renderExtra
              ? renderExtra(this.getExtraData(), this.defaultRenderOptItem)
              : this.defaultRenderOptItem(this.getExtraData())
            : null}
        </div>
        <div className="treeCurdContent" style={{ minHeight }}>
          <div className={classnames('treeContent', treeContentClassName)} style={{ width }}>
            {showSearch !== undefined && (
              <div style={{ marginBottom: 20 }}>
                <Search
                  enterButton
                  onChange={e =>
                    this.setState({ searchValue: e.target.value }, () => this.refresh())
                  }
                />
              </div>
            )}

            <Spin
              spinning={
                this.props.defaultExpandedKeys || this.props.defaultCheckedKeys ? false : loading
              }
            >
              {AntdUtil.rendeTree<T>(
                treeData,
                TreeProps,
                getKey,
                getTitle,
                getChildren,
                getNodeProps,
              )}
            </Spin>
            <div className={classnames('checkContent', checkClassName)}>
              {checkable !== undefined && renderCheckExtra
                ? renderCheckExtra(this.getExtraData())
                : null}
            </div>
          </div>
          <div className={classnames('editContent', editContentClassName)}>
            {renderEditExtra && renderEditExtra(this.getExtraData())}
          </div>
        </div>
      </div>
    );
  }
}

export default TreeCurd;
