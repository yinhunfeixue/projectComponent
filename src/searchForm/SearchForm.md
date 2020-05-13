## 搜索表单

搜索表单为你处理了

- 元素对齐的处理方法
- 搜索，重置按钮及点击按钮时触发 onSubmit 事件

传入表单项，和提交时执行的方法即可

```js
<SearchForm
  itemList={[
    {
      label: '用户名',
      content: <Input />,
      name: 'name',
    },
  ]}
  onSubmit={(values) => {
    setSearchParams(values);
  }}
/>
```
