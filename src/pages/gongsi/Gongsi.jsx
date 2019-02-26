import React, { Component } from "react";
import { connect } from "react-redux";
import Zheader from "../../components/Zheader"; //头部
import Znav from "../../components/Znav"; //导航条
// import Zbanner from "../../components/Zbanner"; //轮播图
import Zfooter from "../../components/Zfooter"; //底部内容
class Gongsi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Zheader />
        <Znav history={this.props.history}/>
        {/* <Zbanner /> */}
        <Zfooter />
      </div>
    );
  }
}
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
)(Gongsi);
