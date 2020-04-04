import { Button, Icon, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';

export enum UploadType {
  FILE,
  IMAGE,
}

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
   */
  type?: UploadType;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  onChange?: (value: any) => void;

  defaultFileList?: UploadFile<any>[];

  /**
   * 选择元素的渲染函数，如果没有，使用默认方案
   */
  chooserRender?: () => ReactNode;
}

class LimitUpload extends Component<ILimitUploadProps, ILimitUploadState> {
  constructor(props: ILimitUploadProps) {
    super(props);
    const { defaultFileList } = props;
    this.state = {
      fileNumber: defaultFileList ? defaultFileList.length : 0,
    };
  }

  public render(): ReactNode {
    const { type, disabled, maxNumber, onChange, defaultFileList, chooserRender } = this.props;
    const uploadProps = {
      disabled,
      defaultFileList,
      onChange: (info: UploadChangeParam<UploadFile<any>>) => {
        console.log(info);
        this.setState({ fileNumber: info.fileList.length });
        if (onChange) {
          onChange(info);
        }
      },
    };

    const { fileNumber } = this.state;
    const addAble = !maxNumber || fileNumber < maxNumber;
    switch (type) {
      case UploadType.IMAGE:
        return (
          <Upload {...uploadProps} listType="picture-card">
            {addAble &&
              (chooserRender ? (
                chooserRender()
              ) : (
                <div>
                  <Icon type="plus" />
                  <div className="ant-upload-text">Upload</div>
                </div>
              ))}
          </Upload>
        );
      default:
        return (
          <Upload {...uploadProps}>
            {addAble && chooserRender ? (
              chooserRender()
            ) : (
              <Button disabled={disabled}>Upload</Button>
            )}
          </Upload>
        );
    }
  }
}

export default LimitUpload;
