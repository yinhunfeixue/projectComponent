import { UploadFile, UploadProps } from 'antd/lib/upload/interface';
import { Component, ReactNode } from 'react';
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
declare class LimitUpload extends Component<ILimitUploadProps, ILimitUploadState> {
    constructor(props: ILimitUploadProps);
    componentDidUpdate(): void;
    private getAccept;
    private renderChooseer;
    private onChange;
    private onError;
    private validateFileList;
    render(): ReactNode;
}
export default LimitUpload;
