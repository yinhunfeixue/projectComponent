import { ColumnsType, TableProps } from 'antd/lib/table';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import { ISearchFormProps } from '../searchForm/SearchForm';
import { ISearchTableExtra, ITableResponse } from '../searchTable/SearchTable';
import './Curd.less';
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
    getListFunction: (currentPage: number, pageSize: number, searchParams: any) => Promise<ITableResponse<T>>;
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
    renderEditColumns?: (record: T, index: number, defaultRender: (record: T, params?: {
        disabledRecordDelete?: boolean;
        disabledRecordEdit?: boolean;
        disabledRecordPreview?: boolean;
    }) => ReactNode) => ReactNode;
    /**
     * 渲染列表顶部操作区
     *
     * @param extraData 表格的扩展区可用的数据的方法，例如selectedRowKeys
     * @param defaultRenderTableExtra 默认的渲染方法，可调用此方法以插入默认渲染的元素
     */
    renderTableExtra?: (extraData: ISearchTableExtra<T>, defaultRenderTableExtra: (extraData: ISearchTableExtra<T>) => ReactNode) => ReactNode;
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
    renderEditer?: (visible: boolean, close: () => void, extraData: ISearchTableExtra<T>, record?: T) => ReactNode;
    /**
     * 渲染新建页面
     * @param visible 是否期望可见
     * @param close 关闭的方法，调用此方法后，visible会变成false
     * @extraData 表格对外扩展方法，如果需要刷新，可使用extraData.refresh()
     */
    renderCreater?: (visible: boolean, close: () => void, extraData: ISearchTableExtra<T>) => ReactNode;
    /**
     * 渲染编辑页面，通常是一个弹窗
     *
     * @param visible 是否期望可见
     * @param close 关闭的方法，调用此方法后，visible会变成false
     * @extraData 表格对外扩展方法，如果需要刷新，可使用extraData.refresh()
     * @record 要查看的源数据
     */
    renderPreviewer?: (visible: boolean, close: () => void, extraData: ISearchTableExtra<T>, record?: T) => ReactNode;
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
    showTotal?: ((total: number, range: [number, number]) => React.ReactNode) | false;
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
declare class Curd<T extends object = any> extends Component<ICurdProps<T>, ICurdState<T>> {
    private extraData?;
    constructor(props: ICurdProps<T>);
    private defaultRenderExtra;
    private remove;
    private edit;
    private preview;
    private get _showDelete();
    private get _showEdit();
    private get _showPreview();
    private getRecordKey;
    private defaultRenderEditColumns;
    private getEditColumn;
    private closeEdit;
    private closePreview;
    private showCreate;
    private closeCreate;
    private get _batchDeleteEnable();
    render(): ReactNode;
}
export default Curd;
