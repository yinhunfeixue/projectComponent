import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { ColumnsType, ColumnType, TableProps } from 'antd/lib/table';
import React, { Component, ReactNode } from 'react';
import ConfirmButton from '../confirmButton/ConfirmButton';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import SearchForm, { ISearchFormProps } from '../searchForm/SearchForm';
import { ISearchTableExtra } from '../searchTable/ISearchTableExtra';
import { ITableResponse } from '../searchTable/ITableResponse';
import SearchTable from '../searchTable/SearchTable';
import './Curd.less';

const classnames = require('classnames');

interface ICurdState<T> {
  /**
   * 删除中的ID列表
   */
  deletingKeyList: any[];

  visibleEdit?: boolean;
  editRecord?: T;

  visiblePreview?: boolean;

  visibleCreate?: boolean;
}
interface ICurdProps<T> extends IComponentProps {
  /**
   * 表格的列数据
   */
  columns: ColumnsType<T>;

  /**
   * 请求数据的方法，需返回指定格式的数据
   *
   * @param currentPage 当前页码，从1开始
   * @param pageSize 一页显示的数据量
   * @param searchParams 搜索参数
   */
  getListFunction: (
    currentPage: number,
    pageSize: number,
    searchParams: any,
  ) => Promise<ITableResponse<T>>;

  /**
   * 数据标识符，可以是属性名称或者一个函数，如果是函数，返回值表示标识符的值
   */
  rowKey?: string | ((record: T) => string);

  /**
   * 一页显示的数量
   */
  pageSize?: number;

  /**
   * 渲染编辑列
   *
   * @param record 数据项
   * @param index 数据行序号
   * @param defaultRender 默认的渲染方法，可调用此方法以插入默认渲染的元素
   */
  renderEditColumns?: (
    record: T,
    index: number,
    defaultRender: (
      record: T,
      params?: {
        disabledRecordDelete?: boolean;
        disabledRecordEdit?: boolean;
        disabledRecordPreview?: boolean;
      },
    ) => ReactNode,
  ) => ReactNode;

  /**
   * 渲染列表顶部操作区
   *
   * @param extraData 表格的扩展区可用的数据的方法，例如selectedRowKeys
   * @param defaultRenderTableExtra 默认的渲染方法，可调用此方法以插入默认渲染的元素
   */
  renderTableExtra?: (
    extraData: ISearchTableExtra<T>,
    defaultRenderTableExtra: (extraData: ISearchTableExtra<T>) => ReactNode,
  ) => ReactNode;

  /**
   * 搜索表单的数据
   */
  searchItem?: IFormItemData[];

  /**
   * 删除函数
   */
  deleteFunction?: (idList: any[]) => Promise<any>;

  /**
   * 渲染编辑页面，通常是一个弹窗
   *
   * @param visible 是否期望可见
   * @param close 关闭的方法，调用此方法后，visible会变成false
   * @extraData 表格对外扩展方法，如果需要刷新，可使用extraData.refresh()
   * @record 当前编辑的源数据
   */
  renderEditer?: (
    visible: boolean,
    close: () => void,
    extraData: ISearchTableExtra<T>,
    record?: T,
  ) => ReactNode;

  /**
   * 渲染新建页面
   * @param visible 是否期望可见
   * @param close 关闭的方法，调用此方法后，visible会变成false
   * @extraData 表格对外扩展方法，如果需要刷新，可使用extraData.refresh()
   */
  renderCreater?: (
    visible: boolean,
    close: () => void,
    extraData: ISearchTableExtra<T>,
  ) => ReactNode;

  /**
   * 渲染编辑页面，通常是一个弹窗
   *
   * @param visible 是否期望可见
   * @param close 关闭的方法，调用此方法后，visible会变成false
   * @extraData 表格对外扩展方法，如果需要刷新，可使用extraData.refresh()
   * @record 要查看的源数据
   */
  renderPreviewer?: (
    visible: boolean,
    close: () => void,
    extraData: ISearchTableExtra<T>,
    record?: T,
  ) => ReactNode;

  /**
   * 自定义新建操作的外观元素
   */
  renderCreateElement?: () => ReactNode;

  /**
   * 自定义批量删除的外观元素
   */
  renderBatchDeleteElement?: () => ReactNode;

  /**
   * 自定义删除的外观元素
   */
  renderDeleteElement?: () => ReactNode;

  /**
   * 自定义编辑的外观元素
   */
  renderEditElement?: () => ReactNode;

  /**
   * 自定义预览（查看）的外观元素
   */
  renderEditPreviewElement?: () => ReactNode;

  /**
   * 是否可选择
   */
  selectedEnable?: boolean;

  /**
   * 是否禁用新建
   */
  disabledCreate?: boolean;

  /**
   * 是否禁用删除
   */
  disabledDelete?: boolean;

  /**
   * 是否禁用编辑
   */
  disabledEdit?: boolean;

  /**
   * 是否禁用预览
   */
  disabledPreview?: boolean;

  /**
   * 是否禁用编辑列
   */
  disabledEditColumn?: boolean;

  /**
   * 编辑列的宽度
   */
  editColumnWidth?: number;

  /**
   * 是否可切换每页显示的数量
   */
  showSizeChanger?: boolean;

  /**
   * 是否显示快速跳转页码的输入框
   */
  showQuickJumper?: boolean;

  /**
   * 显示总数量的方法, false表示不显示
   */
  showTotal?:
    | ((total: number, range: [number, number]) => React.ReactNode)
    | false;

  /**
   * 搜索表单项小于等于几时，使用inline，默认为3
   */
  inlineMaxNumber?: number;

  /**
   * 传递给搜索表单的props
   */
  searchFormProps?: ISearchFormProps;

  /**
   * 传递给表格的props
   */
  tableProps?: TableProps<T>;

  /**
   * 搜索参数变化时触发的事件
   */
  onSearchParamsChange?: (searchParams: any) => void;

  /**
   * 数据源发生变化时触发的事件
   */
  onDataChange?: (data: ITableResponse<T>) => void;
}

/**
 * 包含增删改查的组件
 *
 * ## 自带以下功能
 * + 列表--分页表格
 * + 增--表格上方操作区“新增按钮”-->打开新建弹窗
 * + 改--操作列“编辑按钮”-->打开编辑弹窗
 * + 删--操作列“删除按钮”-->删除操作
 *
 * ## 必填属性
 * + columns--表格列
 * + getListFunction--获取列表的方法
 *
 * ## 可选属性
 *
 * + rowKey--标识符，默认ID。 删除会用以rowKey为参数
 * + 扩展操作列
 * + 扩展表格上方操作区
 * + searchItems--搜索表单项，如设置，则自动在表格上方显示搜索表单
 * + renderEdit--渲染编辑视图，如果设置，则自动自动显示编辑按钮和新建按钮。
 * + renderCreate--渲染新建视图，如果新建和编辑一样，可共享renderEdit方法
 * + deleteFunction--删除，如设置，则
 *    + 自动显示“删除按钮”
 *    + 自动使表格可选择
 * + 禁用：增、改、删
 * + 禁用：编辑列
 * + 自定义：编辑按钮、删除按钮、新建按钮
 */
class Curd<T extends object = any> extends Component<
  ICurdProps<T>,
  ICurdState<T>
> {
  private extraData?: ISearchTableExtra<T>;

  constructor(props: ICurdProps<T>) {
    super(props);
    this.state = {
      deletingKeyList: [],
    };
  }

  private defaultRenderExtra = (extraData: ISearchTableExtra<T>) => {
    const { selectedRowKeys } = extraData;
    const {
      disabledCreate,
      renderCreater,
      renderCreateElement,
      renderBatchDeleteElement,
    } = this.props;
    const { deletingKeyList } = this.state;
    return (
      <React.Fragment>
        {!disabledCreate && renderCreater && (
          <span
            onClick={() => {
              this.showCreate();
            }}
          >
            {renderCreateElement ? (
              renderCreateElement()
            ) : (
              <Button type="primary" icon={<EditOutlined />}>
                新建
              </Button>
            )}
          </span>
        )}
        {this._batchDeleteEnable && (
          <ConfirmButton
            onConfirm={() => {
              this.remove(selectedRowKeys);
            }}
            getElement={loading => {
              return renderBatchDeleteElement ? (
                renderBatchDeleteElement()
              ) : (
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  loading={loading || deletingKeyList.length > 0}
                >
                  批量删除
                </Button>
              );
            }}
          />
        )}
      </React.Fragment>
    );
  };

  private async remove(idList?: any[]) {
    if (!idList) {
      return;
    }
    const { deleteFunction } = this.props;
    if (!deleteFunction) {
      return;
    }
    this.setState({ deletingKeyList: idList });
    try {
      await deleteFunction(idList);
      if (this.extraData) {
        this.extraData.refresh();
      }
    } catch (error) {
      this.setState({ deletingKeyList: [] });
    }
  }

  private edit(record: T): void {
    this.setState({ visibleEdit: true, editRecord: record });
  }

  private preview(record: T): void {
    this.setState({ visiblePreview: true, editRecord: record });
  }

  private get _showDelete() {
    const { deleteFunction, disabledDelete } = this.props;
    return Boolean(!disabledDelete && deleteFunction);
  }

  private get _showEdit() {
    const { renderEditer, disabledEdit } = this.props;
    return Boolean(!disabledEdit && renderEditer);
  }

  private get _showPreview() {
    const { renderPreviewer, disabledPreview } = this.props;
    return Boolean(!disabledPreview && renderPreviewer);
  }

  private getRecordKey(record: T) {
    const { rowKey = 'id' } = this.props;
    if (typeof rowKey === 'string') {
      return (record as any)[rowKey];
    }
    return rowKey(record);
  }

  private defaultRenderEditColumns = (
    record: T,
    params?: {
      disabledRecordDelete?: boolean;
      disabledRecordEdit?: boolean;
      disabledRecordPreview?: boolean;
    },
  ) => {
    const {
      disabledRecordDelete = false,
      disabledRecordEdit = false,
      disabledRecordPreview = false,
    } = params || {};
    const showDelete = this._showDelete && !disabledRecordDelete;
    const showEdit = this._showEdit && !disabledRecordEdit;
    const showPreview = this._showPreview && !disabledRecordPreview;
    const key = this.getRecordKey(record);
    const {
      renderDeleteElement,
      renderEditElement,
      renderEditPreviewElement,
    } = this.props;
    return (
      <React.Fragment>
        {showDelete && (
          <ConfirmButton
            onConfirm={() => {
              this.remove([this.getRecordKey(record)]);
            }}
            getElement={loading => {
              const { deletingKeyList } = this.state;
              return renderDeleteElement ? (
                renderDeleteElement()
              ) : (
                <Tooltip title="删除">
                  <Button
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                    loading={loading || deletingKeyList.indexOf(key) >= 0}
                  />
                </Tooltip>
              );
            }}
          />
        )}
        {showEdit && (
          <span onClick={() => this.edit(record)}>
            {renderEditElement ? (
              renderEditElement()
            ) : (
              <Tooltip title="编辑">
                <Button icon={<EditOutlined />} type="link" />
              </Tooltip>
            )}
          </span>
        )}
        {showPreview &&
          (renderEditPreviewElement ? (
            renderEditPreviewElement()
          ) : (
            <span onClick={() => this.preview(record)}>
              <Tooltip title="查看">
                <Button icon={<EyeOutlined />} type="link" />
              </Tooltip>
            </span>
          ))}
      </React.Fragment>
    );
  };

  private getEditColumn(): ColumnType<T> | null {
    const {
      disabledEditColumn,
      renderEditColumns,
      editColumnWidth = 120,
    } = this.props;
    if (disabledEditColumn) {
      return null;
    }
    return {
      title: '操作',
      fixed: 'right',
      width: editColumnWidth,
      align: 'right',
      className: 'fh-CurdEditColumn',
      render: (text, record, index) => {
        return renderEditColumns
          ? renderEditColumns(record, index, this.defaultRenderEditColumns)
          : this.defaultRenderEditColumns(record);
      },
    };
  }

  private closeEdit = () => {
    this.setState({ visibleEdit: false });
  };

  private closePreview = () => {
    this.setState({ visiblePreview: false });
  };

  private showCreate = () => {
    this.setState({ visibleCreate: true });
  };

  private closeCreate = () => {
    this.setState({ visibleCreate: false });
  };

  private get _batchDeleteEnable() {
    if (this.extraData) {
      const { selectedRowKeys } = this.extraData;
      const { disabledDelete, deleteFunction } = this.props;
      return Boolean(
        !disabledDelete &&
          deleteFunction &&
          selectedRowKeys &&
          selectedRowKeys.length,
      );
    }
    return false;
  }

  public render(): ReactNode {
    const {
      columns,
      getListFunction,
      onDataChange,
      onSearchParamsChange,
      rowKey = 'id',
      deleteFunction,
      selectedEnable,
      renderTableExtra,
      searchItem,
      pageSize,
      disabledCreate,
      disabledDelete,
      renderCreater,
      renderEditer,
      renderPreviewer,
      showSizeChanger,
      showQuickJumper,
      inlineMaxNumber,
      searchFormProps,
      tableProps,
      className,
      style,
      showTotal,
    } = this.props;
    const {
      visibleCreate,
      visibleEdit,
      editRecord,
      visiblePreview,
    } = this.state;
    const tableSelectedEnable = Boolean(
      selectedEnable === true ||
        (selectedEnable === undefined && !disabledDelete && deleteFunction),
    );
    const editColumn = this.getEditColumn();
    const useColumns = editColumn ? columns.concat([editColumn]) : columns;
    return (
      <SearchTable<T>
        columns={useColumns}
        getListFunction={getListFunction}
        onDataChange={onDataChange}
        onSearchParamsChange={onSearchParamsChange}
        rowKey={rowKey}
        pageSize={pageSize}
        showSizeChanger={showSizeChanger}
        showQuickJumper={showQuickJumper}
        showTotal={showTotal}
        tableProps={{
          scroll: {
            x: 800,
          },
          ...tableProps,
        }}
        defaultSearchParams={searchFormProps?.initialValues}
        style={style}
        className={classnames('fh-Curd', className)}
        selectedEnable={tableSelectedEnable}
        renderExtra={(extraData: ISearchTableExtra<T>) => {
          const { setSearchParams } = extraData;
          this.extraData = extraData;
          return (
            <React.Fragment>
              {/* 渲染搜索表单 */}
              {searchItem && (
                <SearchForm
                  {...searchFormProps}
                  inlineMaxNumber={inlineMaxNumber}
                  itemList={searchItem}
                  onSubmit={(values: any) => {
                    setSearchParams(values);
                  }}
                />
              )}
              {/* 渲染表格批量操作区 */}
              <div className="fh-ControlGroup">
                {renderTableExtra
                  ? renderTableExtra(extraData, this.defaultRenderExtra)
                  : this.defaultRenderExtra(extraData)}
              </div>
              {!disabledCreate &&
                renderCreater &&
                renderCreater(
                  Boolean(visibleCreate),
                  this.closeCreate,
                  extraData,
                )}

              {this._showEdit &&
                editRecord &&
                renderEditer &&
                renderEditer(
                  Boolean(visibleEdit),
                  this.closeEdit,
                  extraData,
                  editRecord,
                )}

              {this._showPreview &&
                editRecord &&
                renderPreviewer &&
                renderPreviewer(
                  Boolean(visiblePreview),
                  this.closePreview,
                  extraData,
                  editRecord,
                )}
            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default Curd;
