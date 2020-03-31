## 1.安装sass后报错 'npm install --save !!vue-style-loader!css-loader?{"sourceMap":t'
此类问题一般是缺少相关依赖而导致的,css解析出错.
$npm install sass sass-loader --save-dev
//sass-loader依赖于node-sass
$npm install node-sass vue-style-loader  --save-dev

> 解决
 1. 常规解决:npm install stylus stylus-loader  style-loader --save-dev
 2. 最后解决办法: 删除node_modules文件夹,重新执行npm install

> 注意:sass语法不带大括号和分好,缩进语法.
如果不习惯,就用scss,可以使用大括号和分号.需要配置格式:

> build/webpack.base.conf.js 配置
```js
{
    test: /\.scss$/,
    loaders:['style','css','sass']
}
```

