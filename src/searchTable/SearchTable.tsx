import { Table } from 'antd';
import { ColumnsType, ColumnType, TableProps } from 'antd/lib/table';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
const { Column } = Table;

export interface ISearchTableExtra<T> {
  /**
   * 当前选中的key列表
   */
  selectedRowKeys?: any[];

  /**
   * 当前选中的数据列表
   */
  selectedRows?: T[];

  loading: boolean;

  /**
   * 刷新
   */
  refresh: () => void;

  /**
   * 设置搜索参数，此方法会把页码重置到第一页
   */
  setSearchParams: (params: any) => void;
}

interface ISearchTableState<T> {
  total: number;
  current: number;
  pageSize?: number;
  dataSource: T[];
  selectedRowKeys?: any[];
  selectedRows?: T[];
  loading: boolean;
  newColumns: ColumnType<T>[];
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
  ) => Promise<{
    dataSource: T[];
    total: number;
  }>;

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
}

class SearchTable<T extends object = any> extends Component<
  ISearchTableProps<T>,
  ISearchTableState<T>
> {
  static defaultPageSize = 10;

  private get pageSize() {
    return this.state.pageSize || this.props.pageSize || SearchTable.defaultPageSize || 10;
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
      newColumns: this.props.columns,
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

  private setLoading(loading: boolean) {
    this.setState({ loading });
  }

  private setSearchParams = (searchParams: any) => {
    this.setState({ searchParams }, () => {
      this.changePage(1);
    });
  };

  private async requestList() {
    const { getListFunction } = this.props;
    const { searchParams } = this.state;
    const { current } = this.state;

    this.setLoading(true);
    const res = await getListFunction(current, this.pageSize, searchParams);
    this.setLoading(false);
    this.setState(
      {
        dataSource: res.dataSource,
        total: res.total,
      },
      () => {
        if (this.state.current > this.maxPageIndex) {
          this.changePage();
        }
      },
    );
  }

  setColumn = (source: any, target: any) => {
    let { newColumns } = this.state;
    const titleList = [];
    const newColumns1 = [];
    for (let i = 0; i < newColumns.length; i += 1) {
      titleList.push(newColumns[i].title);
      newColumns1.push(newColumns[i]);
    }
    let sourceIndex = titleList.indexOf(source.title);
    let targetIndex = titleList.indexOf(target.title);
    newColumns1[sourceIndex] = newColumns[targetIndex];
    newColumns1[targetIndex] = newColumns[sourceIndex];
    this.setState({
      newColumns: newColumns1,
    });
  };

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
      showTotal,
      selectedEnable,
      showSizeChanger = true,
      dragEnable,
    } = this.props;

    const pageSize = this.pageSize;
    const {
      selectedRowKeys,
      selectedRows,
      loading,
      dataSource,
      total,
      current,
      newColumns,
    } = this.state;
    const pageTotal: number = total / pageSize;
    return (
      <div className={className} style={style}>
        {renderExtra &&
          renderExtra({
            selectedRowKeys,
            selectedRows,
            loading,
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
                  showQuickJumper: true,
                  showTotal,
                  showSizeChanger,
                  pageSize: pageSize,
                  onChange: (value: number) => {
                    this.changePage(value);
                  },
                  onShowSizeChange: (_, size: number) => {
                    const oldIndex = current * pageSize;
                    const newIndex = Math.ceil(oldIndex / size);
                    this.setState({ pageSize: size }, () => this.changePage(newIndex));
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
        >
          {newColumns.map((item, index) => (
            <Column<T>
              key={index}
              title={
                dragEnable ? (
                  <div
                    draggable
                    onDragStart={event => {
                      event.dataTransfer.setData('item', JSON.stringify(item));
                    }}
                    style={{ cursor: 'move' }}
                    data-set={JSON.stringify(item)}
                    onDragOver={event => {
                      event.preventDefault();
                    }}
                    onDrop={(event: any) => {
                      const item = event.dataTransfer.getData('item');
                      this.setColumn(JSON.parse(item), JSON.parse(event.target.dataset.set));
                    }}
                  >
                    {item.title}
                  </div>
                ) : (
                  <span>{item.title}</span>
                )
              }
              dataIndex={item.dataIndex}
              render={(value, record, index) =>
                item.render ? item.render(value, record, index) : <span>{value}</span>
              }
              {...item}
            />
          ))}
        </Table>
      </div>
    );
  }
}

export default SearchTable;
