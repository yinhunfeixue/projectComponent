export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true,

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
