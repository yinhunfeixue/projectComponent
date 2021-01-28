# HtmlUtil
HTML相关的辅助工具

### 富文本转换为纯文本

```tsx
import React from 'react';
import { HtmlUtil } from 'fb-project-component';

export default () => {
  return <div>{HtmlUtil.plainHtml('<span>aaaa</span>')}</div>;
};
```

### 复制到粘贴板

```tsx
import React from 'react';
import { HtmlUtil } from 'fb-project-component';
import { message, Button } from 'antd';

export default () => {
 return <Button
    onClick={() => {
      if (HtmlUtil.copyText('aaaa')) {
        message.success('复制成功，可粘贴到其它地方');
      } else {
        message.error('复制失败');
      }
    }}
  >
    点我复制 aaaa
  </Button>;
};
```

### 导出文件
```
HtmlUtil.exportBlob(blob, '文件名.txt');
```
