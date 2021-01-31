# HtmlUtil

HTML 相关的辅助工具

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
  return (
    <Button
      onClick={() => {
        if (HtmlUtil.copyText('aaaa')) {
          message.success('复制成功，可粘贴到其它地方');
        } else {
          message.error('复制失败');
        }
      }}
    >
      点我复制 aaaa
    </Button>
  );
};
```

### 获取粘贴板内容

仅支持 chrome

```tsx
import React from 'react';
import { HtmlUtil } from 'fb-project-component';
import { message, Button, Input } from 'antd';

export default () => {
  return (
    <>
      <Input placeholder="在这里输入文字，复制后，点击下方按钮" />
      <Button
        onClick={async () => {
          const str = await HtmlUtil.getCopyText();
          if (str !== undefined) {
            message.success(`${str}`);
          } else {
            message.error('复制失败，请检查浏览器设置');
          }
        }}
      >
        显示粘贴板内容
      </Button>
    </>
  );
};
```

### 导出文件

```
HtmlUtil.exportBlob(blob, '文件名.txt');
```
