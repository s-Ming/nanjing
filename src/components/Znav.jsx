// 首页头部组件
import React, { Component } from "react";
import { connect } from "react-redux";
class Zheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {
          title: "个人金融",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "小微金融",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款2",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "公司金融",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款3",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "金融市场",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款4",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "电子银行",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款5",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "你好银行",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款6",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        },
        {
          title: "关于我行",
          child: {
            img: "imgs/index/lllll.jpg",
            yewu: [
              {
                name: "个人存款7",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              },
              {
                name: "个人存款",
                child2: ["挚爱存单", "大额存单", "个人结构性存款"]
              }
            ],
            qita: [
              "借记卡",
              "品牌展示",
              "信用卡商城",
              "私人银行",
              "信用卡",
              "e生活"
            ]
          }
        }
      ]
    };
    this.props = props;
    console.log(this.props);
  }
  render() {
    return (
      <div className="nav">
        <div className="container clearfix">
          <h3 className="nav_h3">首页</h3>
          <ul className="nav_ul clearfix">
            {this.state.text.map((item, idx) => {
              return (
                <li key={idx}>
                  <h4>{item.title}</h4>
                  {
                    <div className="nav_li_child">
                      <div className="nav_left">
                        <img src={require(`../${item.child.img}`)} alt="" />
                      </div>
                      <div className="nav_right clearfix">
                        <ul className="nav_r_top clearfix">
                          {item.child.yewu.map((item2, idx2) => {
                            return (
                              <li key={idx2}>
                                <h5>{item2.name}</h5>
                                {item2.child2.map((item3, idx3) => {
                                  return <span key={idx3}>{item3}</span>;
                                })}
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="nav_r_bot clearfix">
                          {item.child.qita.map((item4, idx4) => {
                            return <li key={idx4}>{item4}</li>;
                          })}
                        </ul>
                      </div>
                      {
                        // item.child.map((item2,idx2)=>{
                        //   return ()
                        // })
                      }
                      {}
                    </div>
                  }
                </li>
              );
            })}
          </ul>
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
