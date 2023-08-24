import { ADD_COUNTER, ADD_TO_CART } from "./mutationType";
// 导入常量
export default {
  addCart(context, payload) {
    // 本身action是可以返回一个promise,这里我们用promise返回添加成功态
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === payload.iid
      );
      if (oldProduct) {
        // 这里使用常量进行使用
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("商品添加成功~");
      }
    });
  },
};
// 这里可维护性 这里分开写mutations和actions部分
