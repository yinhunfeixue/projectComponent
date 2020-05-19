import { Rule } from 'antd/lib/form';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { ReactNode } from 'react';

/**
 * 表单项
 */
interface IFormItemData {
  /**
   * 字段
   */
  name?: string;

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
   * 表单项规则
   */
  rules?: Rule[];

  /**
   * FormItem的props
   * 要传递给Form.Item的props
   */
  formItemProps?: FormItemProps;

  /**
   * content是否是FormItem，设置为true时，不会新创建一层formitem，而是使用content本身
   */
  contentIsFormItem?: boolean;
}

export default IFormItemData;
