# LimitUpload

可设置最大上传文件数量的组件，通常，在 **上传头像** 时，这个组件很有用。

### 主要做了以下工作

- 可自定义最大允许上传的文件数量
- 上传错误的处理
- 根据 type 自动设置 accept
- 根据 type 自动设置显示元素

### 你可以

- 自定义显示元素
- 自定义最大允许上传的数量
- 自定义错误处理方式
- 设置 type
- 设置 accept
- 设置已存在的文件
- 给 antd 的 Upload 透传 props

## 示例

### 默认，请观察开发者工具的输出，当文件"上传成功、移除"时，会触发 onChange

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        console.log('validateFile', file);
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
      onChange={fileList => {
        console.log('fileList', fileList);
      }}
    />
  );
};
```

### 上传异常时

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      action="./"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 自定义上传异常的提示方法

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      action="./"
      onError={file => {
        alert(`${file.name}上传失败`);
      }}
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 禁用

```tsx
import React from 'react';
import { LimitUpload, UploadType } from 'fb-project-component';

export default () => {
  return (
    <>
      {' '}
      <LimitUpload
        disabled
        action="./"
        validateFile={file => {
          if (file.response && file.response.success) {
            return true;
          } else {
            return false;
          }
        }}
      />
      <hr />
      <LimitUpload disabled type={UploadType.IMAGE} action="./" />
    </>
  );
};
```

### 限制上传数量为 2 个，上传 2 个文件后，上传按钮会消失

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      maxNumber={2}
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 图片上传

```tsx
import React from 'react';
import { LimitUpload, UploadType } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      type={UploadType.IMAGE}
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### office 文档上传，只能选择 office 文档

```tsx
import React from 'react';
import { LimitUpload, UploadAcceptType } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      accept={UploadAcceptType.OFFICE}
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 设置已上传文件

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      defaultFileList={[
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: {
            status: 'done',
          }, // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          response: {
            status: 'done',
          },
          url: 'http://www.baidu.com/yyy.png',
        },
      ]}
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 自定义渲染方法

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      action="https://jsonplaceholder.typicode.com/posts/"
      renderChooser={loading => {
        return (
          <span style={{ borderLeft: '3px solid red', paddingLeft: 10 }}>
            {loading ? '上传中...' : '点我上传'}
          </span>
        );
      }}
      validateFile={file => {
        console.log('file', file);
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 自定义传递给 upload 的属性

观察开发者工具，请求是 PUT

```tsx
import React from 'react';
import { LimitUpload } from 'fb-project-component';

export default () => {
  return (
    <LimitUpload
      uploadProps={{
        method: 'put',
      }}
      action="https://jsonplaceholder.typicode.com/posts/"
      validateFile={file => {
        if (file.response && file.response.id) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};
```

### 结合表单

```tsx
import React from 'react';
import { LimitUpload, UploadType } from 'fb-project-component';
import { Form, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
    };
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.formRef.current.setFieldsValue({
      myFile: [
        {
          uid: '1',
          name: 'aaa.png',
          status: 'done',
          response: { id: 2 },
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <Form ref={this.formRef} layout="inline">
          <Form.Item label="文件" name="myFile">
            <LimitUpload
              type={UploadType.IMAGE}
              action="https://jsonplaceholder.typicode.com/posts/"
              validateFile={file => {
                console.log('file', file);
                if (
                  file.response &&
                  file.status === 'done' &&
                  file.response.id
                ) {
                  return true;
                } else {
                  return false;
                }
              }}
            />
          </Form.Item>
        </Form>
        <Button
          onClick={() => {
            this.formRef.current.setFieldsValue({
              myFile: [
                {
                  uid: '1',
                  name: 'bb.png',
                  status: 'done',
                  response: { id: 1 },
                  url:
                    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  thumbUrl:
                    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
              ],
            });
          }}
        >
          修改表单值
        </Button>
        <Button
          onClick={() => {
            this.formRef.current.setFieldsValue({});
            this.formRef.current.resetFields();
          }}
        >
          重置表单值
        </Button>
      </div>
    );
  }
}
```
