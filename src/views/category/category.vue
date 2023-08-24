<template>
  <div id="cart">
    <nav-bar class="cate-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll
      v-if="$store.getters.cartLength"
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
    >
      <cart-list />
    </scroll>
    <img
      class="none-content"
      v-else
      src="~assets/img/cart/empty_cart.png"
      alt=""
    />
    <cart-bottom-bar />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import scroll from "components/common/scroll/Scroll";

// mapgetter属性是从vuex框架本身导入的方法
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "Category",
  components: {
    navBar,
    CartList,
    scroll,
    CartBottomBar,
  },
  data() {
    return {
      scroll: null,
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    /*
    这里使用getters在用计算属性有点代码冗余反而变得更繁杂一些

    */
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    // ----
    // 以下是vuex把getters属性的函数方法全部转化vue组件中的计算属性进行使用，
    // 不在像上面一样进行繁杂地调用
    ...mapGetters(["cartLength", "cartList"]), //参数是一个数组数组时getters属性函数中的方法函数
    //对象语法 “...”展开运算符
    // ...mapGetters({
    //   length: "cartLength",
    //   List: "cartList",
    // }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
  height: 100vh;
  width: 100vw;
}
.cate-nav {
  background-color: #ff8198;
  color: #fff;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
  position: relative;
}
.none-content {
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px auto auto -50px;
}
</style>
