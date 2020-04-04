import { Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import { CascaderProps } from 'antd/lib/cascader';
import { ColProps } from 'antd/lib/col';
import { FormComponentProps, FormItemProps, FormProps, ValidationRule } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input';
import moment from 'moment';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';

const { Option } = Select;
// const {RangePicker} = DatePicker
const RadioGroup = Radio.Group;
interface elementProps extends IComponentProps {
  /**
   *  是否禁用
   */
  disabled?: boolean;
  /**
   *  文本框的提示文本
   */
  placeholder?: string;
  /**
   *  组件值改变的函数
   */
  onChange?: () => void;
}
interface contentItem {
  /**
   *  FormItem双向绑定的key值
   */
  key: string;
  /**
   *  FormItem对应的andt组件类型
   */
  type: string;
  /**
   *  FormItem的label值
   */
  label?: string;
  /**
   *  antd中Col组件的props
   */
  colProps?: ColProps;
  /**
   *  antd中FormItem组件的props
   */
  formItemProps?: FormItemProps;
  /**
   *  FormItem中的组件元素的props
   */
  elementProps?: elementProps;
  /**
   *  FormItem的校验规则
   */
  rules?: ValidationRule[];
  /**
   *  select、checkBox、radio、cascader中的数据。
   */
  option?: Array<any>;
  /**
   *  input框后面加上的提示文字
   */
  text?: string;
  /**
   *  自定义函数渲染一项formItem
   */
  renderItem?: () => ReactNode;
}
// interface baseInfo {}
interface IFormWrapperProps {
  /**
   * 每一项FormItem的数据
   */
  content?: Array<contentItem>;
  /**
   * 传入FormItem中的form
   */
  form: FormProps;
  /**
   * 表单回填的数据
   */
  baseInfo?: any;
  /**
   * 自定义渲染formItem的函数
   */
  renderFormItem?: () => ReactNode;
}

interface IFormWrapperState {
  // type: string;
}

/**
 * FormItem的渲染
 */
export default class FormWrapper extends Component<
  IFormWrapperProps & FormComponentProps,
  IFormWrapperState
> {
  public static defaultProps = {
    content: [],
    baseInfo: {},
  };
  // constructor(props: IFormWrapperProps) {
  //   super(props);
  //   this.state = {};
  // }
  defaultRenderFormItem = (item: contentItem): ReactNode => {
    const {
      form: { getFieldDecorator },
      baseInfo,
    } = this.props;
    switch (item.type) {
      case 'renderItem':
        return item.renderItem ? item.renderItem() : <span></span>;
      case 'cascader':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(
                <Cascader {...(item.elementProps as CascaderProps)} options={item.option || []} />,
              )}
            </Form.Item>
          </Col>
        );
      case 'select':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(
                <Select {...item.elementProps}>
                  {item.option &&
                    item.option.map(_v => {
                      return (
                        <Option key={_v.code} value={_v.code}>
                          {_v.desp}
                        </Option>
                      );
                    })}
                </Select>,
              )}
            </Form.Item>
          </Col>
        );
      case 'datePicker':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key, {
                initialValue: baseInfo[item.key] ? moment(baseInfo[item.key]) : '',
                rules: item.rules || [],
              })(<DatePicker {...item.elementProps} />)}
            </Form.Item>
          </Col>
        );
      // case 'rangePicker':
      //   return (
      //     <Col {...item.colProps}>
      //       <Form.Item {...item.formItemProps} label={item.label || ''}>
      //         {getFieldDecorator(item.key, {
      //           initialValue: baseInfo[item.key] ? moment(baseInfo[item.key]) : '',
      //           rules: item.rules || [],
      //         })(<RangePicker {...item.elementProps} />)}
      //       </Form.Item>
      //     </Col>
      //   );
      case 'textArea':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key as string, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(<Input.TextArea {...(item.elementProps as TextAreaProps)} />)}
            </Form.Item>
          </Col>
        );
      case 'inputNumber':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key as string, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(<InputNumber {...item.elementProps} />)}
            </Form.Item>
          </Col>
        );
      case 'checkBox':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key, {
                initialValue:
                  baseInfo[item.key] && Array.isArray(baseInfo[item.key])
                    ? baseInfo[item.key]
                    : baseInfo[item.key]
                    ? baseInfo[item.key].split(',')
                    : [],
                rules: item.rules || [],
              })(
                <Checkbox.Group {...item.elementProps}>
                  {item.option &&
                    item.option.map(_v => {
                      return <Checkbox value={_v.code}>{_v.desp || ''}</Checkbox>;
                    })}
                </Checkbox.Group>,
              )}
            </Form.Item>
          </Col>
        );
      case 'radio':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key as string, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(
                <RadioGroup {...item.elementProps}>
                  {item.option &&
                    item.option.map(_v => {
                      return <Radio value={_v.code}>{_v.desp || ''}</Radio>;
                    })}
                </RadioGroup>,
              )}
            </Form.Item>
          </Col>
        );
      case 'inputAndText':
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(<Input {...item.elementProps} />)}
              <span>&nbsp;&nbsp;{item.text}</span>
            </Form.Item>
          </Col>
        );
      default:
        return (
          <Col {...item.colProps}>
            <Form.Item {...item.formItemProps} label={item.label || ''}>
              {getFieldDecorator(item.key as string, {
                initialValue: baseInfo[item.key] || '',
                rules: item.rules || [],
              })(<Input {...item.elementProps} />)}
            </Form.Item>
          </Col>
        );
    }
  };
  render(): ReactNode {
    const { content, renderFormItem } = this.props;
    return (
      <div style={{ overflow: 'hidden' }}>
        {renderFormItem
          ? renderFormItem()
          : content && content.map(item => this.defaultRenderFormItem(item))}
      </div>
    );
  }
}
