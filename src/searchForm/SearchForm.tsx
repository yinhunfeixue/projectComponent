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
export interface ISearchFormProps extends IComponentProps {
  /**
   * 表单项，参考：IFormItemData
   */
  itemList?: IFormItemData[];

  /**
   * 提交数据时触发的方法
   */
  onSubmit?: (values: Store) => void;

  /**
   * 每行默认的列数
   */
  columnNumber?: number;

  /**
   * 表单项小于等于几时，使用inline，默认为3
   */
  inlineMaxNumber?: number;

  /**
   * 渲染搜索元素
   */
  renderSearchElement?: () => ReactNode;

  /**
   * 渲染重置元素
   */
  renderResetElement?: () => ReactNode;

  /**
   * Form的初始化
   */
  initialValues?: Store;

  /**
   * 禁用
   */
  disabled?: boolean;

  /**
   * 获取表单实例，需要联动时，需要使用此方法
   */
  getFormInstance?: (form: FormInstance | null) => void;
}

/**
 * 搜索表单
 */
class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
  private form: FormInstance | null = null;

  private _defaultRenderSearchElement() {
    const { renderSearchElement } = this.props;
    return renderSearchElement ? renderSearchElement() : <Button type="primary">搜索</Button>;
  }

  private _defaultRenderResetElement() {
    const { renderResetElement } = this.props;
    return renderResetElement ? renderResetElement() : <Button>重置</Button>;
  }

  private submit() {
    const { onSubmit } = this.props;
    if (this.form && onSubmit) {
      this.form.validateFields().then(values => {
        onSubmit(values);
      });
    }
  }

  public render(): ReactNode {
    const {
      itemList,
      columnNumber,
      className,
      style,
      inlineMaxNumber = 3,
      initialValues,
      disabled,
      getFormInstance,
    } = this.props;
    if (!itemList || !itemList.length) {
      return null;
    }
    let list = itemList;

    if (Boolean(!disabled)) {
      list = list.concat([
        {
          content: (
            <div className="fb-ControlGroup">
              <span
                onClick={() => {
                  this.submit();
                }}
              >
                {this._defaultRenderSearchElement()}
              </span>
              <span
                onClick={() => {
                  if (this.form) {
                    this.form.resetFields();
                    this.submit();
                  }
                }}
              >
                {this._defaultRenderResetElement()}
              </span>
            </div>
          ),
        },
      ]);
    }

    const useHorizontal = columnNumber || itemList.length > inlineMaxNumber;
    return (
      <Form
        ref={target => {
          this.form = target;
          if (getFormInstance) {
            getFormInstance(this.form);
          }
        }}
        initialValues={initialValues}
        className={classnames(
          'fb-SearchForm',
          useHorizontal ? 'fb-SearchFormHorizontal' : '',
          className,
        )}
        style={style}
        layout={useHorizontal ? 'horizontal' : 'inline'}
      >
        {useHorizontal
          ? FormUtil.renderFormItems(list, columnNumber || inlineMaxNumber)
          : FormUtil.renderInlinFormItems(list)}
      </Form>
    );
  }
}

export default SearchForm;
