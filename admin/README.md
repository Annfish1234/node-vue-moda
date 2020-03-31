# admin

> 管理系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 报错
1. npm audit fix 含义： 检测项目依赖中的漏洞并自动安装需要更新的有漏洞的依赖，而不必再自己进行跟踪和修复。
解决:
$npm audit fix –force
$npm audit
$npm run dev

2. 安装element-ui,必须要安装node-sass,saaa-loader,否则就会报vue-loader,css-loader错误.