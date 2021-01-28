import { PureComponent, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
interface ITextState {
}
interface ITextProps extends IComponentProps {
    /**
     * 文本内容
     */
    text: string;
    /**
     * 文本长度，设置为0表示不显示
     */
    maxLen?: number;
    /**
     * 是否把富文本解析成纯文本
     */
    plainHtml?: boolean;
}
declare class Text extends PureComponent<ITextProps, ITextState> {
    render(): ReactNode;
}
export default Text;
