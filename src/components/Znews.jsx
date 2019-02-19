// 首页新闻组件
import React, { Component } from "react";
import { connect } from "react-redux";
class Znews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList1: [],
      showList2: [],

      list1: [
        {
          title: "重要通知",
          show: true,
          child: [
            {
              name:
                "珠联璧合理财管理计划2号人民币理财产品2019年2月开放及净值...",
              time: "2-14"
            },
            {
              name: "“珠联璧合致远1902一年定开公募人民币理财产品”成立公告",
              time: "2-14"
            },
            {
              name:
                "珠联璧合理财管理计划2号人民币理财产品2019年1月开放及净值...",
              time: "2-14"
            },
            {
              name: "关于取消企业银行账户许可的公告",
              time: "2-14"
            },
            {
              name:
                "珠联璧合理财管理计划2号人民币理财产品2019年1月开放及净值...",
              time: "2-14"
            }
          ]
        }
      ],
      list2: [
        {
          title: "优惠活动",
          show: true,
          child: [
            {
              name: "你好银行送您水瓶月好礼啦",
              time: "2-14"
            },
            {
              name: "祝福送亲友，推荐享好礼",
              time: "2-14"
            },
            {
              name: "“码”上购买实物金",
              time: "2-14"
            },
            {
              name: "保险产品",
              time: "2-14"
            },
            {
              name: "基金定投",
              time: "2-14"
            }
          ]
        },
        {
          title: "活动中心",
          show: false,
          child: [
            {
              name: "南京银行大学荣获“2018年度中国企业大学趋势引领奖”",
              time: "2-14"
            },
            {
              name: "南京银行研究成果获得多个奖项",
              time: "2-14"
            },
            {
              name: "南京银行荣获2018年江苏金融系统多项荣誉",
              time: "2-14"
            },
            {
              name: "南京银行在南京市财贸金融工会职工文化艺术节上获得众多奖项",
              time: "2-14"
            },
            {
              name: "南京银行荣获“金贸奖”“最佳交易银行服务奖”",
              time: "2-14"
            }
          ]
        }
      ]
    };
    this.props = props;
    // console.log(this.props);
  }
  render() {
    return (
      <div className="news">
        <div className="container clearfix">
          <div className="news_l">
            <div className="news_l_t clearfix">
              {this.state.list1.map((item, idx) => {
                // console.log(item.title);
                return (
                  <h3
                    key={idx}
                    onMouseEnter={this.hover1.bind(this, item.child, idx)}
                    className={item.show ? "active" : ""}
                  >
                    {item.title}
                  </h3>
                );
              })}
            </div>
            <div className="news_l_b">
              <ul className="news_l_b_ul clearfix">
                {this.state.showList1.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a href="index.html" title={item.name}>{item.name}</a>
                      <span>{item.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="news_r">
          <div className="news_r_t clearfix">
              {this.state.list2.map((item, idx) => {
                // console.log(item.title);
                return (
                  <h3
                    key={idx}
                    onMouseEnter={this.hover2.bind(this, item.child, idx)}
                    className={item.show ? "active" : ""}
                  >
                    {item.title}
                  </h3>
                );
              })}
            </div>
            <div className="news_r_b">
              <ul className="news_r_b_ul clearfix">
                {this.state.showList2.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a href="index.html" title={item.name}>{item.name}</a>
                      <span>{item.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  hover1(data, idx) {
    this.setState({
      showList1: data
    });
    //修改list数据的show属性值,实现底部边框跟随效果
    for(var i = 0; i<this.state.list1.length;i++){
      if (i === idx) {
        let list = this.state.list1;//重新赋值
        list[i].show = true;
        this.setState({
          list
        })
      } else if (i !== idx) {
        let list = this.state.list1;
        list[i].show = false;
        this.setState({
          list
        })
      }
    }
  }
  hover2(data, idx) {
    this.setState({
      showList2: data
    });
    //修改list数据的show属性值,实现底部边框跟随效果
    for(var i = 0; i<this.state.list2.length;i++){
      if (i === idx) {
        let list = this.state.list2;//重新赋值
        list[i].show = true;
        this.setState({
          list
        })
      } else if (i !== idx) {
        let list = this.state.list2;
        list[i].show = false;
        this.setState({
          list
        })
      }
    }
  }
  componentWillMount() {
    // this.props.setName();//修改仓库的值
    this.state.list1.map((item, idx) => {
      if (item.show) {
        return this.setState({
          showList1: item.child
        });
      } else {
        return "";
      }
    });
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
)(Znews);
