import { Button } from 'antd';
import { BaseButtonProps, ButtonHTMLType } from 'antd/lib/button/button';
import React, { Component, ReactNode } from 'react';

interface IPromiseButtonState {
  loading: boolean;
}
interface IPromiseButtonProps extends BaseButtonProps {
  htmlType?: ButtonHTMLType;
  onClick?:
    | React.MouseEventHandler<HTMLElement>
    | ((event: React.MouseEvent) => Promise<any>);
}

class PromiseButton extends Component<
  IPromiseButtonProps,
  IPromiseButtonState
> {
  constructor(props: IPromiseButtonProps) {
    super(props);
    this.state = { loading: false };
  }
  public render(): ReactNode {
    const { onClick } = this.props;
    const { loading } = this.state;
    return (
      <Button
        {...this.props}
        loading={loading}
        onClick={event => {
          if (onClick) {
            const result = onClick(event);
            if (result instanceof Promise) {
              this.setState({ loading: true });
              result.finally(() => {
                this.setState({ loading: false });
              });
            }
          }
        }}
      />
    );
  }
}

export default PromiseButton;
