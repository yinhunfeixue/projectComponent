import { Button, Modal } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { ModalProps } from 'antd/lib/modal';
import React, { Component, ReactNode } from 'react';
import EditForm, { IEditFormProps } from '../editForm/EditForm';
import IComponentProps from '../interfaces/IComponentProps';

interface IEditModalState {
  loading: boolean;
}
interface IEditModalProps<T> extends IComponentProps {
  /**
   * 窗口显示还是隐藏
   */
  visible: boolean;

  /**
   * 关闭Modal的方法，一般是外层页面的`setState({visibleModal: false})`
   */
  close: () => void;

  /**
   * 透传给EditForm的props
   */
  editFormProps: IEditFormProps<T>;

  /**
   * 透传给Modal的props
   */
  modalProps?: ModalProps;

  /**
   * 自定义渲染标题的方法
   */
  renderTitle?: () => ReactNode;
}

class EditModal<T extends Store> extends Component<IEditModalProps<T>, IEditModalState> {
  private editForm: EditForm<T> | null = null;

  constructor(props: IEditModalProps<T>) {
    super(props);
    this.state = { loading: false };
  }

  private close = () => {
    const { close } = this.props;
    if (close) {
      close();
    }
  };

  private renderTitle() {
    const { editFormProps, renderTitle } = this.props;
    if (renderTitle) {
      return renderTitle();
    }
    const { source, updateFunction } = editFormProps;
    if (!source) {
      return '新增';
    } else if (!updateFunction) {
      return '查看';
    } else {
      return '编辑';
    }
  }

  private get readOnly() {
    const { editFormProps } = this.props;
    const { source, updateFunction } = editFormProps;
    return source && !updateFunction;
  }

  private renderFooter() {
    const { loading } = this.state;
    if (this.readOnly) {
      return null;
    }
    return (
      <>
        <Button
          disabled={loading}
          onClick={() => {
            if (this.editForm) {
              this.editForm.cancel();
            }
          }}
        >
          取消
        </Button>
        <Button
          loading={loading}
          type="primary"
          onClick={() => {
            if (this.editForm) {
              this.editForm.submit();
            }
          }}
        >
          保存
        </Button>
      </>
    );
  }

  public render(): ReactNode {
    const { visible, editFormProps, modalProps, className, style } = this.props;
    const { onOk } = editFormProps;
    const { loading } = this.state;
    return (
      <Modal
        className={className}
        style={style}
        maskClosable={!loading}
        {...modalProps}
        title={this.renderTitle()}
        destroyOnClose
        visible={visible}
        footer={this.renderFooter()}
        onCancel={this.close}
        closable={!loading}
      >
        <EditForm
          ref={target => {
            if (this.editForm !== target) {
              this.editForm = target;
            }
          }}
          onLoadingChange={loading => {
            this.setState({ loading });
          }}
          hideControls
          {...editFormProps}
          onCancel={() => {
            this.close();
            if (editFormProps.onCancel) {
              editFormProps.onCancel();
            }
          }}
          onOk={() => {
            this.close();
            if (onOk) {
              onOk();
            }
          }}
        />
      </Modal>
    );
  }
}

export default EditModal;
