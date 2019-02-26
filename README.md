This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---



二级导航的设想

一级导航为一个组件，二级导航为多个组件或者是一个组件根据数据生成。

## 项目启动

#### 使用脚手架创建项目

```
create-react-app [项目名称]
```

#### 项目初始化后还需配置的一些东西

- 创建远程仓库(先有本地仓库)

- 本地仓库初始化

```
git init
```

- 关联远程仓库

```
git remote add [远程仓库名][远程仓库地址]
git remote add  origin git@github.com:xxx/view.git
测试是否成功git remote -v
```

- 第一次提交出现错误

```
fatal: couldn't find remote ref master
使用以下命令解决
git push -u origin master   //将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

```

- 配置 scss/less 信息

```
安装sass处理包
npm i sass-loader node-sass  //安装好就能直接使用
安装less处理包
npm i less-loader node-less  //还需要配置webpack文件信息才能正常使用
```

- 配置路由
- 配置 redux

## 问题

#### z-index 样式不起作用

z-index 不起作用的三大坑

- 父标签 position 属性为 relative；
- 问题标签无 position 属性（不包括 static）；
- 问题标签含有浮动(float)属性。

解决办法

- position:relative 改为 position:absolute；
- 浮动元素添加 position 属性（如 relative，absolute 等）；
- 去除浮动。

#### tab 标签切换怎么做？

参照 Zmain.jsx 组件（难点）

思路：使用 onMouseEnter 监听函数，当鼠标划入该元素时，更改为该元素下的数据，从而改变视图。

```
 let list = this.state.list; //重新赋值
        list[i].show = true; //改变数据
        this.setState({
          list               //list:list
        })
```

#### 解决当浏览器页面缩小时页面出现右侧白边

在最外层盒子设置最小宽度

```
html,body{
    min-width:1200px;
}
```

#### bootstrap 的使用

```
安装
npm install bootstrap@3
不好用
```

#### swiper4.x 使用

```
安装
npm i swiper
在index.scss页引入
@import "../node_modules/swiper/dist/css/swiper.css";
在需要使用swiper的组件页引入js
import Swiper from "swiper";
复制官网使用方法的教程代码

html部分
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
导航等组件可以放在container之外
···························································································
css 定义盒子大小
.swiper-container {
    width: 600px;
    height: 300px;
}
···························································································
js 初始化swiper
var mySwiper = new Swiper ('.swiper-container', {
direction: 'vertical', // 垂直切换选项
loop: true, // 循环模式选项

// 如果需要分页器
pagination: {
el: '.swiper-pagination',
},

// 如果需要前进后退按钮
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// 如果需要滚动条
scrollbar: {
el: '.swiper-scrollbar',
},
})
```

#### 鼠标事件在移动端不能使用，CSS 的 hover 属性在移动端也不能正确使用

需要兼容移动端时，使用鼠标事件时考虑改为 click 事件，hover 则改使用触摸事件 touchstart 和 touchend

```
onTouchStart="add"
```

```
touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
touchend事件：当手指从屏幕上离开的时候触发。
touchcancel事件：当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了
touchenter ：移动的手指进入一个dom元素。
touchleave ：移动的手指离开一个dom元素。
```

```
上面的这些事件都会冒泡，也都可以取消。虽然这些触摸事件没有在DOM规范中定义，但是它们却是以兼容DOM的方式实现的。所以，每个触摸事件的event对象都提供了在鼠标实践中常见的属性：bubbles(起泡事件的类型)、cancelable(是否用 preventDefault() 方法可以取消与事件关联的默认动作)、clientX(返回当事件被触发时，鼠标指针的水平坐标)、clientY(返回当事件触发时，鼠标指针的垂直坐标)、screenX(当某个事件被触发时，鼠标指针的水平坐标)和screenY(返回当某个事件被触发时，鼠标指针的垂直坐标)。除了常见的DOM属性，触摸事件还包含下面三个用于跟踪触摸的属性。
```

```
touches：表示当前跟踪的触摸操作的touch对象的数组。
targetTouches：特定于事件目标的Touch对象的数组。
changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
```

原文链接[https://blog.csdn.net/sinat_19327991/article/details/73823874]

#### 项目出现两个 app 组件是什么问题？

![](E:\myProject\nanjing\155.jpg)

