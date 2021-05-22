import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/lib/table';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import { ISearchTableExtra } from './ISearchTableExtra';
import { ITableResponse } from './ITableResponse';
const { Column } = Table;

interface ISearchTableState<T> {
  total: number;
  current: number;
  pageSize?: number;
  dataSource: T[];
  selectedRowKeys?: any[];
  selectedRows?: T[];
  loading: boolean;
  /**
   * 搜索参数
   */
  searchParams?: any;
}
interface ISearchTableProps<T> extends IComponentProps {
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

  rowKey?: ((record: T) => string) | string;

  /**
   * 渲染表格附加的表单，通常用来放置批量删除，批量设置状态这样的按钮
   */
  renderExtra?: (extraData: ISearchTableExtra<T>) => ReactNode;

  /**
   * 是否显示快速跳转页码的输入框
   */
  showQuickJumper?: boolean;

  /**
   * 是否可切换每页显示的数量
   */
  showSizeChanger?: boolean;

  /**
   * 显示总数量的方法
   */
  showTotal?:
    | ((total: number, range: [number, number]) => React.ReactNode)
    | false;

  /**
   * 表格的样式名
   */
  tableClassName?: string;

  /**
   * 表格的样式
   */
  tableStyle?: React.CSSProperties;

  /**
   * 表格每页显示的数量
   */
  pageSize?: number;

  /**
   * 是否禁用： 当不满一页时，是否自动隐藏分面器
   */
  disableAutoHidePage?: boolean;

  /**
   * 需要额外设置给Table的props
   */
  tableProps?: TableProps<T>;

  /**
   * 是否可选中
   */
  selectedEnable?: boolean;

  /**
   * 是否可拖动
   */
  dragEnable?: boolean;

  /**
   * 默认搜索参数
   */
  defaultSearchParams?: any;

  /**
   * 搜索参数变化时触发的事件
   */
  onSearchParamsChange?: (searchParams: any) => void;

  /**
   * 数据源发生变化时触发的事件
   */
  onDataChange?: (data: ITableResponse<T>) => void;
}

class SearchTable<T extends object = any> extends Component<
  ISearchTableProps<T>,
  ISearchTableState<T>
> {
  static defaultPageSize = 10;

  private get pageSize() {
    return (
      this.state.pageSize ||
      this.props.pageSize ||
      SearchTable.defaultPageSize ||
      10
    );
  }

  private get maxPageIndex() {
    const { total } = this.state;
    return Math.max(1, Math.ceil(total / this.pageSize));
  }

  constructor(props: ISearchTableProps<T>) {
    super(props);
    this.state = {
      total: 0,
      current: 1,
      dataSource: [],
      loading: false,
      searchParams: props.defaultSearchParams,
    };
  }

  componentDidMount() {
    this.requestList();
  }

  private changePage(pageIndex?: number) {
    const { current } = this.state;
    if (!pageIndex) {
      pageIndex = current;
    }
    const maxPageIndex = this.maxPageIndex;

    if (pageIndex < 1) {
      pageIndex = 1;
    }

    if (pageIndex > maxPageIndex) {
      pageIndex = maxPageIndex;
    }
    this.setState({ current: pageIndex }, () => this.requestList());
  }

  public refresh = () => {
    this.requestList();
  };

  private setLoading(loading: boolean) {
    this.setState({ loading });
  }

  private setSearchParams = (searchParams: any) => {
    const { onSearchParamsChange } = this.props;
    this.setState({ searchParams }, () => {
      this.changePage(1);
      if (onSearchParamsChange) {
        onSearchParamsChange(searchParams);
      }
    });
  };

  private async requestList() {
    const { getListFunction, onDataChange } = this.props;
    const { searchParams } = this.state;
    const { current } = this.state;

    this.setLoading(true);
    try {
      const res = await getListFunction(current, this.pageSize, searchParams);
      const data: ITableResponse<T> = {
        dataSource: res.dataSource,
        total: res.total,
      };
      this.setState(
        {
          ...data,
        },
        () => {
          if (onDataChange) {
            onDataChange(data);
          }
          if (this.state.current > this.maxPageIndex) {
            this.changePage();
          }
        },
      );
    } catch (error) {
    } finally {
      this.setLoading(false);
    }
  }

  private defaultShowTotal(
    total: number,
    range: [number, number],
  ): React.ReactNode {
    return `共${total}项`;
  }

  public render(): ReactNode {
    const {
      className,
      tableClassName,
      style,
      tableStyle,
      tableProps,
      renderExtra,
      rowKey,
      disableAutoHidePage,
      showTotal = this.defaultShowTotal,
      selectedEnable,
      showSizeChanger = true,
      showQuickJumper = true,
      columns,
    } = this.props;

    const pageSize = this.pageSize;
    const {
      selectedRowKeys,
      selectedRows,
      loading,
      dataSource,
      total,
      current,
      searchParams,
    } = this.state;
    const pageTotal: number = total / pageSize;
    return (
      <div className={className} style={style}>
        {renderExtra &&
          renderExtra({
            selectedRowKeys,
            selectedRows,
            loading,
            searchParams,
            refresh: this.refresh,
            setSearchParams: this.setSearchParams,
          })}
        <Table<T>
          className={tableClassName}
          bordered
          style={tableStyle}
          {...tableProps}
          rowKey={rowKey || 'id'}
          loading={loading}
          dataSource={dataSource}
          pagination={
            !disableAutoHidePage && pageTotal <= 1
              ? false
              : {
                  total,
                  current,
                  showQuickJumper,
                  showTotal: showTotal === false ? undefined : showTotal,
                  showSizeChanger,
                  pageSize: pageSize,
                  onChange: (value: number) => {
                    this.changePage(value);
                  },
                  onShowSizeChange: (_, size: number) => {
                    const oldIndex = current * pageSize;
                    const newIndex = Math.ceil(oldIndex / size);
                    this.setState({ pageSize: size }, () =>
                      this.changePage(newIndex),
                    );
                  },
                }
          }
          rowSelection={
            selectedEnable
              ? {
                  onChange: (
                    selectedRowKeys: React.ReactText[],
                    selectedRows: T[],
                  ) => {
                    this.setState({ selectedRowKeys, selectedRows });
                  },
                }
              : undefined
          }
          columns={columns}
        ></Table>
      </div>
    );
  }
}

export default SearchTable;
