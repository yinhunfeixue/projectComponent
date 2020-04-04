import { Button, Col, Form, Input } from 'antd';
import { FormComponentProps, FormProps } from 'antd/lib/form';
import React, { Component, ReactNode } from 'react';
import FormWrapper from '../FormWrapper';

interface IBaseUseSate {
  baseInfo: any;
}
interface IBaseProps {
  form: FormProps;
}
class BaseUse extends Component<IBaseProps & FormComponentProps, IBaseUseSate> {
  // constructor(props: FormProps) {
  //   super()
  //   this.state = {
  //     baseInfo: {}
  //   }
  // }
  state = {
    baseInfo: {
      address: '武汉花山',
      name: '刘德华',
      birthDate: '1993-03-24',
      sex: '1',
      cascader: ['-1', '2'],
      money: '1000',
      remark: '很帅很有钱！',
    },
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values', values);
      }
    });
  };
  renderItem = () => {
    let {
      form: { getFieldDecorator },
    } = this.props;
    const { baseInfo } = this.state;
    const formlaut = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <Col span={24}>
        <Form.Item {...formlaut} label="传入的自定义组件">
          {getFieldDecorator('address', {
            initialValue: baseInfo.address || '',
            rules: [
              {
                required: true,
                message: '必填项',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Col>
    );
  };
  public render(): ReactNode {
    const formlaut = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const formlaut1 = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const department = [
      {
        name: '公司',
        id: '-1',
        children: [
          { name: '总裁办', id: '1' },
          { name: '技术部', id: '2' },
          { name: '人力资源部', id: '3' },
        ],
      },
    ];
    const content = [
      {
        key: 'name',
        label: '姓名',
        type: 'input',
        colProps: { span: 24 },
        formItemProps: { ...formlaut },
        rules: [{ required: true, message: '姓名为必填项' }],
        elementProps: { style: { width: 300 }, placeholder: '请输入姓名' },
      },
      {
        key: 'birthDate',
        label: '出生日期',
        type: 'datePicker',
        colProps: { span: 10, offset: 2 },
        formItemProps: { ...formlaut1 },
        rules: [{ required: false }],
      },
      {
        key: 'sex',
        label: '性别',
        type: 'select',
        colProps: { span: 10, offset: 2 },
        formItemProps: { ...formlaut1 },
        rules: [{ required: true, message: '性别为必填项' }],
        option: [
          { code: '1', desp: '男' },
          { code: '0', desp: '女' },
        ],
      },
      {
        key: 'cascader',
        type: 'cascader',
        label: '部门',
        option: department,
        colProps: { span: 24 },
        formItemProps: { ...formlaut },
        elementProps: {
          fieldNames: { label: 'name', value: 'id', children: 'children' },
        },
      },
      {
        key: 'money',
        type: 'inputAndText',
        label: '资产',
        colProps: { span: 12 },
        formItemProps: { ...formlaut1 },
        text: '万元',
        elementProps: {
          style: { width: 'calc(100% - 80px)' },
        },
      },
      {
        key: 'renderItem',
        type: 'renderItem',
        renderItem: this.renderItem,
      },
      {
        key: 'remark',
        type: 'textArea',
        label: '简介',
        colProps: { span: 24 },
        formItemProps: { ...formlaut },
        elementProps: {
          rows: 2,
          disabled: true,
        },
      },
    ];
    return (
      <Form onSubmit={this.onSubmit}>
        <FormWrapper content={content} baseInfo={this.state.baseInfo} form={this.props.form} />
        <Button type="primary" htmlType="submit" style={{ margin: '20px auto', display: 'block' }}>
          保存
        </Button>
      </Form>
    );
  }
}

export default Form.create()(BaseUse);
