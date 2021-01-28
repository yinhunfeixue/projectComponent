import { Button } from 'antd';
import Form, { FormInstance } from 'antd/lib/form/Form';
import { Store } from 'antd/lib/form/interface';
import L from 'lodash';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import IFormItemData from '../interfaces/IFormItemData';
import FormUtil from '../utils/FormUtil';
import './EditForm.less';

interface IEditFormState<T> {
  loading: boolean;
  source?: T;
}
export interface IEditFormProps<T> extends IComponentProps {
  /**
   * 新增函数，then表示成功，catch表示异常
   */
  addFunction?: (value: Store) => Promise<any>;

  /**
   * 编辑函数，then表示成功，catch表示异常
   */
  updateFunction?: (value: Store, source: T) => Promise<any>;

  /**
   * 获取源数据完整信息的方法。
   * 当props.source只是部分信息，而表单中需要展示完整信息时，需通过此方法获取完整数据
   */
  getDetailFunction?: (source: T) => Promise<T>;

  /**
   * 源数据，如果是“编辑模式”，且设置了“源数据”，保存时调用编辑函数
   */
  source?: T;

  /**
   * 表单项列表
   */
  formItemList: IFormItemData[];

  /**
   * 列数
   */
  columnsCount?: number;

  /**
   * 主键名称
   */
  key?: string;

  /**
   * 取消事件
   */
  onCancel?: () => void;

  /**
   * 保存成功事件
   */
  onOk?: () => void;

  /**
   * 保存出错的事件
   */
  onError?: (error: any) => void;

  /**
   * 是否隐藏操作按钮，如果设置为true，需自定义控制按钮
   */
  hideControls?: Boolean;

  onLoadingChange?: (value: boolean) => void;
}

/**
 * 编辑表单，支持：编辑，阅读两种模式；会自行判断是新增还是修改
 */
class EditForm<T extends Store> extends Component<IEditFormProps<T>, IEditFormState<T>> {
  private formRef = React.createRef<FormInstance>();

  constructor(props: IEditFormProps<T>) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  public submit() {
    if (this.formRef.current) {
      this.formRef.current.submit();
    }
  }

  public cancel() {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  componentDidMount() {
    this.updateStateSource();
  }

  componentDidUpdate(prevProps: IEditFormProps<T>) {
    if (!L.isEqual(this.props.source, prevProps.source)) {
      this.updateStateSource();
    }
  }

  private async updateStateSource() {
    const { source, getDetailFunction } = this.props;
    if (!source) {
      this.setState({ source: undefined });
    } else if (getDetailFunction) {
      const data = await getDetailFunction(source);
      this.setState({ source: data });
    } else {
      this.setState({ source });
    }
  }

  private setLoading(loading: boolean) {
    const { onLoadingChange } = this.props;
    this.setState({ loading });
    if (onLoadingChange) {
      onLoadingChange(loading);
    }
  }

  private save(value: Store) {
    const { addFunction, updateFunction, onOk, onError } = this.props;
    const { source } = this.state;
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
      this.setLoading(true);
      promise
        .then(() => {
          if (onOk) {
            onOk();
          }
        })
        .catch(error => {
          if (onError) {
            onError(error);
          }
        })
        .finally(() => {
          this.setLoading(false);
        });
    }
  }

  private get readOnly() {
    const { source, updateFunction } = this.props;
    return source && !updateFunction;
  }

  private getControl = () => {
    const { loading } = this.state;

    if (this.readOnly) {
      return null;
    }

    return (
      <div className="fhControlGroup">
        <Button type="primary" loading={loading} htmlType="submit">
          保存
        </Button>
        <Button
          disabled={loading}
          onClick={() => {
            this.cancel();
          }}
        >
          取消
        </Button>
      </div>
    );
  };

  private getControlFormItemList(): IFormItemData[] {
    if (this.readOnly) {
      return [];
    }
    return [
      {
        span: 24,
        content: this.getControl(),
      },
    ];
  }

  public render(): ReactNode {
    const {
      formItemList,
      columnsCount = 1,
      key = 'id',
      className,
      style,
      hideControls,
    } = this.props;
    const { source } = this.state;
    const controlList: IFormItemData[] = hideControls ? [] : this.getControlFormItemList();
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
          ref={this.formRef}
          className={className}
          style={style}
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
