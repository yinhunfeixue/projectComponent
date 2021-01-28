import { Tooltip } from 'antd';
import React, { PureComponent, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import HtmlUtil from '../utils/HtmlUtil';

interface ITextState {}
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

class Text extends PureComponent<ITextProps, ITextState> {
  public render(): ReactNode {
    const { text, maxLen = 15, plainHtml, className, style } = this.props;
    let plainText = plainHtml ? HtmlUtil.plainHtml(text) : text;
    const showTooltip = maxLen && maxLen < plainText.length;
    const useText = showTooltip ? plainText?.substr(0, maxLen) + '...' : plainText;

    const element = (
      <span className={className} style={style}>
        {useText}
      </span>
    );

    if (showTooltip) {
      return <Tooltip title={plainText}>{element}</Tooltip>;
    }
    return element;
  }
}

export default Text;
