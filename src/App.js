import React, { Component } from "react";
// import "./App.css";
import Zheader from "./components/Zheader"; //头部
import Znav from "./components/Znav"; //导航条
// import { Route, Link } from "react-router-dom";
import Zbanner from "./components/Zbanner"; //轮播图
import Zmain from "./components/Zmain"; //轮播图

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zheader />
        <Znav />
        <Zbanner />
        <Zmain />
      </div>
    );
  }
}

export default App;
