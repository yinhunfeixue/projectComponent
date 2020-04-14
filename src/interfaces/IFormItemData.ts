import { FormItemProps } from 'antd/lib/form/FormItem';
import { ReactNode } from 'react';

/**
 * 表单项
 */
export default interface IFormItemData {
  /**
   * 标签
   */
  label?: string;
  /**
   * 内容
   */
  content: ReactNode;

  /**
   * 占用的列宽，无值表示不使用列
   */
  span?: number;

  /**
   * 当前项标签占用的span
   */
  labelSpan?: number;

  /**
   * FormItem的props
   */
  formItemProps?: FormItemProps;
}
