# PromiseButton

当 onclick 返回 promise 时，自动 loading 的按钮。

当点击是异步过程时，建议使用组件，原因

- 减少代码量
- loading 的 state 在按钮内部进行，无需 render 业务模块

### 点击返回 promise

点击后自动开始 loading； promise 完成后，停止 loading

```tsx
import React, { useState } from 'react';
import { PromiseButton } from 'fb-project-component';

export default () => {
  const [tip, setTip] = useState('');
  return (
    <>
      <PromiseButton
        type="primary"
        onClick={event => {
          return new Promise(resolve => {
            setTimeout(() => {
              setTip('点击完成');
              resolve();
            }, 5000);
          });
        }}
      >
        按钮
      </PromiseButton>
      <div>{tip}</div>
    </>
  );
};
```

### 点击无返回值

和普通按钮一样使用

```tsx
import React, { useState } from 'react';
import { PromiseButton } from 'fb-project-component';

export default () => {
  const [tip, setTip] = useState('');
  return (
    <>
      <PromiseButton
        type="primary"
        onClick={event => {
          setTip('点击完成');
        }}
      >
        按钮
      </PromiseButton>
      <div>{tip}</div>
    </>
  );
};
```
