# EditModal

EditModal 是 EditForm 结合弹窗使用的封装。

EditModal 为你处理了

- 窗口标题
- 窗口显示隐藏的控制

## 示例

### 默认

表单的详细使用方法请参考`EditForm`

```tsx
import React from 'react';
import { EditModal } from 'fb-project-component';
import { Input, InputNumber, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      source: null,
      updateFunction: null,
    };
  }

  addFunction(value) {
    return fetch('./add');
  }

  updateFunction(value) {
    return fetch('./update');
  }

  render() {
    const { visible, source, updateFunction } = this.state;
    return (
      <div>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            this.setState({
              visible: true,
              source: null,
              updateFunction: null,
            });
          }}
        >
          新增
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            this.setState({
              visible: true,
              source: { id: 1, nickName: 'aa' },
              updateFunction: this.updateFunction,
            });
          }}
        >
          编辑
        </Button>
        <Button
          onClick={() => {
            null;
            this.setState({
              visible: true,
              source: { id: 1, nickName: 'aa' },
              updateFunction: null,
            });
          }}
        >
          查看
        </Button>
        <EditModal
          editFormProps={{
            source,
            addFunction: this.addFunction,
            updateFunction,
            formItemList: [
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
            ],
            onCancel: () => {
              message.info('取消');
            },
            onError: () => {
              message.error('保存出错');
            },
            onOk: () => {
              message.success('保存成功');
            },
          }}
          visible={visible}
          close={() => this.setState({ visible: false })}
        />
      </div>
    );
  }
}
```

## 属性

<API src='../../src/editModal/EditModal.tsx' />
