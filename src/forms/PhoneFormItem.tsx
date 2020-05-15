import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import React, { Component, ReactNode } from 'react';
import FormRegExp from '../enums/FormRegExp';
import IComponentProps from '../interfaces/IComponentProps';

const classnames = require('classnames');

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

class PhoneFormItem extends Component<IPhoneFormItemProps, any> {
  private getPhone = (type: number | undefined) => {
    let phone = FormRegExp.MOBILE;
    switch (type) {
      case 1:
        phone = FormRegExp.MOBILE;
        break;
      case 2:
        phone = FormRegExp.PHONE;
        break;
      default:
        break;
    }
    return phone;
  };

  public render(): ReactNode {
    const {
      fromItemProps,
      className,
      required,
      phoneType,
      style,
      name,
      label,
      emptyMsg,
      errMsg,
    } = this.props;
    return (
      <Form.Item
        className={classnames('phone-from', className)}
        style={style}
        {...fromItemProps}
        name={name}
        label={label}
        rules={[
          {
            required,
            message: emptyMsg || '请填写电话号码',
          },
          {
            pattern: this.getPhone(phoneType),
            message: errMsg || '电话号码格式不正确',
          },
        ]}
      >
        <Input />
      </Form.Item>
    );
  }
}

export default PhoneFormItem;
