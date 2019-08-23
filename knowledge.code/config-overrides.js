const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
const path = require('path')

 module.exports = override(
  //  antd按需加载
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
  //  less配置
   addLessLoader({
       javascriptEnabled: true,
       modifyVars: { 
        //  '@primary-color': 'red',
        //  '@link-color': 'green'
        },
     }),
    // 配置路径别名
  addWebpackAlias({
    ["pages"]: path.resolve(__dirname, "src/pages"),
    ["components"]: path.resolve(__dirname, "src/components")
  }),
 );