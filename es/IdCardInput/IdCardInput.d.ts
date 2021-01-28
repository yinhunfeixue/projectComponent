import { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
interface IIdCardInputState {
    value: any;
}
interface IIdCardInputProps extends IComponentProps {
    /**
     * 身份证初始值
     */
    value?: string;
    /**
     * 输入正确身份证后的回调
     */
    onSuccess: (values: any) => void;
    onChange: (value: any) => void;
}
declare class IdCardInput extends Component<IIdCardInputProps, IIdCardInputState> {
    state: IIdCardInputState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IIdCardInputProps): void;
    setIdCardInfo: (value: any) => void;
    onChange: (e: {
        target: {
            value: any;
        };
    }) => void;
    render(): ReactNode;
}
export default IdCardInput;
