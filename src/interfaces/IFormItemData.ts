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
   * 占用的列宽，不设置则自动计算
   */
  span?: number;

  /**
   * 当前项标签占用的span，没设置则自动计算。
   * 通常，只有标签文字太多，显示不全时，需要设置此值
   */
  labelSpan?: number;

  /**
   * FormItem的props
   * 要传递给Form.Item的props
   */
  formItemProps?: FormItemProps;
}

export const IFormItemDataC = (props: IFormItemData) => {};
