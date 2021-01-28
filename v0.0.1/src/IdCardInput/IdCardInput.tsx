import { Input } from 'antd';
import lodash from 'lodash';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';

const IdCard = require('idcard');
const classnames = require('classnames');

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

class IdCardInput extends Component<IIdCardInputProps, IIdCardInputState> {
  state: IIdCardInputState = {
    value: this.props.value,
  };
  componentDidMount() {
    const { value } = this.props;
    this.setIdCardInfo(value);
  }

  componentDidUpdate(prevProps: IIdCardInputProps) {
    if (!lodash.isEqual(this.props.value, prevProps.value)) {
      const { value } = this.props;
      this.setState({
        value,
      });
      this.setIdCardInfo(value);
    }
  }

  setIdCardInfo = (value: any) => {
    const { onSuccess } = this.props;
    if (value && IdCard.verify(value)) {
      const info = IdCard.info(value);
      onSuccess(info);
    } else {
      onSuccess({
        province: {},
        city: {},
        area: {},
      });
    }
  };

  onChange = (e: { target: { value: any } }) => {
    const idCard = e.target.value;
    const { onChange } = this.props;
    this.setState(
      {
        value: idCard,
      },
      () => {
        this.setIdCardInfo(idCard);
      },
    );
    if (onChange) {
      onChange(idCard);
    }
  };

  public render(): ReactNode {
    const { className, style } = this.props;
    return (
      <span className={classnames('IdCardInput', className)} style={style}>
        <Input onChange={this.onChange} value={this.state.value} />
      </span>
    );
  }
}

export default IdCardInput;
