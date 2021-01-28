import { FormItemProps } from 'antd/lib/form';
import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
interface IEmailFormItemProps extends IComponentProps {
    /**
     * key值
     */
    name: string;
    /**
     * 名称
     */
    label?: string;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * Form.Item属性设置
     */
    fromItemProps?: FormItemProps;
    /**
     * 必填校验错误信息
     */
    emptyMsg?: string;
    /**
     * 邮箱格式校验错误信息
     */
    errMsg?: string;
}
declare class EmailFormItem extends Component<IEmailFormItemProps, any> {
    render(): ReactNode;
}
export default EmailFormItem;
