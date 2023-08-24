<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div class="top-back" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) of ['商品', '参数', '评论', '推荐']"
          class="title-item"
          @click="clickItem(index)"
          :class="{ activateItem: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit("clickItem", index);
    },
    backClick() {
      // back方法是当前路由下的路径回退方法，也可以用push函数
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.top-back {
  display: flex;
  justify-content: center;
  position: relative;
}
.top-back {
  margin-top: 10px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.activateItem {
  color: #ff5777;
}
</style>
