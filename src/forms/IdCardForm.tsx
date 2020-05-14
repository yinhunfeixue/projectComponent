import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import React, { Component, ReactNode } from 'react';
import FormRegExp from '../enums/FormRegExp';
import IComponentProps from '../interfaces/IComponentProps';

const IdCard = require('idcard');

const classnames = require('classnames');

interface IIdCardFormProps extends IComponentProps {
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
   * 身份证类型，1分大陆身份证，2港澳身份证，3台湾身份证
   */
  idCardType?: number;
  /**
   * 必填校验错误信息
   */
  emptyMsg?: string;
  /**
   * 身份证号码格式错误信息
   */
  errMsg?: string;
}

class IdCardForm extends Component<IIdCardFormProps, any> {

  public getIdCard = (type: number | undefined) => {

    let idCard = FormRegExp.IDCARD;
    switch (type) {
      case 1:
        idCard = FormRegExp.IDCARD
        break;
      case 2:
        idCard = FormRegExp.HK_IDCARD
        break;
      case 3:
        idCard = FormRegExp.TW_IDCARD
        break;
      default:
        break;
    }
    return idCard
  }

  public onChange = (e: { target: { value: any } }) => {
    const idCard = e.target.value;
    if (idCard && IdCard.verify(idCard)) {
      const info = IdCard.info(idCard);
      const { onSuccess } = this.props;
      if (onSuccess) {
        onSuccess(info)
      }
    }
  };

  public render(): ReactNode {
    const {
      fromItemProps,
      className,
      required,
      idCardType,
      style,
      name,
      label,
      emptyMsg,
      errMsg,
    } = this.props;
    return (
      <Form.Item
        className={classnames('idCard-from', className)}
        style={style}
        {...fromItemProps}
        name={name}
        label={label}
        rules={[{
          required,
          message: emptyMsg || '请填写身份证号码',
        },
        {
          pattern: this.getIdCard(idCardType),
          message: errMsg || '身份证号码格式不正确'
        }]}
      >
        <Input onChange={this.onChange} />
      </Form.Item>
    );
  }
}

export default IdCardForm;
