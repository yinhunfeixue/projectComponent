import { Button, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import FormUtil from '../utils/FormUtil';
import './SearchForm.less';

const classnames = require('classnames');

interface ISearchFormState {}
interface ISearchFormProps extends IComponentProps {
  /**
   * 表单项，参考：IFormItemData
   */
  itemList: IFormItemData[];

  /**
   * 提交数据时触发的方法
   */
  onSubmit: (values: Store) => void;

  /**
   * 每行默认的列数
   */
  columnNumber?: number;
}

/**
 * 搜索表单
 */
class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
  private form: FormInstance | null = null;

  public render(): ReactNode {
    const { itemList, onSubmit, columnNumber, className, style } = this.props;
    if (!itemList || !itemList.length) {
      return null;
    }
    const list = itemList.concat([
      {
        content: (
          <div className="fb-ControlGroup">
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              onClick={() => {
                if (this.form) {
                  this.form.resetFields();
                  this.form.submit();
                }
              }}
            >
              重置
            </Button>
          </div>
        ),
      },
    ]);

    const useHorizontal = columnNumber || list.length > 3;
    return (
      <Form
        ref={target => {
          this.form = target;
        }}
        className={classnames(
          'fb-SearchForm',
          useHorizontal ? 'fb-SearchFormHorizontal' : '',
          className,
        )}
        style={style}
        layout={useHorizontal ? 'horizontal' : 'inline'}
        onFinish={values => {
          onSubmit(values);
        }}
      >
        {useHorizontal
          ? FormUtil.renderFormItems(list, columnNumber || 3)
          : FormUtil.renderInlinFormItems(list)}
      </Form>
    );
  }
}

export default SearchForm;
