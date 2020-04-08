import { Input } from 'antd';
import React, { Component, ReactNode } from 'react';
import lodash from 'lodash';
import IComponentProps from './interfaces/IComponentProps';

const IdCard = require('idcard');

interface IIdCardLinkState {}
interface IIdCardLinkProps extends IComponentProps {
  value?: string;
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
    return <Input onChange={this.onChange} />;
  }
}

export default IdCardLink;
