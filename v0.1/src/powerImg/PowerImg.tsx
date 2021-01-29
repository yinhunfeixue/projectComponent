import React, { Component, ReactNode } from 'react';
import ImageFitType from '../enums/ImageFitType';
import IComponentProps from '../interfaces/IComponentProps';

const Zmage = require('react-zmage').default;
const classnames = require('classnames');

interface IPowerImgState {}
interface IPowerImgProps extends IComponentProps {
  /**
   * 图片地址
   */
  src: string;
  /**
   * 图片填充模式
   */
  objectFit?: ImageFitType;
  /**
   * 图片宽度
   */
  width?: number;
  /**
   *  图片高度
   */
  height?: number;
  /**
   * 是否预览，如果设置预览将占用点击事件
   */
  isPreview?: boolean;
  /**
   * 点击事件
   */
  onClick?: () => void;
}

class PowerImg extends Component<IPowerImgProps, IPowerImgState> {
  public static defaultProps = {
    isPreview: true,
    objectFit: ImageFitType.COVER,
  };

  private preview = (src: string) => {
    Zmage.browsing({ src });
  };

  onClick = () => {
    const { isPreview, src, onClick } = this.props;
    if (isPreview) {
      this.preview(src);
    } else {
      onClick && onClick();
    }
  };

  public render(): ReactNode {
    const { objectFit, src, style = {}, className, width, height } = this.props;
    return (
      <img
        src={src}
        onClick={this.onClick}
        className={classnames('PowerImg', className)}
        style={{
          ...style,
          objectFit,
          width,
          height,
        }}
      />
    );
  }
}

export default PowerImg;
