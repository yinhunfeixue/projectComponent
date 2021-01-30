# SearchForm

搜索表单为你处理了

- 元素对齐的处理方法
- 搜索，重置按钮及点击按钮时触发 onSubmit 事件

传入表单项，和提交时执行的方法即可

## 示例

### 基本用法

表单项<=3 个时，使用内联布局；>3 个时，默认一行排 3 项

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <>
      <h2>小于等于3项</h2>
      <SearchForm
        itemList={[
          {
            label: '参数1',
            content: <Input />,
            name: 'name',
          },
          {
            label: '参数2',
            content: <Input />,
            name: 'name2',
          },
          {
            label: '参数3',
            content: <Input />,
            name: 'name3',
          },
        ]}
        onSubmit={values => {
          Modal.confirm({
            content: JSON.stringify(values),
          });
        }}
      />
      <h2>大于3项，一行3列，并自动处理对齐</h2>
      <SearchForm
        itemList={[
          {
            label: '参数1',
            content: <Input />,
            name: 'name',
          },
          {
            label: '参数2',
            content: <Input />,
            name: 'name2',
          },
          {
            label: '参数3',
            content: <Input />,
            name: 'name3',
          },
          {
            label: '参数4',
            content: <Input />,
            name: 'name4',
          },
        ]}
        onSubmit={values => {
          Modal.confirm({
            content: JSON.stringify(values),
          });
        }}
      />
    </>
  );
};
```

## 表单项联动

第一个输入框输入数字时，参数 2 的值 = 参数 1 的值 + 10

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default class Demo extends React.Component {
  render() {
    return (
      <SearchForm
        itemList={[
          {
            label: '参数1',
            content: (
              <Input
                onChange={event => {
                  if (this.form) {
                    const value = Number(event.target.value);
                    this.form.setFieldsValue({
                      name2: value ? value * 10 : '',
                    });
                  }
                }}
              />
            ),
            name: 'name',
          },
          {
            label: '参数2',
            content: <Input />,
            name: 'name2',
          },
        ]}
        getFormInstance={form => {
          this.form = form;
        }}
        onSubmit={values => {
          Modal.confirm({
            content: JSON.stringify(values),
          });
        }}
      />
    );
  }
}
```

## 显式设置列数

设置为一行 2 列

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <SearchForm
      columnNumber={2}
      itemList={[
        {
          label: '参数 1',
          content: <Input />,
          name: 'name',
        },
        {
          label: '参数 2',
          content: <Input />,
          name: 'name2',
        },
        {
          label: '参数 3',
          content: <Input />,
          name: 'name3',
        },
        {
          label: '参数 4',
          content: <Input />,
          name: 'name4',
        },
      ]}
      onSubmit={values => {
        Modal.confirm({
          content: JSON.stringify(values),
        });
      }}
    />
  );
};
```

## 设置表单项小于等于 5 时(默认为 3），使用内联

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <SearchForm
      inlineMaxNumber={4}
      itemList={[
        {
          label: '参数1',
          content: <Input />,
          name: 'name',
        },
        {
          label: '参数2',
          content: <Input />,
          name: 'name2',
        },
        {
          label: '参数3',
          content: <Input />,
          name: 'name3',
        },
        {
          label: '参数4',
          content: <Input />,
          name: 'name4',
        },
      ]}
      onSubmit={values => {
        Modal.confirm({
          content: JSON.stringify(values),
        });
      }}
    />
  );
};
```

## 自定义搜索、重置元素的外观

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <SearchForm
      renderSearchElement={() => {
        return <a>我是自定义的搜索</a>;
      }}
      renderResetElement={() => {
        return <a>我是自定义的重置</a>;
      }}
      itemList={[
        {
          label: '参数1',
          content: <Input />,
          name: 'name',
        },
        {
          label: '参数2',
          content: <Input />,
          name: 'name2',
        },
      ]}
      onSubmit={values => {
        Modal.confirm({
          content: JSON.stringify(values),
        });
      }}
    />
  );
};
```

## 设置初始值

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <SearchForm
      renderSearchElement={() => {
        return <a>我是自定义的搜索</a>;
      }}
      renderResetElement={() => {
        return <a>我是自定义的重置</a>;
      }}
      initialValues={{
        name: '小王',
      }}
      itemList={[
        {
          label: '参数1',
          content: <Input />,
          name: 'name',
        },
        {
          label: '参数2',
          content: <Input />,
          name: 'name2',
        },
      ]}
      onSubmit={values => {
        Modal.confirm({
          content: JSON.stringify(values),
        });
      }}
    />
  );
};
```

## 禁用

```tsx
import React from 'react';
import { SearchForm } from 'fb-project-component';
import { Input, Modal } from 'antd';

export default () => {
  return (
    <SearchForm
      disabled
      itemList={[
        {
          label: '参数1',
          content: <Input />,
          name: 'name',
        },
        {
          label: '参数2',
          content: <Input />,
          name: 'name2',
        },
      ]}
      onSubmit={values => {
        Modal.confirm({
          content: JSON.stringify(values),
        });
      }}
    />
  );
};
```
