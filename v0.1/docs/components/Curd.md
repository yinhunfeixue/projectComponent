## Curd

这一个相当重型的组件，使用它可以快速搭建一个包含增、删、改、查的模块。

如果只需要一个表格，请使用 SearchTable

## Curd 结构

- 表格
- 表格搜索区
- 表头操作区
- 操作列

如下图，其中红色区域是自带元素

![Image text](./Curd.png)

其中，每一结构包含如下默认功能

- 表格
  - 数据显示
  * 分页
- 表格搜索区
  - 自带：搜索、重置，点击后刷新表格
- 表头操作区

  - 自带：新建
  - 可扩展其它操作元素
  - 可隐藏自带元素

- 操作列

  - 自带：删除、编辑、查看

  * 可扩展其它元素

  - 可隐藏自带元素

## 示例

### 基本用法

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';

export default () => {
  return (
    <Curd
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      getListFunction={(current, pageSize) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
    />
  );
};
```

### 禁用：快速翻页、pageSize

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';

export default () => {
  return (
    <Curd
      showQuickJumper={false}
      showSizeChanger={false}
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      getListFunction={(current, pageSize) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
    />
  );
};
```

### 配置搜索功能

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker } from 'antd';

export default () => {
  return (
    <Curd
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
    />
  );
};
```

### 配置增、删、改、预览

可在开发者工具把网速调慢，以观察删除效果

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker, Modal } from 'antd';

export default () => {
  return (
    <Curd
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
      // 添加此属性，会自动显示编辑按钮
      renderEditer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            这里是编辑内容
          </Modal>
        );
      }}
      // 添加此属性，自动显示新建按钮
      renderCreater={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            新建
          </Modal>
        );
      }}
      // 添加此属性，自动显示预览按钮
      renderPreviewer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            预览
          </Modal>
        );
      }}
      // 添加此属性，自动: 显示删除、表格可选择、当选择行时显示批量删除
      deleteFunction={idList => {
        return fetch('./');
      }}
      editColumnWidth={160}
    />
  );
};
```

### 扩展表格顶部操作区，扩展操作列

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker, Modal, Button } from 'antd';

export default () => {
  return (
    <Curd
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
      renderEditer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            这里是编辑内容
          </Modal>
        );
      }}
      renderCreater={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            新建
          </Modal>
        );
      }}
      renderPreviewer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            预览
          </Modal>
        );
      }}
      deleteFunction={idList => {
        return fetch('./');
      }}
      // 此属性用于扩展表格顶部操作区
      renderTableExtra={(extraData, defaultRender) => {
        return (
          <React.Fragment>
            <Button>自定义按钮</Button>
            {defaultRender(extraData)}
          </React.Fragment>
        );
      }}
      renderEditColumns={(record, index, defaultRender) => {
        return (
          <React.Fragment>
            {defaultRender(record)}
            <Button>自定义操作</Button>
          </React.Fragment>
        );
      }}
      editColumnWidth={300}
    />
  );
};
```

### 禁用全部删除

禁用预览使用 disabledDelete 属性。 同理增、删、改、预览都可禁用。

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker, Modal } from 'antd';

export default () => {
  return (
    <Curd
      disabledDelete
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
      renderEditer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            这里是编辑内容
          </Modal>
        );
      }}
      renderCreater={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            新建
          </Modal>
        );
      }}
      renderPreviewer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            预览
          </Modal>
        );
      }}
      deleteFunction={idList => {
        return fetch('./');
      }}
      editColumnWidth={120}
    />
  );
};
```

### 禁用指定项的删除

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker, Modal } from 'antd';

export default () => {
  return (
    <Curd
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
      renderEditer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            这里是编辑内容
          </Modal>
        );
      }}
      renderCreater={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            新建
          </Modal>
        );
      }}
      renderPreviewer={(visible, close, extraData, record) => {
        return (
          <Modal visible={visible} onCancel={() => close()}>
            预览
          </Modal>
        );
      }}
      deleteFunction={idList => {
        return fetch('./');
      }}
      editColumnWidth={150}
      // disabledRecordDelete根据record的属性设置
      renderEditColumns={(record, index, defaultRender) => {
        return defaultRender(record, { disabledRecordDelete: record.id <= 1 });
      }}
    />
  );
};
```

### 设置搜索表单项小于等于 4 时，为内联

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker } from 'antd';

export default () => {
  return (
    <Curd
      inlineMaxNumber={4}
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '姓名2',
          name: 'lastname2',
          content: <Input />,
        },
        {
          label: '姓名3',
          name: 'lastname3',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
    />
  );
};
```

### 自定义搜索表单中，搜索、重置元素的外观

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input, DatePicker } from 'antd';

export default () => {
  return (
    <Curd
      searchFormProps={{
        renderSearchElement: () => {
          return <a>我是自定义的搜索</a>;
        },
        renderResetElement: () => {
          return <a>我是自定义的重置</a>;
        },
      }}
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
      ]}
      searchItem={[
        {
          label: '姓名',
          name: 'lastname',
          content: <Input />,
        },
        {
          label: '姓名2',
          name: 'lastname2',
          content: <Input />,
        },
        {
          label: '姓名3',
          name: 'lastname3',
          content: <Input />,
        },
        {
          label: '日期',
          name: 'createDate',
          content: <DatePicker.RangePicker />,
        },
      ]}
      getListFunction={(current, pageSize, searchParams) => {
        return {
          total: 54,
          dataSource: new Array(pageSize).fill(0).map((_, index) => ({
            id: index,
            name: `${(current - 1) * pageSize + index} name`,
          })),
        };
      }}
    />
  );
};
```

### 动态修改 Columns

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
    };
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              columns: [
                {
                  title: '姓名',
                  dataIndex: 'name',
                },
              ],
            });
          }}
        >
          切换columns
        </Button>
        <Curd
          name="aaa"
          columns={this.state.columns}
          getListFunction={(current, pageSize, searchParams) => {
            return {
              total: 54,
              dataSource: new Array(pageSize).fill(0).map((_, index) => ({
                id: index,
                name: `${(current - 1) * pageSize + index} name`,
              })),
            };
          }}
        />
      </div>
    );
  }
}
```

### 设置搜索表单的初始值

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: null,
      columns: [
        {
          dataIndex: 'name',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <p>{JSON.stringify(this.state.searchParams)}</p>
        <Curd
          name="aaa"
          columns={this.state.columns}
          searchFormProps={{
            initialValues: {
              name: '小王',
            },
          }}
          searchItem={[
            {
              label: '姓名',
              name: 'name',
              content: <Input />,
            },
          ]}
          getListFunction={(current, pageSize, searchParams) => {
            console.log('搜索参数', searchParams);
            this.setState({ searchParams });
            return {
              total: 54,
              dataSource: new Array(pageSize).fill(0).map((_, index) => ({
                id: index,
                name: `${(current - 1) * pageSize + index} name`,
              })),
            };
          }}
        />
      </div>
    );
  }
}
```

### 获取搜索参数、列表数据变化的事件

修改搜索内容，点击搜索按钮，观察表格上方信息的变化

```
onDataChange
onSearchParamsChange
```

```tsx
import React from 'react';
import { Curd } from 'fb-project-component';
import { Input } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchParams: {},
    };
  }
  render() {
    const { data, searchParams } = this.state;
    return (
      <div>
        <div>
          <h4>搜索参数</h4>
          {JSON.stringify(searchParams)}
        </div>
        <div>
          <h4>列表数据</h4>
          {data && data.total}
        </div>
        <Curd
          onDataChange={data => {
            this.setState({ data });
          }}
          onSearchParamsChange={searchParams => {
            this.setState({ searchParams });
          }}
          columns={[
            {
              dataIndex: 'name',
            },
          ]}
          searchItem={[
            {
              label: '姓名',
              name: 'name',
              content: <Input />,
            },
          ]}
          renderTableExtra={extraData => {
            this.extraData = extraData;
          }}
          getListFunction={(current, pageSize, searchParams) => {
            return {
              total: Math.floor(30 + Math.random() * 100),
              dataSource: new Array(pageSize).fill(0).map((_, index) => ({
                id: index,
                name: `${(current - 1) * pageSize + index} name`,
              })),
            };
          }}
        />
      </div>
    );
  }
}
```

<API src='../../src/curd/Curd.tsx'/>
