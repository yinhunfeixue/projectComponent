# TimeSpan

时间段对象

### 时间段转换为指定单位

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const timeSpan = new TimeSpan(1, 2, 3, 4, 5);
  return (
    <div>
      <h2>1天2小时3分钟4秒5毫秒</h2>
      <div>= {timeSpan.totalDays}天</div>
      <div>= {timeSpan.totalHours}时</div>
      <div>= {timeSpan.totalMinutes}分</div>
      <div>= {timeSpan.totalSeconds}秒</div>
      <div>= {timeSpan.totalMilliseconds}毫秒</div>
    </div>
  );
};
```

### 按指定单位取整

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const milliseconds = 5000000080;
  const timeSpan = new TimeSpan(0, 0, 0, 0, milliseconds);
  return (
    <div>
      <h2>{milliseconds}毫秒，等于</h2>
      <div>
        {timeSpan.days}天{timeSpan.hours}小时
        {timeSpan.minutes}分{timeSpan.seconds}秒{timeSpan.milliseconds}毫秒
      </div>
    </div>
  );
};
```

### 格式化显示

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const milliseconds = 435000080;
  const timeSpan = new TimeSpan(0, 0, 0, 0, milliseconds);
  return (
    <div>
      <h2>{milliseconds}毫秒，格式化</h2>
      <div>{timeSpan.format('dddd天 hh:mm:ss--ii')}</div>
    </div>
  );
};
```

### 加法

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const milliseconds1 = 999;
  const milliseconds2 = 200;
  const timeSpan1 = new TimeSpan(0, 0, 0, 0, milliseconds1);
  const timeSpan2 = new TimeSpan(0, 0, 0, 0, milliseconds2);
  return (
    <div>
      <h2>
        {milliseconds1} + {milliseconds2}毫秒
      </h2>
      <div>= {timeSpan1.add(timeSpan2).format('s秒 i毫秒')}</div>
    </div>
  );
};
```

### 减法

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const milliseconds1 = 2301;
  const milliseconds2 = 200;
  const timeSpan1 = new TimeSpan(0, 0, 0, 0, milliseconds1);
  const timeSpan2 = new TimeSpan(0, 0, 0, 0, milliseconds2);
  return (
    <div>
      <h2>
        {milliseconds1} - {milliseconds2}毫秒
      </h2>
      <div>= {timeSpan1.subtract(timeSpan2).format('s秒 i毫秒')}</div>
    </div>
  );
};
```

### 绝对值

```tsx
import React from 'react';
import { TimeSpan } from 'fb-project-component';

export default () => {
  const milliseconds = -2301;
  const timeSpan = new TimeSpan(0, 0, 0, 0, milliseconds);
  return (
    <div>
      <h2>{milliseconds}毫秒</h2>
      <div>= {timeSpan.format('s秒 i毫秒')}</div>
      <div>取绝对值后 = {timeSpan.abs().format('s秒 i毫秒')}</div>
    </div>
  );
};
```
