// 首页头部组件
import React, { Component } from "react";
import { connect } from "react-redux";
import Swiper from "swiper";
class Zhot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: [
        {
          img: ["hot1.jpg", "hot2.jpg", "hot3.jpg"]
        },
        {
          img: ["hot3.jpg", "hot4.jpg", "hot1.jpg"]
        }
      ]
    };
    this.props = props;
    // console.log(this.props);
  }
  render() {
    return (
      <div className="Zhot">
        <div className="container clearfix">
          <div className="hot_top">
            <h4>热点推荐</h4>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.state.imgurl.map((item, idx) => {
                return (
                  <div className="swiper-slide" key={idx}>
                    {item.img.map((item2, idx2) => {
                      return (
                        <img src={require(`../imgs/index/${item2}`)} alt="" key={idx2}/>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination" />

            {/* <!-- 如果需要导航按钮 --> */}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />

            {/* <!-- 如果需要滚动条 --> */}
            {/* <div className="swiper-scrollbar" /> */}
          </div>
          {/* 导航等组件可以放在container之外 */}
        </div>
      </div>
    );
  }
  swiper() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      //   pagination: {
      //     el: ".swiper-pagination"
      //   },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }

      // 如果需要滚动条
      //   scrollbar: {
      //     el: ".swiper-scrollbar"
      //   }
    });
  }
  componentDidMount() {
    // this.props.setName();//修改仓库的值
    this.swiper(); //初始化
  }
}
export default connect(
  state => {
    // console.log(state);
    return state;
  },
  dispatch => {
    return {
      setName() {
        //这个方法需手动触发 this.props.setName()
        // console.log(this.props);
        dispatch({
          // 对应switch里面的case
          type: "setName",
          name: "laoxie"
        });
      }
    };
  }
)(Zhot);
