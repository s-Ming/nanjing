import React, { Component } from "react";
import { connect } from "react-redux";
import Zheader from "../../components/Zheader"; //头部
import Znav from "../../components/Znav"; //导航条
import Zbanner from "../../components/Zbanner"; //轮播图
import Zmain from "../../components/Zmain"; //主要内容
import Zhot from "../../components/Zhot"; //热点内容
import Znews from "../../components/Znews"; //新闻内容
import Zfooter from "../../components/Zfooter"; //底部内容
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Zheader />
        <Znav history={this.props.history}/>
        <Zbanner />
        <Zmain />
        <Zhot />
        <Znews />
        <Zfooter />
      </div>
    );
  }
}
// export default Home;
export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      setName() {
        dispatch({
          type: "setName",
          name: "laoxie"
        });
      }
    };
  }
)(Home);
