import { Row } from 'antd';
import Col, { ColProps } from 'antd/lib/col';
import FormItem, { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';
import IFormItemData from '../interfaces/IFormItemData';

class FormUtil {
  /**
   * 渲染表单项
   * @param formItemList 表单数据源
   *    * @param columnCount 列数，默认为2
   * @param defaultLabelSpan 每个表单项的标签默认占用的列数
   */
  static renderFormItems(
    formItemList: IFormItemData[],
    columnCount: number = 2,
    defaultLabelSpan = 6,
    defaultWrapSpan?: number,
  ) {
    if (!formItemList || !formItemList.length) {
      return null;
    }

    const defaultSpan = 24 / columnCount;

    const rows: { totalSpan: number; cols: { span: number; formItem: React.ReactNode }[] }[] = [];
    // 循环表单项
    for (let i = 0; i < formItemList.length; i++) {
      const item = formItemList[i];

      // 获取一个表单项占多少列，优先级从高到低为
      // 1. item.span
      // 2. item.label.length > 6? 占一整列（24）：defaultSpan
      let span = item.span;
      if (!span) {
        if (item.label && typeof item.label === 'string' && item.label.length > 6) {
          span = 24;
        } else {
          span = defaultSpan;
        }
      }
      span = Math.min(24, span);

      // 创建formItem
      // 获取 label占用的空间，优先用item设置的值，未设置，则根据defaultSpan取一个合适的值，以确保对齐
      // 例如：defaultSpan是12, defaultLabelSpan=6，而当前ispan = 8, 则当前item的labelspan= 12*6/8
      const labelSpan = Math.min(
        24,
        item.labelSpan !== undefined
          ? item.labelSpan
          : Math.round((defaultLabelSpan * defaultSpan) / span),
      );
      // 如果表单项有label，则设置labelCol；否则，设置offsetCol，以确保表单元素是对齐的
      const itemProps: { labelCol?: ColProps; wrapperCol?: ColProps } = {};
      itemProps.wrapperCol = {};
      if (item.label) {
        itemProps.labelCol = { span: labelSpan };
      } else {
        itemProps.wrapperCol.offset = labelSpan;
      }

      // 设置内容占用的列数
      // 优先使用item.wrapSpan，
      // 其次为defaultWrapSpan
      // 如果都未设置，则: 自动计算 = 24 - labelSpan
      if (item.wrapSpan !== undefined) {
        itemProps.wrapperCol.span = item.wrapSpan;
      } else if (defaultWrapSpan) {
        itemProps.wrapperCol.span = defaultWrapSpan;
      } else {
        itemProps.wrapperCol.span = 24 - labelSpan;
      }

      let formItem = null;

      if (item.content) {
        const props: FormItemProps = Object.assign({
          label: item.label,
          name: item.name,
          rules: item.rules,
          valuePropName: item.valuePropName || 'value',
          ...itemProps,
          ...item.formItemProps,
          children: null,
        });

        if (item.contentIsFormItem) {
          formItem = React.cloneElement(
            item.content as React.ReactElement,
            Object.assign(props, (item.content as React.ReactElement).props),
          );
        } else {
          formItem = <FormItem {...props}>{item.content}</FormItem>;
        }
      }

      // 创建col
      const col = {
        span,
        formItem,
      };

      // 获取合适的row
      // 先获取已存在的最后一个row，如果不存在，或者span装不下当前col，则新建一个
      let row;
      if (rows.length) {
        row = rows[rows.length - 1];
      }

      if (!row || row.totalSpan + span > 24) {
        row = { totalSpan: 0, cols: [] };
        rows.push(row);
      }

      row.totalSpan += span;
      row.cols.push(col);
    }

    // 循环row，渲染react节点
    return rows.map((row, rowIndex) => {
      return (
        <Row key={rowIndex}>
          {row.cols.map((col, colIndex) => {
            return (
              <Col key={colIndex} span={col.span}>
                {col.formItem}
              </Col>
            );
          })}
        </Row>
      );
    });
  }

  static renderInlinFormItems(formItemList: IFormItemData[]) {
    if (!formItemList || !formItemList.length) {
      return null;
    }

    return formItemList.map((item, index) => {
      return (
        <FormItem
          key={index}
          label={item.label}
          name={item.name}
          rules={item.rules}
          {...item.formItemProps}
        >
          {item.content}
        </FormItem>
      );
    });
  }
}

export default FormUtil;
