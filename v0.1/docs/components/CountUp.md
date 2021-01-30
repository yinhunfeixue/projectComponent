# CountUp

计时器组件

## 基本用法

此示例计时依赖客户端时间

```tsx
import React from 'react';
import { CountUp } from 'fb-project-component';
export default () => {
  return <CountUp startTime="2020-5-13 00:30:00" format="dd天 hh时mm分ss秒" />;
};
```

## 自定义服务器时间

此示例计时不依赖客户端时间

为了防止客户端时间错误时，显示异常。需从服务器获取服务器时间。

```tsx
import React from 'react';
import { CountUp } from 'fb-project-component';
export default () => {
  return (
    <CountUp
      startTime="2020-5-13 00:30:00"
      format="dd天 hh时mm分ss秒"
      serverTimestamp={new Date('2020-5-13 00:30:00').getTime()}
    />
  );
};
```

<API src='../../src/CountUp/CountUp.tsx'/>
