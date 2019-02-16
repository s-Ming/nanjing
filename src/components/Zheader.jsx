// 首页头部组件
import React, { Component } from "react";
import { connect } from "react-redux";
class Zheader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = props;
    console.log(this.props);
  }
  render() {
    return (
      <div className="header">
        <div className="container">{this.props.name}</div>
      </div>
    );
  }
  componentDidMount() {
    // this.props.setName();//修改仓库的值
  }
}
export default connect(
  state => {
    console.log(state);
    return state;
  },
  dispatch => {
    return {
      setName() {
        //这个方法需手动触发 this.props.setName()
        console.log(this.props);
        dispatch({
          // 对应switch里面的case
          type: "setName",
          name: "laoxie"
        });
      }
    };
  }
)(Zheader);
