# AntdUtil

Antd 组件相关的辅助工具

### 数组渲染成下拉框

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';
export default () => {
  return (
    <div>
      {AntdUtil.renderArrayToSelect([1, 2, 3], {
        style: { width: 120 },
        onChange: value => alert(value),
      })}
    </div>
  );
};
```

### 自定义数组渲染成下拉框

自定义取值方法、渲染方法

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';
export default () => {
  return (
    <div>
      {AntdUtil.renderArrayToSelect(
        [1, 2, 3],
        {
          style: { width: 200 },
          onChange: value => alert(value),
        },
        (item, index) => `第${index}项，label${item}`,
        (item, index) => `第${index}项，vaue${item}`,
      )}
    </div>
  );
};
```

### 字典渲染成下拉框

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';
export default () => {
  return (
    <div>
      {AntdUtil.renderObjectToSelect(
        { 1: 'a', 2: 'b', x: 'xxx' },
        {
          style: { width: 120 },
          onChange: value => alert(value),
        },
      )}
    </div>
  );
};
```

### 自定义字典渲染成下拉框

自定义取值方法、渲染方法

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';
export default () => {
  return (
    <div>
      {AntdUtil.renderObjectToSelect(
        { 1: 'a', 2: 'b', x: 'xxx' },
        {
          style: { width: 120 },
          onChange: value => alert(value),
        },
        (key, item) => `value=${key}`,
        (key, item) => `label=${item}`,
      )}
    </div>
  );
};
```

### 渲染树

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';

export default () => {
  return (
    <div>
      {AntdUtil.rendeTree(
        [
          {
            id: 1,
            name: '1',
            children: [
              {
                id: 11,
                name: '11',
              },
            ],
          },
          {
            id: 2,
            name: '2',
            children: [
              {
                id: 21,
                name: '21',
              },
            ],
          },
          {
            id: 3,
            name: '3',
          },
        ],
        {
          onSelect: value => {
            alert(`已选中${value.join()}`);
          },
        },
      )}
    </div>
  );
};
```

### 自定义树渲染属性

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';

export default () => {
  return (
    <div>
      {AntdUtil.rendeTree(
        [
          {
            myID: 1,
            myName: '1',
            myChildren: [
              {
                myID: 11,
                myName: '11',
              },
            ],
          },
          {
            myID: 2,
            myName: '2',
            myChildren: [
              {
                myID: 21,
                myName: '21',
              },
            ],
          },
          {
            myID: 3,
            myName: '3',
          },
        ],
        null,
        'myID',
        item => {
          return (
            <span style={{ color: 'red' }}>{`我的名称是：${item.myName}`}</span>
          );
        },
        'myChildren',
      )}
    </div>
  );
};
```
