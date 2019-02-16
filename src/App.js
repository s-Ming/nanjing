import React, { Component } from "react";
// import "./App.css";
import Zheader from "./components/Zheader";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zheader />
      </div>
    );
  }
}

export default App;
