/// <reference types="react" />
import IFormItemData from '../interfaces/IFormItemData';
declare class FormUtil {
    /**
     * 渲染表单项
     * @param formItemList 表单数据源
     *    * @param columnCount 列数，默认为2
     * @param defaultLabelSpan 每个表单项的标签默认占用的列数
     */
    static renderFormItems(formItemList: IFormItemData[], columnCount?: number, defaultLabelSpan?: number, defaultWrapSpan?: number): JSX.Element[] | null;
    static renderInlinFormItems(formItemList: IFormItemData[]): JSX.Element[] | null;
}
export default FormUtil;
