import { FormItemProps } from 'antd/lib/form';
import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
interface IPhoneFormItemProps extends IComponentProps {
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
     * 电话类型，1.手机号码 2.固定电话
     */
    phoneType?: 1 | 2;
    /**
     * 必填校验错误信息
     */
    emptyMsg?: string;
    /**
     * 电话号码格式校验错误信息
     */
    errMsg?: string;
}
declare class PhoneFormItem extends Component<IPhoneFormItemProps, any> {
    private getPhone;
    render(): ReactNode;
}
export default PhoneFormItem;
