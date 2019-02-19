// 首页尾部组件
import React, { Component } from "react";
import { connect } from "react-redux";
class Zfooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: []
    };
    this.props = props;
  }
  render() {
    return (
      <div className="footer">
        <div className="footer1">
          <div className="container">
          <img src={require(`../imgs/index/footer1.png`)} alt=""/></div>
        </div>
        <div className="footer2">
          <div className="container"><img src={require(`../imgs/index/footer2.png`)} alt=""/></div>
        </div>
        <div className="footer3">
          <div className="container"><img src={require(`../imgs/index/footer3.png`)} alt=""/></div>
        </div>
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {
    // this.props.setName();//修改仓库的值
  }
}
export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      setName() {
        //这个方法需手动触发 this.props.setName()
        dispatch({
          // 对应switch里面的case
          type: "setName",
          name: "laoxie"
        });
      }
    };
  }
)(Zfooter);
