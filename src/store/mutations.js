import { ADD_COUNTER, ADD_TO_CART } from "./mutationType";

export default {
  // 把该函数转化为常量使用，便于action直接操作
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    // 该属性是为了购物车里面是否进行选择，选中状态来进行计算选中的商品总价
    payload.checked = true; //默认选中
    state.cartList.push(payload);
  },
};
//模块对象 提高维护性
