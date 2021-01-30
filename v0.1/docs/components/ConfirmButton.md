# ConfirmButton

带确认过程的按钮，确认成功时，才触发操作。通常用于删除等需要二次确认的操作

### 主要做了以下工作

- 点击后调用确认方法，确认通过后，触发确认事件

### 你可以

- 自定义按钮文字
- 如果不使用按钮，可自定义显示元素
- 可自定义提示文字
- 可自定义确认方法。如果确认过程是异步的，会出现加载动画

## 示例

### 默认

```tsx
import React from 'react';
import { ConfirmButton } from 'fb-project-component';

export default () => {
  return (
    <ConfirmButton
      onConfirm={() => {
        alert('确认');
      }}
    />
  );
};
```

### 自定义按钮文字，弹窗文字

```tsx
import React from 'react';
import { ConfirmButton } from 'fb-project-component';
export default () => {
  return (
    <ConfirmButton
      text="移到回收站"
      modalContent={{
        title: '这个操作可逆',
        content: (
          <span>
            真要<span style={{ color: 'red' }}>删除</span>我？
          </span>
        ),
      }}
      onConfirm={() => {
        alert('确认');
      }}
    />
  );
};
```

### 自定义显示元素

```tsx
import React from 'react';
import { ConfirmButton } from 'fb-project-component';
export default () => {
  return (
    <ConfirmButton
      onConfirm={() => {
        alert('确认');
      }}
      getElement={loading => {
        return <span>{loading ? '请确认' : '保存'}</span>;
      }}
    />
  );
};
```

### 自定义验证方法

点我会发出一个网络请求，并随机通过和拒绝

```tsx
import React from 'react';
import { ConfirmButton } from 'fb-project-component';
export default () => {
  return (
    <ConfirmButton
      validate={() => {
        if (Math.random() > 0.5) {
          return true;
        }
        return false;
      }}
      onConfirm={() => {
        alert('确认');
      }}
    />
  );
};
```

### onConfirm 返回 promise

当 onConfirm 返回 promise 时，在执行中，始终保持 loading

```tsx
import React from 'react';
import { ConfirmButton } from 'fb-project-component';
export default () => {
  return (
    <ConfirmButton
      onConfirm={() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      }}
    />
  );
};
```

<API src='../../src/confirmButton/ConfirmButton.tsx'/>
