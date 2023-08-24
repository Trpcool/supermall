<template>
  <div id="others">
    <ul class="tool1">
      <li>
        <img src="~assets/img/profile/message.svg" alt="" />
        <span>我的消息</span>
      </li>
      <li>
        <img src="~assets/img/profile/pointer.svg" alt="" />
        <span>积分商城</span>
      </li>
      <li>
        <img src="~assets/img/profile/vip.svg" alt="" />
        <span>会员卡</span>
      </li>
    </ul>
    <ul class="tool2">
      <li>
        <img src="~assets/img/profile/cart.svg" alt="" />
        <span>我的购物车</span>
      </li>
      <li>
        <img src="~assets/img/profile/shopping.svg" alt="" />
        <span>下载购物APP</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Others",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
li {
  box-sizing: border-box;
  height: 40px;
  border-bottom: #d7d7d74c solid 2px;
  display: flex;
  align-items: center;
  padding: 10px;
}

li img {
  height: 30px;
}
li span {
  margin-left: 10px;
}
.tool1 li:last-child {
  border-bottom: #d7d7d74c solid 10px;
}
</style>
