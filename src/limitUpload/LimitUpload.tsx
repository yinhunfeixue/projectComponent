import { Button, Icon, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, UploadProps } from 'antd/lib/upload/interface';
import React, { Component, ReactNode } from 'react';
import UploadAcceptType from '../enums/UploadAcceptType';
import UploadType from '../enums/UploadType';
import IComponentProps from '../interfaces/IComponentProps';

interface ILimitUploadState {
  fileNumber: number;
}
interface ILimitUploadProps extends IComponentProps {
  /**
   * 最大允许上传的文件数量
   */
  maxNumber?: number;

  /**
   * 类型，是普通文件还是图像
   *
   * @see UploadType
   */
  type?: UploadType;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 文件发生变化时触发的事件
   */
  onChange?: (value: UploadChangeParam<UploadFile<any>>) => void;

  /**
   * 未操作时，默认的文件列表。
   *
   * 通常在编辑时，需要使用，例如：之前上传过的文件，可使用此属性设置
   */
  defaultFileList?: UploadFile<any>[];

  /**
   * 选择元素的渲染函数，如果没有，使用默认方案
   */
  chooserRender?: () => ReactNode;

  /**
   * 可选的文件后缀。
   *
   * 不设置，则根据type自动设置
   *
   * @example ".jpg, .png"
   */
  accept?: string | UploadAcceptType;

  /**
   * 上传接口路径
   */
  action?: string;

  /**
   * 是否禁用cookie
   */
  disableCredentials?: boolean;

  /**
   * 其它要传给Upload的props，此属性的优先级高于其它属性。
   *
   * 例如：在此属性设置了accept，则优先使用此处设置的accept
   */
  uploadProps: UploadProps;
}

class LimitUpload extends Component<ILimitUploadProps, ILimitUploadState> {
  constructor(props: ILimitUploadProps) {
    super(props);
    const { defaultFileList } = props;
    this.state = {
      fileNumber: defaultFileList ? defaultFileList.length : 0,
    };
  }

  private getAccept() {
    const { accept, type } = this.props;
    if (accept === undefined) {
      switch (type) {
        case UploadType.IMAGE:
          return UploadAcceptType.IMAGE;
        default:
          return '';
      }
    }
    return accept;
  }

  private renderChooseer() {
    const { fileNumber } = this.state;
    const { maxNumber, chooserRender, type, disabled } = this.props;

    const chooseEnable = !maxNumber || fileNumber < maxNumber;
    if (!chooseEnable) {
      return null;
    }

    if (chooserRender) {
      return chooserRender();
    }

    switch (type) {
      case UploadType.IMAGE:
        return (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
      default:
        return <Button disabled={disabled}>Upload</Button>;
    }
  }

  public render(): ReactNode {
    const {
      type,
      disabled,
      onChange,
      defaultFileList,
      action,
      uploadProps,
      disableCredentials,
    } = this.props;
    const props: UploadProps = {
      disabled,
      defaultFileList,
      accept: this.getAccept(),
      action,
      withCredentials: !disableCredentials,
      onChange: (info: UploadChangeParam<UploadFile<any>>) => {
        this.setState({ fileNumber: info.fileList.length });
        if (onChange) {
          onChange(info);
        }
      },
      ...uploadProps,
    };

    switch (type) {
      case UploadType.IMAGE:
        return (
          <Upload {...props} listType="picture-card">
            {this.renderChooseer()}
          </Upload>
        );
      default:
        return <Upload {...props}>{this.renderChooseer()}</Upload>;
    }
  }
}

export default LimitUpload;
