import { Button, Modal } from 'antd';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import './ConfirmButton.less';

const classnames = require('classnames');

interface IConfirmButtonState {}
interface IConfirmButtonProps extends IComponentProps {
  /**
   * 确认成功后，触发的事件
   */
  onConfirm?: () => void;

  /**
   * 是否确认的方法，默认为弹窗并由用户选择。
   *
   * 自定义验证函数须返回 Promise<boolean>，为true时，表示确认
   */
  validate?: () => Promise<boolean>;

  /**
   * 如果使用默认的弹窗验证方式，且需要自定义文字，可使用此属性
   */
  modalContent?: {
    /**
     * 弹窗标题
     */
    title: string;

    /**
     * 弹窗内容
     */
    content: string;
  };
}

/**
 * 确认按钮
 */
class ConfirmButton extends Component<IConfirmButtonProps, IConfirmButtonState> {
  public render(): ReactNode {
    const { className, style } = this.props;
    return (
      <span
        className={classnames('ConfirmButton', className)}
        style={style}
        onClick={this.clickHandler}
      >
        {this.getChildren()}
      </span>
    );
  }

  private clickHandler = async () => {
    const { onConfirm, validate } = this.props;
    let isConfirm = false;
    if (validate) {
      isConfirm = await validate();
    } else {
      isConfirm = await this.defaultValidate();
    }

    if (isConfirm && onConfirm) {
      onConfirm();
    }
  };

  private defaultValidate(): Promise<boolean> {
    return new Promise(resolve => {
      Modal.confirm({
        title: '操作不可恢复',
        content: '此操作不可恢复，请确认是否继续',
        onOk: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        },
      });
    });
  }

  private getChildren() {
    return this.props.children || <Button>删除</Button>;
  }
}

export default ConfirmButton;
