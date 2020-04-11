import { Select } from 'antd';
import React, { Component, ReactNode } from 'react';
import ImageFitType from '../enums/ImageFitType';
import IComponentProps from '../interfaces/IComponentProps';
import FhImg from './FhImg';
const { Option } = Select;

const url = 'http://my-bucket-1111-1301126387.cos-website.ap-guangzhou.myqcloud.com/media/large/2d13d416f80245b8cdacb342954ee5a2.jpg'

const widthPros = [
  { key: '1', value: '120' },
  { key: '2', value: '480' },
  { key: '3', value: '960' }
]
const heightPros = [
  { key: '1', value: '80' },
  { key: '2', value: '320' },
  { key: '3', value: '560' }
]

const objectFitPros = [
  { key: '1', value: ImageFitType.CONTAIN },
  { key: '2', value: ImageFitType.COVER },
  { key: '3', value: ImageFitType.NONE },
]

const previewPros = [
  { key: '1', value: '', label: '不预览' },
  { key: '2', value: '1', label: '预览' },
]


interface SuitImgDemoState {
  width: string;
  height: string;
  objectFit: ImageFitType;
  isPreview: string;
}
interface SuitImgDemoProps extends IComponentProps { }

//FhImg可以用的属性
enum Properties {
  WIDTH = "width",
  HEIGHT = "height",
  STYLES = "styles",
  IMAGE_FIT_TYPE = "imageFitType",
  IS_PREVIEW = "isPreview",
}


class SuitImgDemo extends Component<SuitImgDemoProps, SuitImgDemoState> {


  constructor(props: SuitImgDemoProps) {
    super(props);
    this.state = {
      width: '120',
      height: '80',
      objectFit: ImageFitType.CONTAIN,
      isPreview: ''
    };
  }

  handleChange(value: string | ImageFitType, prop: Properties) {
    switch (prop) {
      case Properties.WIDTH:
        this.setState({
          width: value
        })
        break;
      case Properties.HEIGHT:
        this.setState({
          height: value
        })
        break;
      case Properties.IMAGE_FIT_TYPE:
        this.setState({
          objectFit: (value as ImageFitType)
        })
        break;
      case Properties.IS_PREVIEW:
        this.setState({
          isPreview: value
        })
        break;
      default:
        break;
    }
  }

  public render(): ReactNode {

    const { width, height, objectFit, isPreview } = this.state
    const style = {
      backgroundColor: 'gray',
    }
    return (
      <>
        宽度设置
        <Select defaultValue="120" style={{ width: 120, marginRight: 15, marginLeft: 5 }} onChange={(value) => this.handleChange(value, Properties.WIDTH)}>
          {widthPros.map(item => <Option key={item.key} value={item.value}>{item.value}</Option>)}
        </Select>
        高度设置
        <Select defaultValue="80" style={{ width: 120, marginRight: 15, marginLeft: 5 }} onChange={(value) => this.handleChange(value, Properties.HEIGHT)}>
          {heightPros.map(item => <Option key={item.key} value={item.value}>{item.value}</Option>)}
        </Select>
        填充模式
        <Select defaultValue="contain" style={{ width: 120, marginRight: 15, marginLeft: 5 }} onChange={(value) => this.handleChange(value, Properties.IMAGE_FIT_TYPE)}>
          {objectFitPros.map(item => <Option key={item.key} value={item.value}>{item.value}</Option>)}
        </Select>
        预览
        <Select defaultValue="" style={{ width: 120, marginLeft: 5 }} onChange={(value) => this.handleChange(value, Properties.IS_PREVIEW)}>
          {previewPros.map(item => <Option key={item.key} value={item.value}>{item.label}</Option>)}
        </Select>
        <div style={{ marginTop: 25 }}>
          <FhImg
            style={style}
            isPreview={!!isPreview}
            objectFit={objectFit}
            width={parseInt(width)}
            height={parseInt(height)}
            src={url} />
        </div>

      </>
    );
  }

}

export default SuitImgDemo;
