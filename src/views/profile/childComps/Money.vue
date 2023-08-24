<template>
  <div id="money">
    <div>
      <div><span>9999.00</span>元</div>
      <div>我的金额</div>
    </div>
    <div>
      <div><span>9999</span>个</div>
      <div>我的优惠</div>
    </div>
    <div>
      <div><span>9999</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#money {
  height: 60px;
  border-bottom: #d7d7d74c solid 10px;
  display: flex;
  padding: 10px 0px 10px 0px;
}
#money > div {
  flex: 1;
  border-right: #d7d7d7 solid 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#money > div:last-child {
  border-right: none;
}
#money > div span {
  font-size: 20px;
  font-weight: 600;
  color: #ff8198;
}
</style>
