import { Row } from 'antd';
import Col, { ColProps } from 'antd/lib/col';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import IFormItemData from '../interfaces/IFormItemData';

class FormUtil {
  /**
   * 渲染表单项
   * @param formItemList 表单数据源
   * @param defaultLabelSpan 每个表单项的标签默认占用的列数
   * @param defaultSpan 默认span值 ，每项占用的列数（列的含义请参考antd, https://ant.design/components/grid-cn/)
   */
  static renderFormItems(
    formItemList: IFormItemData[],
    defaultSpan?: number,
    defaultLabelSpan = 6,
  ) {
    if (!formItemList || !formItemList.length) {
      return null;
    }

    const rows: { totalSpan: number; cols: { span: number; formItem: React.ReactNode }[] }[] = [];
    // 循环表单项
    for (let i = 0; i < formItemList.length; i++) {
      const item = formItemList[i];
      // 创建formItem
      // 获取 label占用的空间，优先用item设置的值
      const labelSpan = Math.min(24, item.labelSpan ? item.labelSpan : defaultLabelSpan);
      // 如果表单项有label，则设置labelCol；否则，设置offsetCol，以确保表单元素是对齐的
      const itemProps: { labelCol?: ColProps; wrapperCol?: ColProps } = {};
      if (item.label) {
        itemProps.labelCol = { span: labelSpan };
        itemProps.wrapperCol = { span: 24 - labelSpan };
      } else {
        itemProps.wrapperCol = { offset: labelSpan };
      }

      const formItem = item.content ? (
        <FormItem label={item.label} {...itemProps} {...item.formItemProps}>
          {item.content}
        </FormItem>
      ) : null;

      // 获取一个表单项占多少span，规则为
      // 1. 优先item.span
      // 2. 其次defaultSpan
      // 3. 再次 item.label.length > 6? 占一整行：占半行
      let span = item.span || defaultSpan;
      if (!span) {
        if (item.label && item.label.length > 6) {
          span = 24;
        } else {
          span = 12;
        }
      }

      span = Math.min(24, span);

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
}

export default FormUtil;
