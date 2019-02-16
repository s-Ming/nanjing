import { createStore } from "redux";
const store = createStore(
  (
    state = {
      name: "lemon",
      age: "20",
      skill: "play",
      title: "hhhh",
      idx: "123"
    },
    action
  ) => {
    switch (action.type) {
      case "setName":
        // console.log(action.name);
        return {
          // 首先继承原来的state仓库
          ...state,
          // 再更改仓库的author值
          name: action.name
        };

      default:
        return state;
    }
  }
);
export default store;
