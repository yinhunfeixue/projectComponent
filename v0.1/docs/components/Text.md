# Text

根据文字长度，自动处理文字裁切及 tooltip 显示的组件。
同时，还可设置处理富文本

### 主要做了以下工作

- 默认显示 15 个字符，超出则裁切
- 文字被裁切时，显示 tooltip
- 富文本处理

### 你可以

- 自定义允许显示的字符长度，也可以不裁切
- 可开启富文本处理

## 示例

### 基本用法

```tsx
import React from 'react';
import { Text } from 'fb-project-component';

export default () => {
  return <Text text="鼠标移上查看我完整的数据,12,3,456789" />;
};
```

### 自定义最大长度

```tsx
import React from 'react';
import { Text } from 'fb-project-component';

export default () => {
  return (
    <>
      <Text text="最多显示7个文字，123456789" maxLen={7} />
      <br />
      <Text text="不截取122134342354554646457567456756" maxLen={0} />
    </>
  );
};
```

### 解析富文本

```tsx
import React from 'react';
import { Text } from 'fb-project-component';

export default () => {
  return (
    <>
      <Text text="<span>我未解析富文本</span>" maxLen={0} />
      <br />
      <Text plainHtml text="<span>我解析了富文本</span>" />
    </>
  );
};
```

<API src='../../src/text/Text.tsx'>
