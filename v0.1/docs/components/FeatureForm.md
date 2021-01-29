## FeatureForm

## 三类特性表单组件

### 主要做了以下工作

- 身份证表单组件封装，可配置大陆，港澳，台湾身份证，校验通过返回个人信息
- 电话号码组件封装，可配置手机号码和固定电话
- 邮箱表单组件封装
- 组件内部带有完整的校验机制，可配置样式，标题和校验提示信息

### 你可以

- 当作完整的特性表单组件来使用

### 后期

- 会根据实际场景扩展特性表单组件的功能

```tsx
import React from 'react';
import {
  IdCardFormItem,
  EmailFormItem,
  PhoneFormItem,
} from 'fb-project-component';
import { Form, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
  }

  onFinish(value) {
    console.log('value=', value);
  }

  onSuccess(value) {
    if (value) {
      this.setState({
        info: JSON.stringify(value),
      });
    }
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <Form layout="inline" onFinish={value => this.onFinish(value)}>
          <IdCardFormItem
            name="idCard"
            label="身份证"
            onSuccess={value => this.onSuccess(value)}
          />
          <PhoneFormItem name="phone" label="电话" />
          <EmailFormItem name="email" label="邮箱" />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
        <div>{info}</div>
      </div>
    );
  }
}
```

## 身份证表单组件属性

<API src='../../src/forms/IdCardFormItem.tsx'/>

## 电话号码表单组件属性

<API src='../../src/forms/PhoneFormItem.tsx' />

## 邮箱表单组件属性

<API src='../../src/forms/EmailFormItem.tsx' />
