import { Input } from 'antd';
import lodash from 'lodash';
import React, { Component, ReactNode } from 'react';
import IComponentProps from './interfaces/IComponentProps';

const IdCard = require('idcard');
const classnames = require('classnames');

interface IIdCardLinkState {}
interface IIdCardLinkProps extends IComponentProps {
  /**
   * 身份证初始值
   */
  value?: string;
  /**
   * 输入正确身份证后的回调
   */
  getIdCardInfo: (values: any) => void;
}

class IdCardLink extends Component<IIdCardLinkProps, IIdCardLinkState> {
  componentDidMount() {
    const { value } = this.props;
    this.setIdCardInfo(value);
  }

  componentDidUpdate(prevProps: IIdCardLinkProps) {
    if (!lodash.isEqual(this.props.value, prevProps.value)) {
      const { value } = this.props;
      this.setIdCardInfo(value);
    }
  }

  setIdCardInfo = (value: any) => {
    const { getIdCardInfo } = this.props;
    if (value && IdCard.verify(value)) {
      const info = IdCard.info(value);
      getIdCardInfo(info);
    }
  };

  onChange = (e: { target: { value: any } }) => {
    const idCard = e.target.value;
    this.setIdCardInfo(idCard);
  };

  public render(): ReactNode {
    const { className, style } = this.props;
    return (
      <span className={classnames('IdCardLink', className)} style={style}>
        <Input onChange={this.onChange} value={this.props.value} />
      </span>
    );
  }
}

export default IdCardLink;
