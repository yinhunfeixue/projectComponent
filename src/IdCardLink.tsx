import React, { Component, ReactNode } from 'react';
import { Col, Row } from 'antd';
import IComponentProps from './interfaces/IComponentProps';

interface IIdCardLinkState {}
interface IIdCardLinkProps extends IComponentProps {
  form: any;
}

class IdCardLink extends Component<IIdCardLinkProps, IIdCardLinkState> {
  public render(): ReactNode {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col>
        </Col>
      </Row>
    );
  }
}

export default IdCardLink;
