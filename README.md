# vue-R6stats

### 此项目为基于Vue 2.0的彩虹六号:围攻(Tom Clancy's Rainbow Six Siege)的战绩查询WebApp
<p align='center'>
<a href='https://salmondaze.github.io/vue-R6stats'><img src='https://img.shields.io/scrutinizer/build/g/filp/whoops.svg'></a>
<a href='https://cn.vuejs.org/'><img src='https://img.shields.io/badge/vue-2.5.2-blue.svg'></a>
<a href='https://router.vuejs.org/'><img src='https://img.shields.io/badge/vue--router-3.0.1-blue.svg'></a>
<a href='https://vuex.vuejs.org/installation.html'><img src='https://img.shields.io/badge/vuex-3.0.1-blue.svg'></a>
<a href='https://www.kancloud.cn/yunye/axios/234845'><img src='https://img.shields.io/badge/axios-0.18.0-blue.svg'></a>
<a href='http://element-cn.eleme.io/#/zh-CN/component/installation'><img src='https://img.shields.io/badge/element--ui-2.4.0-blue.svg'></a>
<a href='https://github.com/marcuswestin/store.js'><img src='https://img.shields.io/badge/store.js-2.0.12-blue.svg'></a>
<a href='https://github.com/vuejs/vue-cli'><img src='https://img.shields.io/badge/vue--cli-2.4.0-blue.svg'></a>
</p>
<p align='center'>项目演示页:<a href='https://salmondaze.github.io/vue-R6stats'>Demo</a></p>
<p align='center'><s>由于某些不可抗力，请在width大于650px的手机模式下浏览(小声</s></p>

### 已实现的功能
<p>1.搜索玩家战绩</p>
<p>2.查看玩家的战绩总览</p>
<p>3.可查询玩家的干员信息、赛季总览</p>
<p>4.添加玩家为我的喜爱,方便下次查看</p>
<p>5.玩家排行榜</p>

### 未实现的功能
<p>1.对比玩家战绩</p>
<p>2.玩家干员信息排序</p>

```bash
# 下载项目，安装依赖
npm install

# 本地预览
npm run dev

# 打包发布
npm run build
```

### 目录结构
<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目依赖
├── src                // 生产目录
│   ├── assets         // 资源目录
│   ├── components     // 组件目录
│   ├── store          // vuex
│   ├── router         // vue-router 配置
│   └── main.js        // Webpack 预编译入口
</pre>
