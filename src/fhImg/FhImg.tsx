import React, { Component, ReactNode } from 'react';
import Zmage from 'react-zmage';
import ImageFitType from '../enums/ImageFitType';
import IComponentProps from '../interfaces/IComponentProps';
const classnames = require('classnames');

interface IFhImgState {
}
interface IFhImgProps extends IComponentProps {
  /**
   * 图片地址
   */
  src: string
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
  onClick?: () => void
}


class FhImg extends Component<IFhImgProps, IFhImgState> {

  public static defaultProps = {
    isPreview: false,
    objectFit: ImageFitType.CONTAIN
  };

  private preview = (src: string) => {
    Zmage.browsing({ src })
  }

  onClick = () => {
    const { isPreview, src, onClick } = this.props
    if (isPreview) {
      this.preview(src)
    } else {
      onClick && onClick()
    }
  }

  public render(): ReactNode {
    const { objectFit, src, style = {}, className, width, height } = this.props
    return (
      <img
        src={src}
        onClick={this.onClick}
        className={classnames('FhImg', className)}
        style={{
          ...style,
          objectFit,
          width,
          height
        }}
      />

    );
  }

}

export default FhImg;