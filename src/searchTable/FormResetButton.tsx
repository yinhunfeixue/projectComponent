import React, { Component, ReactNode } from 'react';
import { Button } from 'antd';
import { Context } from './SearchTable';

class FormResetButton extends Component<any> {
  public static contextType = Context;

  public render(): ReactNode {
    return (
      <Button
        onClick={() => {
          if (this.context.reset) {
            this.context.reset();
          }
          // 临时清楚url里的初始值
          if (this.props.clear) {
            this.props.clear();
          }
        }}
      >
        重置
      </Button>
    );
  }
}

export default FormResetButton;
