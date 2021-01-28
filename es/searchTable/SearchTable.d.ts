import { ColumnsType, ColumnType, TableProps } from 'antd/lib/table';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
export interface ITableResponse<T> {
    dataSource: T[];
    total: number;
}
export interface ISearchTableExtra<T> {
    /**
     * 当前选中的key列表
     */
    selectedRowKeys?: any[];
    /**
     * 当前选中的数据列表
     */
    selectedRows?: T[];
    /**
     * 是否加载中
     */
    loading: boolean;
    /**
     * 获取搜索参数
     */
    searchParams: any;
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
    getListFunction: (currentPage: number, pageSize: number, searchParams: any) => Promise<ITableResponse<T>>;
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
    showTotal?: ((total: number, range: [number, number]) => React.ReactNode) | false;
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
declare class SearchTable<T extends object = any> extends Component<ISearchTableProps<T>, ISearchTableState<T>> {
    static defaultPageSize: number;
    private get pageSize();
    private get maxPageIndex();
    constructor(props: ISearchTableProps<T>);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ISearchTableProps<T>): void;
    private changePage;
    refresh: () => void;
    private setLoading;
    private setSearchParams;
    private requestList;
    setColumn: (source: any, target: any) => void;
    private defaultShowTotal;
    render(): ReactNode;
}
export default SearchTable;
