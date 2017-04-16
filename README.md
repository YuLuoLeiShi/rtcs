
<p align="center">
  <a href="https://github.com/976500133/rtcs">
    <img width="200" src="https://github.com/976500133/rtcs/blob/master/assets/icon.jpeg">
  </a>
</p>

# Rtcs



[![Dependency Status](https://img.shields.io/gemnasium/react-component/trigger.svg?style=flat-square)]()

[![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)]()
[![NPM downloads](http://img.shields.io/npm/dm/antd.svg?style=flat-square)]()




## Features(特性)

- Easy to use, with a series of components and plugin
- A set of high-quality React components out of the box.
- Written in es6 with complete define types.
- A npm + rc-tools  




## Install

```bash
npm install rtcs --save
```



## Usage

```jsx

import { AppleBar }  from 'rtcs'

ReactDOM.render(<AppleBar />, mountNode);

```





## Manually import

```jsx
import AppleBar from 'rtcs/lib/AppleBar';  // for js
import 'rtcs/assets/css/AppleBar.css';        // for css
```



## Support environment

- Modern browsers and IE9 and above.



## API

- RImageMiddle

```jsx

import { RImageMiddle }  from 'rtcs'

// imageUrl  : 图片地址
// width  : 容器宽
// height  : 容器高
// imgWidth : 图片宽
// imgHeight : 图片高

<RImageMiddle imageUrl="./images/icon-nav2-01.png" width="78" height="78" imgWidth="40" />


```



- AppleBar

```jsx


import { AppleBar }  from 'rtcs'

const _appData = [{
        title : "项目问答", //标题
        image : "./images/home-04.png", //icon 地址
        width : 48, // icon 宽
        cb : () => {alert(0)} //点击回调
      }

//appBarCenterColr 中间隆起区域的背景色

//appBarStyle 自定义css

<AppleBar appBarStyle={} appBarCenterColr="#fff" appData={_appData}/>


```
