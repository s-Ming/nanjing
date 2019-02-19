import React, { Component } from "react";
// import "./App.css";
import Zheader from "./components/Zheader"; //头部
import Znav from "./components/Znav"; //导航条
// import { Route, Link } from "react-router-dom";
import Zbanner from "./components/Zbanner"; //轮播图
import Zmain from "./components/Zmain"; //主要内容
import Zhot from "./components/Zhot"; //热点内容
import Znews from "./components/Znews"; //新闻内容
import Zfooter from "./components/Zfooter"; //底部内容

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zheader />
        <Znav />
        <Zbanner />
        <Zmain />
        <Zhot />
        <Znews />
        <Zfooter />
      </div>
    );
  }
}

export default App;
