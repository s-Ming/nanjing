// 首页主要内容组件
import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
class Zheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "快捷服务",
          show: true,
          child: [
            {
              name: "fa fa-envelope-open-o",
              content: "在线申请"
            },
            {
              name: "fa fa-balance-scale",
              content: "网银注册"
            },
            {
              name: "fa fa-calculator",
              content: "预约取号"
            },
            {
              name: "fa fa-calendar-o",
              content: "消费金融"
            },
            {
              name: "fa fa-cube",
              content: "消费生活"
            },
            {
              name: "fa fa-map",
              content: "易慧宝融资平台"
            },
            {
              name: "fa fa-shopping-bag",
              content: "综合企业基金管理"
            }
          ]
        },
        {
          title: "金融信息",
          show: false,
          child: [
            {
              name: "fa fa-envelope-open-o",
              content: "产品公示"
            },
            {
              name: "fa fa-balance-scale",
              content: "存贷款利息"
            },
            {
              name: "fa fa-calculator",
              content: "外币利率"
            },
            {
              name: "fa fa-calendar-o",
              content: "外汇牌价"
            },
            {
              name: "fa fa-cube",
              content: "大额存单转让"
            },
            {
              name: "fa fa-map",
              content: "理财计算器"
            },
            {
              name: "fa fa-shopping-bag",
              content: "资费公告"
            },
            {
              name: "fa fa-shopping-bag",
              content: "下载专区"
            }
          ]
        }
      ]
    };
    this.props = props;
    console.log(this.props);
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="main_top">
          {
              this.state.list.map((item,idx)=>{
                return <h3 key={idx}>{item.name}</h3>
              })
          }
          </div>
          <div className="main_bot">1</div>
        </div>
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
