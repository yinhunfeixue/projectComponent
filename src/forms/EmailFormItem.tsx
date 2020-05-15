import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import React, { Component, ReactNode } from 'react';
import FormRegExp from '../enums/FormRegExp';
import IComponentProps from '../interfaces/IComponentProps';

const classnames = require('classnames');

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

class EmailFormItem extends Component<IEmailFormItemProps, any> {
  public render(): ReactNode {
    const { fromItemProps, className, required, style, name, label, emptyMsg, errMsg } = this.props;
    return (
      <Form.Item
        className={classnames('email-from', className)}
        style={style}
        {...fromItemProps}
        name={name}
        label={label}
        rules={[
          {
            required,
            message: emptyMsg || '请填写邮箱',
          },
          {
            pattern: FormRegExp.EMAIL,
            message: errMsg || '邮箱格式不正确',
          },
        ]}
      >
        <Input />
      </Form.Item>
    );
  }
}

export default EmailFormItem;
