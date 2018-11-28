# uni-shop
用[uni-app](https://uniapp.dcloud.io/)创建的类微信应用。


- 项目使用[Easy Mock](https://easy-mock.com/)模拟数据，并不是真实数据。
- 项目登录用户名随便写，只做了密码判断，用来模拟登录行为。
- 登录密码为123。

## 知识点
简单罗列出项目中使用到的组件和相关技术，详细信息查询官方手册即可。
- [pages.json](https://uniapp.dcloud.io/collocation/pages)：用来对 uni-app 进行全局配置，决定页面文件的路径、窗口表现、设置多 tab 等。项目中包括修改标题文本、启动页修改透明标题栏、开发环境启动指定页面，设置底部tab选项卡和图标文字等，都是通过修改这个文件实现的。
- [vuex](https://vuex.vuejs.org/zh/)：专为 Vue.js 应用程序开发的状态管理模式。因为项目模拟了用户登录的过程，所以采用vuex管理用户登录状态，并将用户信息，包括头像、昵称、账号等信息存储起来。
- [uni.setStorageSync](https://uniapp.dcloud.io/api/storage/storage?id=setstoragesync)：将 data 存储在本地缓存中指定的 key 中。因为vuex不是持久化的状态，一点用户关掉程序，然后再次启动程序，就会丢失掉用户信息。这里我想到的解决办法就是使用storage，将用户信息保存在本地缓存中。
- [uni.reLaunch(OBJECT)](https://uniapp.dcloud.io/api/router?id=relaunch)：关闭所有页面，打开到应用内的某个页面。这个接口的主要区别就是关掉当前所有页面，然后新打开一个页面。与`uni.navigateTo(OBJECT)`不同。`navigateTo`接口是在当前页面打开新的页面。
- [使用代码块直接创建组件模板](https://uniapp.dcloud.io/snippet?id=%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97%E7%9B%B4%E6%8E%A5%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6%E6%A8%A1%E6%9D%BF)：在Hbulider X中，内置了很多的代码块，灵活使用代码块可以提高不少开发效率。
- [使用 Chrome 调试](https://uniapp.dcloud.io/snippet?id=%E4%BD%BF%E7%94%A8-chrome-%E8%B0%83%E8%AF%95)：最新版本的HbuliderX已经可以开发H5程序了。并且可以在Chrome中调试程序，感觉比在微信开发者工具中调试更舒服。
- [onPullDownRefresh](https://uniapp.dcloud.io/api/ui/pulldown?id=onpulldownrefresh)：监听页面用户下拉刷新事件。因为我没有想明白该怎样实现微信聊天功能的，消息实时同步的过程，所以暂时让用户手动刷新获取最新消息。体验并不好~ :-( 
- [index-list](https://github.com/dcloudio/hello-uniapp/tree/master/pages/template/index-list)：在hello uniapp中，有这个例子，参考使用即可做出类似微信通讯录的页面。
- [qrcode二维码](https://github.com/dcloudio/hello-uniapp/tree/master/pages/template/qrcode)：参考这个页面内容，可以生成二维码。
- [scan扫描二维码](https://github.com/dcloudio/hello-uniapp/tree/master/pages/API/scan-code)：参考这个例子可以实现扫描二维码。

# 修复的bug问题

- 注册页面文字两端对齐bug。本来以为跟浏览器中一样，使用转义字符就能解决，项目中使用了`&emsp;`，但是发现在某些安卓机中，会失效。所以改成了css实现两端对齐。使用css3 [justify-content](http://www.runoob.com/cssref/css3-pr-justify-content.html)实现。
- 启动页跳过按钮失效。启动页计划是不显示导航栏的，为了跳过启动页，添加了一个跳过按钮。但是我没有考虑到导航栏的高度。因为我本来以为这个导航栏已经被隐藏了，其实不然，这个导航栏一直存在，只不过变成了透明而已。如果这个跳过按钮位置是在导航栏上，会导致按钮失效。通过查找论坛文档，找到了这个导航栏高度[【示例】原生标题栏titleNView使用说明](http://ask.dcloud.net.cn/article/1205)，是固定高度44px。


## 相关文章

整理的相关学习文章：
- [uni-app官方教程学习手记](https://segmentfault.com/a/1190000017020710)
- [uni-app 创建的第一个应用](https://segmentfault.com/a/1190000017168549)
