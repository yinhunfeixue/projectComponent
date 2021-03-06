# PowerImg

简单的图片封装，支持三种不拉伸的图片填充模式，图片预览

### 主要做了以下工作

- 屏蔽拉伸类不友好的图片填充模式
- 图片地址及宽高用属性设置
- 配置预览功能

### 后期

如果你需要更强大，定制的图片功能，请联系我

## 示例

### 默认

```tsx
import React from 'react';
import { PowerImg, ImageFitType } from 'fb-project-component';
import { Select } from 'antd';

export default class PowerImgDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '120',
      height: '80',
      objectFit: 'cover',
      isPreview: '1',
    };
    this.url =
      'http://my-bucket-1111-1301126387.cos-website.ap-guangzhou.myqcloud.com/media/large/2d13d416f80245b8cdacb342954ee5a2.jpg';

    this.widthPros = [
      { key: '1', value: '120' },
      { key: '2', value: '480' },
      { key: '3', value: '960' },
    ];

    this.heightPros = [
      { key: '1', value: '80' },
      { key: '2', value: '320' },
      { key: '3', value: '560' },
    ];

    this.objectFitPros = [
      { key: '1', value: ImageFitType.COVER },
      { key: '2', value: ImageFitType.CONTAIN },
      { key: '3', value: ImageFitType.NONE },
    ];

    this.previewPros = [
      { key: '1', value: '1', label: '预览' },
      { key: '2', value: '', label: '不预览' },
    ];
  }

  handleChange(value, prop) {
    switch (prop) {
      case 'width':
        this.setState({
          width: value,
        });
        break;
      case 'height':
        this.setState({
          height: value,
        });
        break;
      case 'objectFit':
        this.setState({
          objectFit: value,
        });
        break;
      case 'isPreview':
        this.setState({
          isPreview: value,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { width, height, objectFit, isPreview } = this.state;
    const style = {
      backgroundColor: 'gray',
    };
    return (
      <div>
        宽度设置
        <Select
          defaultValue="120"
          style={{ width: 120, marginRight: 15, marginLeft: 5 }}
          onChange={value => this.handleChange(value, 'width')}
        >
          {this.widthPros.map(item => (
            <Select.Option key={item.key} value={item.value}>
              {item.value}
            </Select.Option>
          ))}
        </Select>
        高度设置
        <Select
          defaultValue="80"
          style={{ width: 120, marginRight: 15, marginLeft: 5 }}
          onChange={value => this.handleChange(value, 'height')}
        >
          {this.heightPros.map(item => (
            <Select.Option key={item.key} value={item.value}>
              {item.value}
            </Select.Option>
          ))}
        </Select>
        填充模式
        <Select
          defaultValue="cover"
          style={{ width: 120, marginRight: 15, marginLeft: 5 }}
          onChange={value => this.handleChange(value, 'objectFit')}
        >
          {this.objectFitPros.map(item => (
            <Select.Option key={item.key} value={item.value}>
              {item.value}
            </Select.Option>
          ))}
        </Select>
        预览
        <Select
          defaultValue="1"
          style={{ width: 120, marginLeft: 5 }}
          onChange={value => this.handleChange(value, 'isPreview')}
        >
          {this.previewPros.map(item => (
            <Select.Option key={item.key} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
        <div style={{ marginTop: 25 }}>
          <PowerImg
            style={style}
            isPreview={!!isPreview}
            objectFit={objectFit}
            width={parseInt(width)}
            height={parseInt(height)}
            src={this.url}
          />
        </div>
      </div>
    );
  }
}
```

## 属性

<API src='../../src/powerImg/PowerImg.tsx'/>
