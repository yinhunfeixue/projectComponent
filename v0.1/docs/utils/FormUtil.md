# FormUtil

表单的辅助工具

## 示例

### 渲染表单

目标是解决表单对齐，间距的问题。
规则如下：

- 默认一行 2 列，标签和内容的宽度为：1:4
- 标签文字大于 6 个字，独占一行
- 可手动修改：默认的列数、标签宽度
- 可单独设置每一个表单项宽度、表单项标签的宽度

### 一个标准示例

```tsx
import React from 'react';
import { Input, Form, Button, Checkbox } from 'antd';
import { FormUtil } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        span: 24,
        content: (
          <img
            style={{
              height: 160,
              width: 120,
              border: '1px solid gray',
              display: 'inline-block',
            }}
            alt="头像"
          />
        ),
      },
      {
        label: '姓名',
        name: 'name',
        content: <Input />,
        rules: [
          {
            required: true,
          },
        ],
      },
      {
        label: '启用',
        name: 'enable',
        valuePropName: 'checked',
        content: <Checkbox />,
      },
      {
        label: '性别',
        name: 'sex',
        content: <Input />,
      },
      {
        label: '公司地址',
        name: 'companyAddress',
        content: <Input />,
      },
      {
        label: '身份证号码',
        name: 'idCard',
        content: <Input />,
      },
      {
        label: '个人签名',
        span: 24,
        name: 'sign',
        content: <Input />,
      },
      {
        label: '紧急联系人',
        span: 8,
        name: 'friend',
        content: <Input />,
      },
      {
        label: '座机',
        span: 8,
        name: 'phone',
        content: <Input />,
      },
      {
        label: '座机',
        span: 6,
        name: 'phone2',
        content: <Input />,
      },
      {
        label: '座机',
        span: 6,
        content: <Input />,
      },
      {
        span: 24,
        content: (
          <Button type="primary" htmlType="submit">
            保存，我是自动对齐
          </Button>
        ),
      },
    ];
    return (
      <div>
        <Form
          layout="Horizontal"
          onFinish={value => {
            console.log(value);
          }}
        >
          {FormUtil.renderFormItems(list)}
        </Form>
      </div>
    );
  }
}
```

### 使用特殊的 formItem

本示例，使用`<PhoneFormItem />` 做为 content 值，此时需设置`contentIsFormItem:true`

```tsx
import React from 'react';
import { Button, Form } from 'antd';
import { FormUtil, PhoneFormItem } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        label: '手机号',
        span: 8,
        contentIsFormItem: true,
        content: <PhoneFormItem required name="mobilePhone" />,
      },
      {
        span: 24,
        content: (
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        ),
      },
    ];
    return (
      <div>
        <Form
          layout="Horizontal"
          onFinish={value => {
            console.log(value);
          }}
        >
          {FormUtil.renderFormItems(list)}
        </Form>
      </div>
    );
  }
}
```

### 自定义表单项占位空间

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormUtil } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        content: (
          <img
            style={{
              height: 160,
              width: 120,
              border: '1px solid gray',
              display: 'inline-block',
            }}
            alt="头像"
          />
        ),
      },
      {
        label: '姓名',
        content: <Input />,
      },
      {
        label: '四个文字',
        content: <Input />,
      },
      {
        label: '这里六个文字',
        content: <Input />,
      },
      {
        label:
          '我是标签字数超过7，会自动独占一行，但可能需要手动调整labe占位，否则显示不全',
        labelSpan: 15,
        content: <Input value="我手动调整了标签占位" />,
      },
      {
        label: '我也很长',
        span: 12,
        content: <Input value="我也很长，但手动设置了只占半行" />,
      },
      {
        label: '标签',
        span: 24,
        content: <Input value="我标签文字不长，但手动设置了独占一行" />,
      },
      {
        content: <Button type="primary">保存，我是自动对齐</Button>,
      },
    ];
    return (
      <div>
        <Form layout="Horizontal">{FormUtil.renderFormItems(list)}</Form>
      </div>
    );
  }
}
```

### 渲染表单项--三列

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormUtil } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        label: '姓名',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input />,
      },
      {
        label: '年龄',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input />,
      },
      {
        content: <Button type="primary">保存，我是自动对齐</Button>,
      },
    ];
    return (
      <div>
        <Form layout="Horizontal">{FormUtil.renderFormItems(list, 3)}</Form>
      </div>
    );
  }
}
```

### 按钮单独占一行

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormUtil } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        label: '姓名',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input />,
      },
      {
        label: '年龄',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input />,
      },
      {
        span: 24,
        content: <Button type="primary">保存</Button>,
      },
    ];
    return (
      <div>
        <Form layout="Horizontal">{FormUtil.renderFormItems(list, 3)}</Form>
      </div>
    );
  }
}
```

### 增加每列的间隔

FormUtil.renderFormItems(list, 3, 6, **15**)
通过设置 renderFormItems 的第 4 个参数,使 labelSpan + wrapSpan < 24，达到增加每列间隔的目的

同时，也可以给表单项单独设置 wrawSpan

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormUtil } from 'fb-project-component';

export default class Demo extends React.Component {
  render() {
    const list = [
      {
        label: '姓名',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input />,
      },
      {
        label: '年龄',
        content: <Input />,
      },
      {
        label: '性别',
        content: <Input value="我单独设置了wrapSpan" />,
        wrapSpan: 10,
      },
      {
        content: <Button type="primary">保存</Button>,
      },
    ];
    return (
      <div>
        <Form layout="Horizontal">
          {FormUtil.renderFormItems(list, 3, 6, 15)}
        </Form>
      </div>
    );
  }
}
```

## 参考 IFormItemData

<API src="../../src/interfaces/Demo.ts">
