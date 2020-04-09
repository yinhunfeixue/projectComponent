import Table, { ColumnsType, TableProps } from 'antd/lib/table';
import lodash from 'lodash';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';

interface ISearchTableExtra<T> {
  /**
   * 当前选中的key列表
   */
  selectedRowKeys?: any[];

  /**
   * 当前选中的数据列表
   */
  selectedRows?: T[];

  loading: boolean;

  refresh: () => void;
}

interface ISearchTableState<T> {
  total: number;
  current: number;
  dataSource: T[];
  selectedRowKeys?: any[];
  selectedRows?: T[];
  loading: boolean;
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
  ) => Promise<{
    dataSource: [];
    total: number;
  }>;

  rowKey?: (record: T) => string | string;

  /**
   * 渲染表格附加的表单，通常用来放置批量删除，批量设置状态这样的按钮
   */
  renderExtra?: (extraData: ISearchTableExtra<T>) => ReactNode;

  /**
   * 搜索参数
   *
   * 组件会对此参数进行深度比较，如果参数有改变，会重置页码
   */
  searchParams?: any;

  /**
   * 是否显示快速跳转页码的输入框
   */
  showQuickJumper?: boolean;

  /**
   * 显示总数量的方法
   */
  showTotal?: ((total: number, range: [number, number]) => React.ReactNode) | undefined;

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
   * 当不满一页时，是否自动隐藏分面器
   */
  autoHidePage?: boolean;

  /**
   * 需要额外设置给Table的props
   */
  tableProps?: TableProps<T>;

  /**
   * 是否可选中
   */
  selectedEnable?: boolean;
}

class SearchTable<T extends object> extends Component<ISearchTableProps<T>, ISearchTableState<T>> {
  static defaultPageSize = 20;

  private get pageSize() {
    return this.props.pageSize || SearchTable.defaultPageSize || 10;
  }

  private get maxPageIndex() {
    const { total } = this.state;
    return Math.ceil(this.state.total / this.pageSize);
  }

  constructor(props: ISearchTableProps<T>) {
    super(props);
    this.state = {
      total: 0,
      current: 1,
      dataSource: [],
      loading: false,
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

  private async requestList() {
    const { getListFunction, searchParams } = this.props;
    const { current } = this.state;

    this.setState({ loading: true });
    const res = await getListFunction(current, this.pageSize, searchParams);
    this.setState(
      {
        dataSource: res.dataSource,
        total: res.total,
        loading: false,
      },
      () => {
        if (this.state.current > this.maxPageIndex) {
          this.changePage();
        }
      },
    );
  }

  componentDidUpdate(prevProps: ISearchTableProps<T>) {
    // 如果searchParams发生变化，重置表格
    if (!lodash.isEqual(prevProps.searchParams, this.props.searchParams)) {
      this.changePage(1);
    }
  }

  public render(): ReactNode {
    const {
      className,
      tableClassName,
      style,
      tableStyle,
      tableProps,
      columns,
      renderExtra,
      rowKey,
      autoHidePage,
      showTotal,
      selectedEnable,
    } = this.props;

    const pageSize = this.pageSize;
    const { selectedRowKeys, selectedRows, loading, dataSource, total, current } = this.state;

    const pageTotal: number = dataSource ? dataSource.length / pageSize : 0;
    return (
      <div className={className} style={style}>
        {renderExtra &&
          renderExtra({ selectedRowKeys, selectedRows, loading, refresh: this.refresh })}
        <Table<T>
          {...tableProps}
          rowKey={rowKey || 'id'}
          scroll={{ x: 1000 }}
          columns={columns}
          className={tableClassName}
          style={tableStyle}
          loading={loading}
          dataSource={dataSource}
          pagination={
            autoHidePage && pageTotal <= 1
              ? false
              : {
                  total,
                  current,
                  showQuickJumper: true,
                  showTotal,
                  pageSize: pageSize,
                  onChange: (value: number) => {
                    this.changePage(value);
                  },
                }
          }
          rowSelection={
            selectedEnable
              ? {
                  onChange: (selectedRowKeys: React.ReactText[], selectedRows: T[]) => {
                    this.setState({ selectedRowKeys, selectedRows });
                  },
                }
              : undefined
          }
        />
      </div>
    );
  }
}

export default SearchTable;
