import { FormItemProps } from 'antd/lib/form';
import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
interface IIdCardFormItemProps extends IComponentProps {
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
     * 身份证校验通过，信息回调
     */
    onSuccess?: (values: any) => void;
    /**
     * 身份证类型，1.大陆身份证，2.港澳身份证，3.台湾身份证
     */
    idCardType?: 1 | 2 | 3;
    /**
     * 必填校验错误信息
     */
    emptyMsg?: string;
    /**
     * 身份证号码格式校验错误信息
     */
    errMsg?: string;
}
declare class IdCardFormItem extends Component<IIdCardFormItemProps, any> {
    private getIdCard;
    private onChange;
    render(): ReactNode;
}
export default IdCardFormItem;
