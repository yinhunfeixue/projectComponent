import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: {
    type: 'babel',
  },
  esm: {
    type: 'babel',
  },
  lessInBabelMode: true,
  doc: {
    typescript: true,
    title: '烽火工程组件',
    base: '/projectComponent/',
    htmlContext: {
      lang: '',
      head: {
        raw: '',
        links: [],
        meta: [],
        scripts: [],
      },
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

export default options;
