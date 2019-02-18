// 首页轮播图组件
import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
class Zheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: [
        "banner1.jpg",
        "banner2.jpg",
        "banner3.jpg",
        "banner4.jpg",
        "banner5.jpg",
        "banner6.jpg"
      ]
    };
    this.props = props;
    console.log(this.props);
  }
  render() {
    return (
      <div className="banner">
        <Carousel autoplay>
          {this.state.imgurl.map((item, idx) => {
            return (
              <div key={idx}>
                <img src={require(`../imgs/index/${item}`)} alt=""/>
              </div>
            );
          })}
        </Carousel>
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
