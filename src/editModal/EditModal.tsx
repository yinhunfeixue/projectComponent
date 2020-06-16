import { Modal } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { ModalProps } from 'antd/lib/modal';
import React, { Component, ReactNode } from 'react';
import EditForm, { IEditFormProps } from '../editForm/EditForm';
import IComponentProps from '../interfaces/IComponentProps';

interface IEditModalState {}
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
  public render(): ReactNode {
    const { visible, editFormProps, modalProps, className, style } = this.props;
    const { onOk } = editFormProps;
    return (
      <Modal
        className={className}
        style={style}
        {...modalProps}
        title={this.renderTitle()}
        destroyOnClose
        visible={visible}
        footer={null}
        onCancel={this.close}
      >
        <EditForm
          onCancel={this.close}
          {...editFormProps}
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
