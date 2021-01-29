# IdCardInput

根据输入的身份证号获取对应的个人信息

### 主要做了以下工作

- 可以设定默认初始值
- 可以根据返回的身份信息设置做对应的处理

### 你可以

- 设置默认需要获取信息的身份证

## 默认

```tsx
import React from 'react';
import { IdCardInput } from 'fb-project-component';

export default () => {
  return <IdCardInput onSuccess={values => console.log(values)} />;
};
```

## 初始化

```tsx
import React from 'react';
import { IdCardInput } from 'fb-project-component';

export default () => {
  return <IdCardInput onSuccess={values => {}} value="420115199305126210" />;
};
```

## 动态改变身份证获取具体信息

试试在身份证一栏输入正确的身份证信息

```tsx
import React from 'react';
import { IdCardInput } from 'fb-project-component';
import { Button } from 'antd';
import IdCard from 'idcard';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCard: '',
      info: {
        province: {},
        city: {},
        area: {},
      },
    };
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              idCard: IdCard.generateIdcard(),
            });
          }}
          style={{ marginBottom: 10 }}
        >
          随机生成身份证
        </Button>
        <IdCardInput
          value={this.state.idCard}
          onSuccess={info => this.setState({ info })}
        />
        <div style={{ marginTop: 10 }}>
          <div>
            <label>性别: </label>
            <span>
              {info.gender ? (info.gender === 'M' ? '男' : '女') : ''}
            </span>
          </div>
          <div>
            <label>年龄: </label>
            <span>{info.age}</span>
          </div>
          <div>
            <label>生日: </label>
            <span>{info.birthday}</span>
          </div>
          <div>
            <label>省: </label>
            <span>{`${info.province.text || ''}  ${info.province.code ||
              ''}`}</span>
          </div>
          <div>
            <label>市: </label>
            <span>{`${info.city.text || ''}  ${info.city.code || ''}`}</span>
          </div>
          <div>
            <label>区: </label>
            <span>{`${info.area.text || ''}  ${info.area.code || ''}`}</span>
          </div>
          <div>
            <label>地址: </label>
            <span>{info.address}</span>
          </div>
        </div>
      </div>
    );
  }
}
```

## Form 表单用法

根据获取的信息自动填充 form 表单

试试在身份证一栏输入正确的身份证信息

```tsx
import React from 'react';
import { IdCardInput } from 'fb-project-component';
import { Form, Button, Col, Radio, Input, DatePicker } from 'antd';
import moment from 'moment';
import IdCard from 'idcard';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  render() {
    const tailLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 22 },
    };
    return (
      <Form
        layout="inline"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        ref={this.formRef}
        initialValues={{ idCard: '420115199305126210' }}
        onFinish={value => {
          console.log('表单结果：', value);
        }}
      >
        <Col span={24} offset={2} style={{ marginBottom: 20 }}>
          <Form.Item name="" label="">
            <Button
              type="primary"
              onClick={() => {
                this.formRef.current.setFieldsValue({
                  idCard: IdCard.generateIdcard(),
                });
              }}
            >
              随机生成身份证
            </Button>
          </Form.Item>
        </Col>
        <Col span={12} style={{ marginBottom: 20 }}>
          <Form.Item name="idCard" label="身份证" rules={[{ required: true }]}>
            <IdCardInput
              onSuccess={values =>
                this.setState(
                  {
                    values,
                  },
                  () => {
                    this.formRef.current.setFieldsValue({
                      sex: values.gender
                        ? values.gender === 'M'
                          ? '1'
                          : '0'
                        : '',
                      address: values.address || '',
                      age: values.age || '',
                      birthday: values.birthday
                        ? moment(`${values.birthday}`)
                        : '',
                    });
                  },
                )
              }
            />
          </Form.Item>
        </Col>
        <Col span={12} style={{ marginBottom: 20 }}>
          <Form.Item name="sex" label="性别" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="1">男</Radio>
              <Radio value="0">女</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12} style={{ marginBottom: 20 }}>
          <Form.Item name="age" label="年龄" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} style={{ marginBottom: 20 }}>
          <Form.Item name="birthday" label="生日" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            {...tailLayout}
            name="address"
            label="地址"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Form.Item>
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    );
  }
}
```
