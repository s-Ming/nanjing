// 首页头部组件
import React, { Component } from "react";
import { connect } from "react-redux";
class Zheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: ["imgs/index/logo.jpg", "imgs/index/logo_right.jpg"]
    };
    this.props = props;
    // console.log(this.props);
  }
  render() {
    return (
      <div className="header">
        <div className="container clearfix">
          <div className="header_left">
            {this.state.imgurl.map((item, idx) => {
              return <img src={require(`../${item}`)} alt="" key={idx} />;
            })}
          </div>
          <div className="header_right">
            <div className="header_r_top clearfix">
              <img
                src={require("../imgs/index/2017011616200417487.jpg")}
                alt=""
              />
              <ul className="header_top_ul clearfix">
                <li>
                  <span>客户服务</span>
                </li>
                <li>
                  <span>网址导航</span>
                </li>
                <li>
                  <span>English</span>
                </li>
                <li>
                  <span>招聘信息</span>
                </li>
              </ul>
            </div>
            <div className="header_r_bot clearfix">
              <div className="search">
                <input type="text" placeholder="请输入关键字" />
                <button onTouchStart={this.touchstart.bind(this)}
                >搜素</button>
              </div>
              <div className="liebiao">
                <h3>
                  网上银行登录
                  <i className="fa fa-sort-desc" aria-hidden="true" />
                  <ul className="header_bot_ul">
                    <li>个人网银/过客版</li>
                    <li>企业网银/查询版</li>
                    <li>证书下载</li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // this.props.setName();//修改仓库的值
  }
  touchstart(e){//测试
    e.target.classList.add("active");
    // alert(666)
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
)(Zheader);
