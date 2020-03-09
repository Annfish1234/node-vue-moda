##初始化项目
1.项目介绍
2.初始化项目
$npm init
#全局安装vue
$npm i -g @vue/cli
服务端:nodejs ,$mkdir server
移动端:vue搭建app, $vue create web  
管理端:vue搭建管理系统, $vue create admin or $vue init webpack admin

##服务端
$cd server
$cnpm init -y  //生成package.json文件
#package.json自定义脚本,npm启动代替nodemon
scripts:{"serve":"nodemon index.js",}
#全局安装nodemon
$cnpm i -g nodemon
#启动后台项目
$cnpm run serve


##后台管理系统 admin
1.基于Element-ui的后台管理基础界面搭建
$npm i element-ui -S  或者 $vue add element
1.创建分类(多层级)
1.分类列表
1.修改分类
1.删除分类


1. **通用CRUD 接口**
PS:安装的插件:router,axios,element-ui,建议采用vue add router这样添加.可以自动注册,组件自动编辑成路由
PS2:vue3.0 没有webpack配置文件,需要的话自己创建vue.config.js文件,配置参数



##移动端