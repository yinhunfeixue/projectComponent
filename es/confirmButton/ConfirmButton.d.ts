import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import './ConfirmButton.less';
interface IConfirmButtonState {
    loading: boolean;
}
interface IConfirmButtonProps extends IComponentProps {
    /**
     * 确认成功后，触发的事件
     */
    onConfirm?: () => void;
    /**
     * 是否确认的方法，默认为弹窗并由用户选择。
     *
     * 自定义验证函数须返回 Promise<boolean>，为true时，表示确认
     */
    validate?: () => Promise<boolean>;
    /**
     * 显示的元素
     */
    getElement?: (loading: boolean) => ReactNode;
    /**
     * 按钮上的文字
     */
    text?: string;
    /**
     * 如果使用默认的弹窗验证方式，且需要自定义文字，可使用此属性
     */
    modalContent?: {
        /**
         * 弹窗标题
         */
        title: string;
        /**
         * 弹窗内容
         */
        content: string | ReactNode;
    };
}
/**
 * 确认按钮
 */
declare class ConfirmButton extends Component<IConfirmButtonProps, IConfirmButtonState> {
    constructor(props: IConfirmButtonProps);
    render(): ReactNode;
    private clickHandler;
    private validate;
    private defaultValidate;
    private getChildren;
}
export default ConfirmButton;
