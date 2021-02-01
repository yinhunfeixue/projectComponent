---
order: -1
---

# 更新日志

## 0.1.8

### 优化

1. 升级示例代码，所有示例代码复制后可直接在项目运行
1. 优化`SearchTable`的性能
1. `ConfirmButton`的`onConfirm`属性支持返回 promise，如返回 promise，按钮在过程中会保持 loading 状态

### 新增

1. 添加`FormRegExp`文档，包含各种常用正则
1. 添加`TimeSpan`的文档，此类在处理时间段（例如倒计时）时很有用
1. 添加`PromiseButton`组件，当`onClick`返回 promise 时，组件会自行处理 loading
1. `AntdUtil`新增`renderObjectToSelect`、`renderArrayToSelect`
