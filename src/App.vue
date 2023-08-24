<template>
  <div id="app">
    <mainTabBar class="main-tab-bar" v-show="isShowMainBar"></mainTabBar>
    <!-- exclude这个属性是除以下组件可以不用保持活性，路由跳转时经历一个完整的生命周期 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainTabBar from "./components/content/main-tabbar/main-tab-bar";
export default {
  name: "App",

  components: {
    mainTabBar,
  },
  computed: {
    //
    isShowMainBar() {
      return this.$route.path.indexOf("/detail") >= 0 ? false : true;
    },
  },
};
</script>

<style>
@import "assets/CSS/base.css";
.main-tab-bar {
  z-index: 5;
}
</style>
