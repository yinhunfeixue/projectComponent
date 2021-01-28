import { Store } from 'antd/lib/form/interface';
import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import './EditForm.less';
interface IEditFormState<T> {
    loading: boolean;
    source?: T;
}
export interface IEditFormProps<T> extends IComponentProps {
    /**
     * 新增函数，then表示成功，catch表示异常
     */
    addFunction?: (value: Store) => Promise<any>;
    /**
     * 编辑函数，then表示成功，catch表示异常
     */
    updateFunction?: (value: Store, source: T) => Promise<any>;
    /**
     * 获取源数据完整信息的方法。
     * 当props.source只是部分信息，而表单中需要展示完整信息时，需通过此方法获取完整数据
     */
    getDetailFunction?: (source: T) => Promise<T>;
    /**
     * 源数据，如果是“编辑模式”，且设置了“源数据”，保存时调用编辑函数
     */
    source?: T;
    /**
     * 表单项列表
     */
    formItemList: IFormItemData[];
    /**
     * 列数
     */
    columnsCount?: number;
    /**
     * 主键名称
     */
    key?: string;
    /**
     * 取消事件
     */
    onCancel?: () => void;
    /**
     * 保存成功事件
     */
    onOk?: () => void;
    /**
     * 保存出错的事件
     */
    onError?: (error: any) => void;
    /**
     * 是否隐藏操作按钮，如果设置为true，需自定义控制按钮
     */
    hideControls?: Boolean;
    onLoadingChange?: (value: boolean) => void;
}
/**
 * 编辑表单，支持：编辑，阅读两种模式；会自行判断是新增还是修改
 */
declare class EditForm<T extends Store> extends Component<IEditFormProps<T>, IEditFormState<T>> {
    private formRef;
    constructor(props: IEditFormProps<T>);
    submit(): void;
    cancel(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IEditFormProps<T>): void;
    private updateStateSource;
    private setLoading;
    private save;
    private get readOnly();
    private getControl;
    private getControlFormItemList;
    render(): ReactNode;
}
export default EditForm;
