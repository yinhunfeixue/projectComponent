import React, { Component, ReactNode } from 'react';
import { Button } from 'antd';
import { Context } from './SearchTable';

class FormRefreshButton extends Component<any> {
  public static contextType = Context;

  public render(): ReactNode {
    return (
      <Button
        type="primary"
        onClick={() => {
          if (this.context.refresh) {
            this.context.refresh();
          }
        }}
      >
        查询
      </Button>
    );
  }
}

export default FormRefreshButton;
