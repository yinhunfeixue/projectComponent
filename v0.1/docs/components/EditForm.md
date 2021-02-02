# EditForm

编辑表单，通过配置表单项、新增、修改、获取详情的方法，即可得到一个编辑表单。

编辑表单具有 3 种状态

- 新增--source 属性为空
- 编辑--source 属性不为空，updateFunction 不为空
- 阅读--source 属性不为空，updateFunction 为空

编辑表单为你处理了

- 根据不同状态显示或隐藏`保存、取消`按钮
- 请求时，显示保存按钮动画，禁用取消
- 阅读状态下，给表单元素加上 disbled 属性
- 借助 FormUtil 进行了元素对齐

## 示例

### 新增

`source`为空时，为新增状态

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, InputNumber, Modal } from 'antd';

export default () => {
  return (
    <EditForm
      formItemList={[
        {
          name: 'nickName',
          label: '姓名',
          content: <Input />,
          rules: [
            {
              required: true,
              message: '请填写姓名',
            },
          ],
        },
        {
          name: 'age',
          label: '年龄',
          content: <InputNumber />,
        },
      ]}
      addFunction={value => {
        Modal.confirm({
          title: '新增',
          content: JSON.stringify(value),
        });
        return fetch('./add');
      }}
    />
  );
};
```

### 编辑

`source`、`updateFunction` 不为空时，编辑状态

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <EditForm
      formItemList={[
        {
          name: 'nickName',
          label: '姓名',
          content: <Input />,
          rules: [
            {
              required: true,
              message: '请填写姓名',
            },
          ],
        },
      ]}
      source={{
        id: 1,
        nickName: 'aa',
      }}
      updateFunction={(value, source) => {
        Modal.confirm({
          title: '编辑',
          content: `新数据：${JSON.stringify(value)}。 原数据：${JSON.stringify(
            source,
          )}`,
        });
        return fetch('./');
      }}
    />
  );
};
```

### 阅读

`source`不为空，`updateFunction` 为空，阅读状态。

阅读状态下，会自动给组件加上 disabled=true，请确认表单组件支持 disabled 属性，或组件本身已不可编辑

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input } from 'antd';

export default () => {
  return (
    <EditForm
      formItemList={[
        {
          name: 'nickName',
          label: '姓名',
          content: <Input />,
          rules: [
            {
              required: true,
              message: '请填写姓名',
            },
          ],
        },
      ]}
      source={{
        id: 1,
        nickName: 'aa',
      }}
    />
  );
};
```

### 从后端获取完整数据

使用`getDetailFunction`获取完整数据

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, InputNumber } from 'antd';

export default () => {
  return (
    <EditForm
      formItemList={[
        {
          name: 'nickName',
          label: '姓名',
          content: <Input />,
          rules: [
            {
              required: true,
              message: '请填写姓名',
            },
          ],
        },
        {
          label: '年龄',
          name: 'age',
          content: <InputNumber />,
        },
        {
          label: '手机号',
          name: 'phone',
          content: <Input />,
        },
      ]}
      getDetailFunction={() => {
        return {
          id: 1,
          nickName: 'aa',
          age: 5,
          phone: '18611111111',
        };
      }}
      source={{
        id: 1,
        nickName: 'aa',
      }}
    />
  );
};
```

### 一行设置多列

`columnsCount={2}`

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, InputNumber } from 'antd';

export default () => {
  return (
    <EditForm
      columnsCount={2}
      formItemList={[
        {
          name: 'nickName',
          label: '姓名',
          content: <Input />,
          rules: [
            {
              required: true,
              message: '请填写姓名',
            },
          ],
        },
        {
          name: 'age',
          label: '年龄',
          content: <InputNumber />,
        },
      ]}
      addFunction={value => {
        Modal.confirm({
          title: '新增',
          content: JSON.stringify(value),
        });
        return fetch('./');
      }}
    />
  );
};
```

### 结合弹窗

设置了一个源数据，对于源数据，使用弹窗的方式进行新增、修改、查看。

- 新增时，表单组件无默认数据
- 编辑时，表单组件有默认数据

此示例展示了 EditForm 如何结合弹窗使用，组件库提供了一个现成的组件`EditModal`。
如需更复杂的弹窗功能，建议在项目中自定义一个类似 EditModal 的组件，在项目各模块使用。

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, InputNumber, Button, Modal } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formItemList = [
      {
        name: 'nickName',
        label: '姓名',
        content: <Input />,
        rules: [
          {
            required: true,
            message: '请填写姓名',
          },
        ],
      },
      {
        name: 'age',
        label: '年龄',
        content: <InputNumber />,
      },
    ];
    this.state = {
      visibleModal: false,
      source: {
        id: 1,
        nickName: 'aaaa',
        age: 45,
      },
      editSource: null,
      addFunction: null,
      updateFunction: null,
    };
  }

  addFunction(value) {
    Modal.confirm({
      title: '新增',
      content: JSON.stringify(value),
    });
    return fetch('./add');
  }

  updateFunction(value) {
    Modal.confirm({
      title: '新增',
      content: JSON.stringify(value),
    });
    return fetch('./update');
  }

  closeEdit() {
    this.setState({ visibleModal: false });
  }

  render() {
    const {
      visibleModal,
      editSource,
      updateFunction,
      addFunction,
      source,
    } = this.state;
    return (
      <div>
        <div>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => {
              this.setState({
                visibleModal: true,
                addFunction: this.addFunction,
                updateFunction: this.updateFunction,
                editSource: null,
              });
            }}
          >
            新增
          </Button>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => {
              this.setState({
                visibleModal: true,
                addFunction: this.addFunction,
                updateFunction: this.updateFunction,
                editSource: source,
              });
            }}
          >
            编辑
          </Button>
          <Button
            onClick={() => {
              this.setState({
                visibleModal: true,
                addFunction: this.addFunction,
                updateFunction: null,
                editSource: source,
              });
            }}
          >
            查看
          </Button>
        </div>
        <Modal
          visible={visibleModal}
          footer={null}
          title={editSource ? editSource.nickName : '新增'}
          onCancel={this.closeEdit.bind(this)}
          destroyOnClose
        >
          <EditForm
            onCancel={this.closeEdit.bind(this)}
            formItemList={this.formItemList}
            addFunction={addFunction}
            updateFunction={updateFunction}
            source={editSource}
            onOk={() => {
              this.closeEdit();
            }}
          />
        </Modal>
      </div>
    );
  }
}
```

### 处理保存成功、失败

`onOk`--保存成功
`onError`--保存失败

打开窗口，点击保存，会随机进入成功或失败

```tsx
import React from 'react';
import { EditForm } from 'fb-project-component';
import { Input, InputNumber, Button, Modal } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formItemList = [
      {
        name: 'nickName',
        label: '姓名',
        content: <Input />,
        rules: [
          {
            required: true,
            message: '请填写姓名',
          },
        ],
      },
      {
        name: 'age',
        label: '年龄',
        content: <InputNumber />,
      },
    ];
    this.state = {
      visibleModal: false,
      source: {
        id: 1,
        nickName: 'aaaa',
        age: 45,
      },
      editSource: null,
      addFunction: null,
      updateFunction: null,
    };
  }

  addFunction(value) {
    Modal.confirm({
      title: '新增',
      content: JSON.stringify(value),
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('./add');

        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject('这里是服务器返回的错误原因');
        }
      }, 1000);
    });
  }

  closeEdit() {
    this.setState({ visibleModal: false });
  }

  render() {
    const { visibleModal, addFunction } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              visibleModal: true,
              addFunction: this.addFunction,
            });
          }}
        >
          新增
        </Button>
        <Modal
          visible={visibleModal}
          footer={null}
          title="新增"
          onCancel={this.closeEdit.bind(this)}
          destroyOnClose
        >
          <EditForm
            onCancel={this.closeEdit.bind(this)}
            onOk={() => {
              message.success('保存成功');
              this.closeEdit();
            }}
            onError={error => {
              message.error('保存失败：' + error);
            }}
            formItemList={this.formItemList}
            addFunction={addFunction}
          />
        </Modal>
      </div>
    );
  }
}
```

<API src='../../src/editForm/EditForm.tsx' />
