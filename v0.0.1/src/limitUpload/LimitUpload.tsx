import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, UploadProps } from 'antd/lib/upload/interface';
import React, { Component, ReactNode } from 'react';
import UploadAcceptType from '../enums/UploadAcceptType';
import UploadType from '../enums/UploadType';
import IComponentProps from '../interfaces/IComponentProps';

interface ILimitUploadState {
  loading: boolean;
  fileList: UploadFile<any>[];
}
interface ILimitUploadProps extends IComponentProps {
  /**
   * 验证文件是否上传成功。
   *
   * @return 返回是否上传成功
   */
  validateFile?: (file: UploadFile<any>) => boolean;

  /**
   * 上传出错的处理函数，不传则使用默认处理方法：message.error()显示错误提示
   */
  onError?: (file: UploadFile<any>) => void;

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
  onChange?: (value: UploadFile<any>[]) => void;

  /**
   * 默认的文件列表。
   *
   * 通常在编辑时，需要使用，例如：之前上传过的文件，可使用此属性设置
   */
  defaultFileList?: UploadFile<any>[];

  /**
   * 文件列表
   */
  value?: UploadFile<any>[];

  /**
   * 选择元素的渲染函数，如果没有，使用默认方案
   */
  renderChooser?: (loading?: boolean) => ReactNode;

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
  uploadProps?: UploadProps;
}

class LimitUpload extends Component<ILimitUploadProps, ILimitUploadState> {
  constructor(props: ILimitUploadProps) {
    super(props);
    const { defaultFileList, value } = props;
    this.state = {
      loading: false,
      fileList: value || defaultFileList || [],
    };
  }

  public componentDidUpdate() {
    if ('value' in this.props) {
      const value = this.props.value;
      const { fileList } = this.state;
      // 如果有值，且不相同，赋值；
      // 如果无值，但是state有值，清除state的值
      if (value) {
        if (value !== fileList) {
          this.setState({ fileList: value });
        }
      } else if (fileList && fileList.length) {
        this.setState({ fileList: [] });
      }
    }
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
    const { loading, fileList } = this.state;
    const { maxNumber, renderChooser, type, disabled } = this.props;

    const fileNumber = fileList.length;
    const chooseEnable = !maxNumber || fileNumber < maxNumber;
    if (!chooseEnable) {
      return null;
    }

    if (renderChooser) {
      return renderChooser(loading);
    }

    switch (type) {
      case UploadType.IMAGE:
        return (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">上传</div>
          </div>
        );
      default:
        return (
          <Button loading={loading} disabled={disabled} icon={<UploadOutlined />}>
            上传
          </Button>
        );
    }
  }

  private onChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const { validateFile } = this.props;
    // this.setState({ fileList: info.fileList });
    if (!validateFile) {
      throw new Error('need validateFile');
    }
    let loading = false;
    const file = info.file;

    const fileList = info.fileList;

    switch (file.status) {
      case 'done':
        const success = validateFile(file);
        if (success) {
          this.validateFileList(fileList);
        } else {
          this.onError(file);
        }
        break;
      case 'uploading':
        loading = true;
        break;
      case 'error':
        this.validateFileList(fileList);
        this.onError(file);
        break;
      case 'removed':
        this.validateFileList(fileList);
        break;
      default:
        break;
    }

    if (loading !== this.state.loading) {
      this.setState({ loading });
    }
  };

  private onError(file: UploadFile<any>) {
    const { onError } = this.props;
    if (onError) {
      onError(file);
    } else {
      message.error(`${file.name}上传失败`);
    }
  }

  private validateFileList(fileList: UploadFile<any>[]) {
    const { validateFile, onChange } = this.props;
    if (!validateFile) {
      throw new Error('need validateFile');
    }
    const newFileList = fileList.filter(file => {
      return validateFile(file);
    });
    this.setState({ fileList: newFileList }, () => {
      if (onChange) {
        onChange(newFileList);
      }
    });
  }

  public render(): ReactNode {
    const { type, disabled, action, uploadProps, disableCredentials } = this.props;
    const { fileList } = this.state;
    const props: UploadProps = {
      fileList,
      disabled,
      accept: this.getAccept(),
      action,
      withCredentials: !disableCredentials,
      onChange: this.onChange,
      listType: type === UploadType.IMAGE ? 'picture-card' : 'text',
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
