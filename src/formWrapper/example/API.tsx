import { Table } from 'antd';
import React, { Component, ReactNode } from 'react';
interface IPropsUseSate {}
interface IPageProps {}
class PropsUse extends Component<IPageProps, IPropsUseSate> {
  public render(): ReactNode {
    const dataSource = [
      { id: '1', name: 'content', introduce: '每一项FormItem的数据', type: 'Array[]', value: '[]' },
      { id: '2', name: 'baseInfo', introduce: '表单回填的数据', type: 'Object', value: '{}' },
      { id: '3', name: 'form', introduce: '传入FormItem中的form', type: 'Object', value: '' },
      {
        id: '4',
        name: 'renderFormItem',
        introduce: '自定义渲染formItem的函数',
        type: '() => ReactNode',
        value: '',
      },
    ];
    const columns = [
      { title: '参数', key: 'name', dataIndex: 'name' },
      { title: '说明', key: 'introduce', dataIndex: 'introduce' },
      { title: '类型', key: 'type', dataIndex: 'type' },
      { title: '默认值', key: 'value', dataIndex: 'value' },
    ];
    const contentData = [
      { id: '1', name: 'key', introduce: 'FormItem双向绑定的key值', type: 'string', value: '' },
      { id: '2', name: 'type', introduce: 'FormItem对应的andt组件类型', type: 'string', value: '' },
      { id: '3', name: 'label', introduce: 'FormItem的label值', type: 'string', value: '' },
      { id: '4', name: 'colProps', introduce: 'antd中Col组件的props', type: 'object', value: '' },
      {
        id: '5',
        name: 'formItemProps',
        introduce: 'antd中FormItem组件的props',
        type: 'object',
        value: '',
      },
      {
        id: '6',
        name: 'elementProps',
        introduce: 'FormItem里面组件的props',
        type: 'object',
        value: '',
      },
      { id: '7', name: 'rules', introduce: 'FormItem的校验规则', type: 'Array', value: '' },
      {
        id: '8',
        name: 'option',
        introduce: '当type为select、checkBox、radio、cascader时，组件的数据。',
        type: 'Array',
        value: '',
      },
      {
        id: '9',
        name: 'text',
        introduce: '当type为inputAndText时，input框后面的文本',
        type: 'string',
        value: '',
      },
      {
        id: '10',
        name: 'renderItem',
        introduce: '当type为renderItem是，传入渲染一项formItem自定义函数',
        type: '() => ReactNode',
        value: '',
      },
    ];
    return (
      <div>
        <h1>API</h1>
        <p
          style={{
            backgroundColor: 'rgb(242, 244, 245)',
            height: 40,
            paddingTop: 8,
          }}
        >
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>FormWrapper
              </span>{' '}
              <span style={{ color: '#000' }}>content</span>
              <span className="token script language-javascript">
                <span className="token punctuation">=</span>
                {'{content}'}
              </span>{' '}
              <span style={{ color: '#000' }}>baseInfo</span>
              <span className="token script language-javascript">
                <span className="token punctuation">=</span>
                {'{baseInfo}'}
              </span>{' '}
              <span style={{ color: '#000' }}>form</span>
              <span className="token script language-javascript">
                <span className="token punctuation">=</span>
                {'{this.props.form}'}
              </span>{' '}
              <span className="token punctuation">/&gt;</span>
            </span>
          </code>
        </p>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
        <h2>content数组中每一项数据的API</h2>
        <p style={{ marginLeft: 20 }}>
          目前支持type类型有：select、input、inputNumber、datePicker、cascader、textArea、checkBox、radio，对应antd相同的组件。
        </p>
        <p style={{ marginLeft: 20 }}>
          特殊类型有：inputAndText(input框后面加文字文本)、renderItem(自定义渲染item，需要传renderItem函数，返回ReactNode)
        </p>
        <Table dataSource={contentData} columns={columns} rowKey="id" />
        <p></p>
      </div>
    );
  }
}

export default PropsUse;
