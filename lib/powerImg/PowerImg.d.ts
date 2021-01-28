import { Component, ReactNode } from 'react';
import ImageFitType from '../enums/ImageFitType';
import IComponentProps from '../interfaces/IComponentProps';
interface IPowerImgState {
}
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
declare class PowerImg extends Component<IPowerImgProps, IPowerImgState> {
    static defaultProps: {
        isPreview: boolean;
        objectFit: ImageFitType;
    };
    private preview;
    onClick: () => void;
    render(): ReactNode;
}
export default PowerImg;
