export interface ISearchTableExtra<T> {
  /**
   * 当前选中的key列表
   */
  selectedRowKeys?: any[];

  /**
   * 当前选中的数据列表
   */
  selectedRows?: T[];

  /**
   * 是否加载中
   */
  loading: boolean;

  /**
   * 获取搜索参数
   */
  searchParams: any;

  /**
   * 刷新
   */
  refresh: () => void;

  /**
   * 设置搜索参数，此方法会把页码重置到第一页
   */
  setSearchParams: (params: any) => void;
}
