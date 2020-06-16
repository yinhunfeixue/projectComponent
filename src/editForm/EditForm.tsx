import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import { Store } from 'antd/lib/form/interface';
import React, { Component, ReactNode } from 'react';
import EditFormType from '../enums/EditFormType';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import FormUtil from '../utils/FormUtil';
import './EditForm.less';

interface IEditFormState {
  loading: boolean;
}
interface IEditFormProps<T> extends IComponentProps {
  /**
   * 新增函数，then表示成功，catch表示异常
   */
  addFunction?: (value: Store) => Promise<any>;

  /**
   * 编辑函数，then表示成功，catch表示异常
   */
  updateFunction?: (value: Store, source: T) => Promise<any>;

  /**
   * 源数据，如果是“编辑模式”，且设置了“源数据”，保存时调用编辑函数
   */
  source?: T;

  /**
   * 窗口模式，编辑还是查看
   */
  type?: EditFormType;

  formItemList: IFormItemData[];

  columnsCount?: number;

  key?: string;

  onCancel?: () => void;

  onOk?: () => void;

  onError?: (error: any) => void;
}

/**
 * 编辑表单，支持：编辑，阅读两种模式；会自行判断是新增还是修改
 */
class EditForm<T extends Store> extends Component<IEditFormProps<T>, IEditFormState> {
  constructor(props: IEditFormProps<T>) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  private save(value: Store) {
    const { source, addFunction, updateFunction } = this.props;
    let promise: Promise<any> | null = null;
    if (source) {
      if (updateFunction) {
        promise = updateFunction(value, source);
      }
    } else {
      if (addFunction) {
        promise = addFunction(value);
      }
    }

    if (promise) {
      this.setState({ loading: true });
      promise
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    }
  }

  private get readOnly() {
    const { source, updateFunction } = this.props;
    return source && !updateFunction;
  }

  private getControlList() {
    const { loading } = this.state;
    const { onCancel } = this.props;
    if (this.readOnly) {
      return [];
    }
    return [
      {
        span: 24,
        content: (
          <div className="fhControlGroup">
            <Button type="primary" loading={loading} htmlType="submit">
              保存
            </Button>
            <Button
              disabled={loading}
              onClick={() => {
                if (onCancel) {
                  onCancel();
                }
              }}
            >
              取消
            </Button>
          </div>
        ),
      },
    ];
  }

  public render(): ReactNode {
    const { formItemList, columnsCount = 1, source, key = 'id' } = this.props;
    const controlList: IFormItemData[] = this.getControlList();
    const readOnly = this.readOnly;
    if (readOnly) {
      formItemList.forEach(item => {
        if (item.content && React.isValidElement(item.content)) {
          item.content = React.cloneElement(item.content, { disabled: true });
        }
      });
    }
    return (
      <div className="fhEditForm">
        <Form
          key={source ? source[key] : ''}
          initialValues={source}
          onFinish={value => {
            this.save(value);
          }}
        >
          {FormUtil.renderFormItems(formItemList.concat(controlList), columnsCount)}
        </Form>
      </div>
    );
  }
}

export default EditForm;
