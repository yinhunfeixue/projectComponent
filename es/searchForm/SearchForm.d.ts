import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import './SearchForm.less';
interface ISearchFormState {
}
export interface ISearchFormProps extends IComponentProps {
    /**
     * 表单项，参考：IFormItemData
     */
    itemList?: IFormItemData[];
    /**
     * 提交数据时触发的方法
     */
    onSubmit?: (values: Store) => void;
    /**
     * 每行默认的列数
     */
    columnNumber?: number;
    /**
     * 表单项小于等于几时，使用inline，默认为3
     */
    inlineMaxNumber?: number;
    /**
     * 渲染搜索元素
     */
    renderSearchElement?: () => ReactNode;
    /**
     * 渲染重置元素
     */
    renderResetElement?: () => ReactNode;
    /**
     * Form的初始化
     */
    initialValues?: Store;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 获取表单实例，需要联动时，需要使用此方法
     */
    getFormInstance?: (form: FormInstance | null) => void;
}
/**
 * 搜索表单
 */
declare class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
    private form;
    private _defaultRenderSearchElement;
    private _defaultRenderResetElement;
    private submit;
    render(): ReactNode;
}
export default SearchForm;
