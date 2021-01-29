import { Playground, Props } from 'docz';
import 'antd/dist/antd.css';
import TreeControl from './TreeControl';

# TreeControl

树相关的辅助工具

- 一维数组转换为树结构
- 搜索指定的结点
- 搜索指定结点及其所有父结点
- foreach
- map

### 数组转换为树`control.listToTree`

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        return (
          <div>
            <h2>原始数据</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(list, null, 4)}</p>
            <h2>树结构</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 过滤出新的树`control.filter`

挑选出 name 包含 a 的分支，并返回新的树

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );

        let filterList = control.filter(tree, node => {
          return node.name && node.name.indexOf('a') >= 0;
        });
        return (
          <div>
            <h2>树结构</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>过滤出的数据</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(filterList, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 搜索一个结点`control.search`

搜索出 name 包含 a 的第一个数据

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        let nodes = control.search(tree, node => {
          return node.name && node.name.indexOf('a') >= 0;
        });
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>搜索出的数据</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(nodes, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 搜索父节点`control.searchParent`

搜索第一个 name 包含 a 的节点的父结点

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        let nodes = control.searchParent(tree, node => {
          return node.name && node.name.indexOf('a') >= 0;
        });
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>搜索出的数据</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(nodes, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 搜索全部结点`control.find`

搜索出 name 包含 a 的全部数据

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        let nodes = control.find(tree, node => {
          return node.name && node.name.indexOf('a') >= 0;
        });
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>搜索出的数据</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(nodes, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 搜索结点链`control.searchChain`

搜索出 name 包含 a 的第一个数据及其所有父结点组成的一维数组

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        let nodes = control.searchChain(tree, node => {
          return node.name && node.name.indexOf('a') >= 0;
        });
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>搜索出的数据</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(nodes, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```

### 获取节点总数`control.count`

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        let count = control.count(tree);
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>节点总数</h2>
            <p style={{ whiteSpace: 'pre' }}>{count}</p>
          </div>
        );
      })()}
    </div>
  );
};
```

### ForEach 树`control.forEach`

foreach 会改变旧树

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        control.forEach(tree, node => {
          node.newAtt = 'newAtt';
        });
        return (
          <div>
            <h2>原始数据</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(list, null, 4)}</p>
            <h2>遍历的后的树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
          </div>
        );
      })()}
    </div>
  );
};
```

### Map 树`control.map`

Map 不改变旧树的数据，而是创建一个新树

```tsx
import React from 'react';
import { TreeControl } from 'fb-project-component';

export default () => {
  return (
    <div>
      {(function renderTree() {
        let list = [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: '1-1',
            pid: 1,
          },
          {
            id: '1-1-2',
            pid: '1-1',
            name: 'a111',
          },
          {
            id: '1-2',
            pid: 1,
          },
          {
            id: '2-1',
            pid: 2,
            name: 'a21',
          },
        ];
        let control = new TreeControl('id', 'children', 'children');
        let tree = control.listToTree(
          list.map(item => ({ ...item })),
          (node, parent) => {
            if (!parent) {
              return !node.pid;
            }
            return node.pid === parent.id;
          },
        );
        const newTree = control.map(
          tree,
          (node, index, oldParent, newChildren) => {
            return {
              ...node,
              newAtt: `我是新数据${node.id}`,
              children: newChildren || undefined,
            };
          },
        );
        return (
          <div>
            <h2>树</h2>
            <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(tree, null, 4)}</p>
            <h2>Map生成的新树</h2>
            <p style={{ whiteSpace: 'pre' }}>
              {JSON.stringify(newTree, null, 4)}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
```
