<template>
  <div class="detail-button-bar">
    <ul>
      <li>客户</li>
      <li>店铺</li>
      <li>收藏</li>
      <li @click="addCart">加入购物车</li>
      <li>购买</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  methods: {
    addCart() {
      this.$emit("showSuccessAdd");
    },
  },
};
</script>
<style scoped>
.detail-button-bar {
  height: 48px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.detail-button-bar ul {
  width: inherit;
  height: inherit;
  display: flex;
}
.detail-button-bar li {
  flex: 1;
  text-align: center;
  line-height: 48px;
  font-size: 13px;
}
.detail-button-bar li:nth-child(4) {
  flex: 1.2;
  text-align: center;
  background-color: rgb(255, 241, 41);
}
.detail-button-bar li:nth-child(5) {
  flex: 1.2;
  text-align: center;
  background-color: #ff5777;
  color: white;
}
</style>
