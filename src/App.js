import React, { Component } from "react";
// import { Route, Redirect, Link } from "react-router-dom";
import { Route} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import store from "./redux";
import { Provider} from "react-redux";

import Home from "./pages/index/Home.jsx"; //首页
import People from "./pages/people/People.jsx"; //个人
import Xiaowei from "./pages/xiaowei/Xiaowei";//小微
import Gongsi from "./pages/gongsi/Gongsi";//公司
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
          <Route path="/xiaowei" component={Xiaowei} />
          <Route path="/gongsi" component={Gongsi} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
