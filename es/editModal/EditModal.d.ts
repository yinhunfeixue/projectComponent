import { Store } from 'antd/lib/form/interface';
import { ModalProps } from 'antd/lib/modal';
import { Component, ReactNode } from 'react';
import { IEditFormProps } from '../editForm/EditForm';
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
declare class EditModal<T extends Store> extends Component<IEditModalProps<T>, IEditModalState> {
    private editForm;
    constructor(props: IEditModalProps<T>);
    private close;
    private renderTitle;
    private get readOnly();
    private renderFooter;
    render(): ReactNode;
}
export default EditModal;
