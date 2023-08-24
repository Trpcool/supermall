<template>
  <tabbar>
    <tabbarItem path="/home" activeColor="pink">
      <!-- 下面路径是在build配置文件目录下给src起的别名方便路径查询 -->
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
      <div slot="text">首页</div>
    </tabbarItem>

    <tabbarItem path="/cart" activeColor="pink">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="text">分类</div>
    </tabbarItem>

    <tabbarItem path="/category" activeColor="pink">
      <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="text">购物车</div>
    </tabbarItem>

    <tabbarItem path="/profile" activeColor="pink">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabb/tabbar";
import tabbarItem from "components/common/tabb/tabbarItem";
export default {
  name: "mainTabBar",
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
