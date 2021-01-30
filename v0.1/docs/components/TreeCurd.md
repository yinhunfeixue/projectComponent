# TreeCurd

一个可以自定义树操作的树组件

**此组件已过时，暂不建议使用**

### 主要做了以下工作

- 处理树的编辑 新增 删除 编辑
- 处理树的多选

### 你可以

- 自定义树编辑区域
- 自定义对树的操作
- 自定义是否可多选

## 示例

涉及网络操作，建议在开发者工具中限制后观察示例

## 基本用法

```tsx
import React from 'react';
import { TreeCurd, FormUtil, EditType } from 'fb-project-component';
import { Form, Space, Input, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  render() {
    return (
      <TreeCurd
        getKey="id"
        showSearch
        deleteFunction={ids => message.info(ids)}
        getTreeData={() => {
          return fetch('./').then(() => {
            return [
              {
                id: '0-0',
                name: '0-0',
                children: [
                  {
                    id: '0-0-1',
                    name: '0-0-1',
                  },
                ],
              },
              {
                id: '0-1',
                name: '0-1',
                children: [
                  {
                    id: '0-1-1',
                    name: '0-1-1',
                  },
                ],
              },
            ];
          });
        }}
        renderEditExtra={extraData => {
          const { selectedItems, selectedKeys, type, refresh } = extraData;
          if (type && this.formRef && this.formRef.current) {
            if (type === EditType.ADD) {
              this.formRef.current.resetFields();
            } else if (type === EditType.EDIT) {
              this.formRef.current.setFieldsValue(selectedItems[0]);
            } else {
              this.formRef.current.resetFields();
            }
          }
          return (
            <React.Fragment>
              <Form ref={this.formRef}>
                {FormUtil.renderFormItems(
                  [
                    {
                      label: '类型',
                      content: (
                        <span>
                          {type === 'add' ? '新增' : type ? '编辑' : ''}
                        </span>
                      ),
                      name: 'type',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: false,
                          },
                        ],
                      },
                    },
                    {
                      label: '名称',
                      content: <Input />,
                      name: 'name',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      label: '编码',
                      content: <Input />,
                      name: 'id',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      labelSpan: 3,
                      content: (
                        <div className="fb-ControlGroup">
                          <Space>
                            <Button type="primary" htmlType="submit">
                              确定
                            </Button>
                            <Button onClick={refresh}>重置</Button>
                          </Space>
                        </div>
                      ),
                    },
                  ],
                  1,
                )}
              </Form>
            </React.Fragment>
          );
        }}
      />
    );
  }
}
```

## 可以设置为可多选的树

```tsx
import React from 'react';
import { TreeCurd } from 'fb-project-component';
import { Form, Space, Input, Button } from 'antd';

export default () => {
  return (
    <TreeCurd
      checkable
      editEnable={false}
      getTreeData={() => {
        return fetch('./').then(() => {
          return [
            {
              id: '0-0',
              name: '0-0',
              children: [
                {
                  id: '0-0-1',
                  name: '0-0-1',
                },
              ],
            },
            {
              id: '0-1',
              name: '0-1',
              children: [
                {
                  id: '0-1-1',
                  name: '0-1-1',
                },
              ],
            },
          ];
        });
      }}
      renderCheckExtra={extraData => {
        return (
          <div style={{ marginTop: 20 }}>
            <Space>
              <Button type="primary">确定</Button>
              <Button>取消</Button>
            </Space>
          </div>
        );
      }}
    />
  );
};
```

## 自定义结点 props

## 设置 onCheck 回调

```tsx
import React from 'react';
import { TreeCurd } from 'fb-project-component';
import { Form, Space, Input, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      checkedItems: [],
      defaultCheckedKeys: [],
    };
  }
  render() {
    return (
      <TreeCurd
        getKey="id"
        deleteFunction={ids => message.info(ids)}
        checkable
        editEnable={false}
        defaultCheckedKeys={this.state.defaultCheckedKeys}
        onCheck={(extraData, checkedInfo) => {
          const { checkedItems } = extraData;
          const { checkedNodes } = checkedInfo;
          const defaultCheckedKeys = checkedNodes
            .filter(item => !item.children || !item.children.length)
            .map(item => item.key);
          this.setState({
            checkedItems,
            defaultCheckedKeys,
          });
        }}
        getTreeData={() => {
          return fetch('./').then(() => {
            return [
              {
                id: '0-0',
                name: '0-0',
                children: [
                  {
                    id: '0-0-1',
                    name: '0-0-1',
                  },
                ],
              },
              {
                id: '0-1',
                name: '0-1',
                children: [
                  {
                    id: '0-1-1',
                    name: '0-1-1',
                  },
                  {
                    id: '0-1-2',
                    name: '0-1-2',
                  },
                ],
              },
            ];
          });
        }}
      />
    );
  }
}
```

## 自定义结点 props

name='0-0'的 style.color = 'red'

```tsx
import React from 'react';
import { TreeCurd, FormUtil, EditType } from 'fb-project-component';
import { Form, Space, Input, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  render() {
    return (
      <TreeCurd
        getKey="id"
        showSearch
        deleteFunction={ids => message.info(ids)}
        getTreeData={() => {
          return fetch('./').then(() => {
            return [
              {
                id: '0-0',
                name: '0-0',
                children: [
                  {
                    id: '0-0-1',
                    name: '0-0-1',
                  },
                ],
              },
              {
                id: '0-1',
                name: '0-1',
                children: [
                  {
                    id: '0-1-1',
                    name: '0-1-1',
                  },
                ],
              },
            ];
          });
        }}
        renderEditExtra={extraData => {
          const { selectedItems, selectedKeys, type, refresh } = extraData;
          if (type && this.formRef && this.formRef.current) {
            if (type === EditType.ADD) {
              this.formRef.current.resetFields();
            } else if (type === EditType.EDIT) {
              this.formRef.current.setFieldsValue(selectedItems[0]);
            } else {
              this.formRef.current.resetFields();
            }
          }
          return (
            <React.Fragment>
              <Form ref={this.formRef}>
                {FormUtil.renderFormItems(
                  [
                    {
                      label: '类型',
                      content: (
                        <span>
                          {type === 'add' ? '新增' : type ? '编辑' : ''}
                        </span>
                      ),
                      name: 'type',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: false,
                          },
                        ],
                      },
                    },
                    {
                      label: '名称',
                      content: <Input />,
                      name: 'name',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      label: '编码',
                      content: <Input />,
                      name: 'id',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      labelSpan: 3,
                      content: (
                        <div className="fb-ControlGroup">
                          <Space>
                            <Button type="primary" htmlType="submit">
                              确定
                            </Button>
                            <Button onClick={refresh}>重置</Button>
                          </Space>
                        </div>
                      ),
                    },
                  ],
                  1,
                )}
              </Form>
            </React.Fragment>
          );
        }}
        getNodeProps={node => {
          if (node.name === '0-0') {
            return {
              style: {
                color: 'red',
              },
            };
          }
        }}
      />
    );
  }
}
```

## 自定义获取子列表的方法

子列表名称为：childrenCustom

```tsx
import React from 'react';
import { TreeCurd, FormUtil, EditType } from 'fb-project-component';
import { Form, Space, Input, Button } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  render() {
    return (
      <TreeCurd
        getKey="id"
        showSearch
        getChildren="childrenCustom"
        deleteFunction={ids => message.info(ids)}
        getTreeData={() => {
          return fetch('./').then(() => {
            return [
              {
                id: '0-0',
                name: '0-0',
                childrenCustom: [
                  {
                    id: '0-0-1',
                    name: '0-0-1',
                  },
                ],
              },
              {
                id: '0-1',
                name: '0-1',
                childrenCustom: [
                  {
                    id: '0-1-1',
                    name: '0-1-1',
                  },
                ],
              },
            ];
          });
        }}
        renderEditExtra={extraData => {
          const { selectedItems, selectedKeys, type, refresh } = extraData;
          if (type && this.formRef && this.formRef.current) {
            if (type === EditType.ADD) {
              this.formRef.current.resetFields();
            } else if (type === EditType.EDIT) {
              this.formRef.current.setFieldsValue(selectedItems[0]);
            } else {
              this.formRef.current.resetFields();
            }
          }
          return (
            <React.Fragment>
              <Form ref={this.formRef}>
                {FormUtil.renderFormItems(
                  [
                    {
                      label: '类型',
                      content: (
                        <span>
                          {type === 'add' ? '新增' : type ? '编辑' : ''}
                        </span>
                      ),
                      name: 'type',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: false,
                          },
                        ],
                      },
                    },
                    {
                      label: '名称',
                      content: <Input />,
                      name: 'name',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      label: '编码',
                      content: <Input />,
                      name: 'id',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      labelSpan: 3,
                      content: (
                        <div className="fb-ControlGroup">
                          <Space>
                            <Button type="primary" htmlType="submit">
                              确定
                            </Button>
                            <Button onClick={refresh}>重置</Button>
                          </Space>
                        </div>
                      ),
                    },
                  ],
                  1,
                )}
              </Form>
            </React.Fragment>
          );
        }}
      />
    );
  }
}
```

## 扩展操作区

自定义一个按钮

```tsx
import React from 'react';
import { TreeCurd, FormUtil, EditType } from 'fb-project-component';
import { Form, Space, Button, Input } from 'antd';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      expandedKeys: [],
    };
  }
  render() {
    return (
      <TreeCurd
        getKey="id"
        deleteFunction={ids => message.info(ids)}
        defaultExpandedKeys={this.state.expandedKeys}
        onExpand={expandedKeys => {
          this.setState({
            expandedKeys,
          });
        }}
        getTreeData={() => {
          return fetch('./').then(() => {
            return [
              {
                id: '0-0',
                name: '0-0',
                children: [
                  {
                    id: '0-0-1',
                    name: '0-0-1',
                  },
                ],
              },
              {
                id: '0-1',
                name: '0-1',
                children: [
                  {
                    id: '0-1-1',
                    name: '0-1-1',
                  },
                ],
              },
            ];
          });
        }}
        renderEditExtra={extraData => {
          const { selectedItems, selectedKeys, type, refresh } = extraData;
          if (type && this.formRef && this.formRef.current) {
            if (type === EditType.ADD) {
              this.formRef.current.resetFields();
            } else if (type === EditType.EDIT) {
              this.formRef.current.setFieldsValue(selectedItems[0]);
            } else {
              this.formRef.current.resetFields();
            }
          }
          return (
            <React.Fragment>
              <Form ref={this.formRef}>
                {FormUtil.renderFormItems(
                  [
                    {
                      label: '类型',
                      content: (
                        <span>
                          {type === 'add' ? '新增' : type ? '编辑' : ''}
                        </span>
                      ),
                      name: 'type',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: false,
                          },
                        ],
                      },
                    },
                    {
                      label: '名称',
                      content: <Input />,
                      name: 'name',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      label: '编码',
                      content: <Input />,
                      name: 'id',
                      labelSpan: 3,
                      formItemProps: {
                        children: '',
                        rules: [
                          {
                            required: true,
                          },
                        ],
                      },
                    },
                    {
                      labelSpan: 3,
                      content: (
                        <div className="fb-ControlGroup">
                          <Space>
                            <Button type="primary" htmlType="submit">
                              确定
                            </Button>
                            <Button onClick={refresh}>重置</Button>
                          </Space>
                        </div>
                      ),
                    },
                  ],
                  1,
                )}
              </Form>
            </React.Fragment>
          );
        }}
        renderExtra={(extraData, defaultRender) => {
          return (
            <React.Fragment>
              {defaultRender(extraData)}
              <Button>自定义按钮</Button>
            </React.Fragment>
          );
        }}
      />
    );
  }
}
```

<API src='../../src/TreeCurd/TreeCurd.tsx'/>
