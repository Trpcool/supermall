<template>
  <div class="detail-base-info" v-if="Object.keys(Goods).at.length !== 0">
    <div class="itemInfo">{{ Goods.itemInfo }}</div>
    <div class="price-item">
      <span>{{ Goods.price }}</span>
      <span>{{ Goods.oldPrice }}</span>
      <span v-show="Goods.discount">{{ Goods.discount }}</span>
    </div>
    <div class="columns-item">
      <span v-for="item in Goods.columns">
        {{ item }}
      </span>
    </div>
    <div class="service-item">
      <span v-for="item in Goods.service">
        <img :src="item.icon" alt="" />
        <span class="service-name">{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    Goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    // isShowDiscount() {
    //   return this.Goods.discount.length !== 0;
    // },
  },
  mounted() {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.itemInfo {
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
}
.price-item {
  padding: 6px;
}
.price-item span:nth-child(1) {
  color: #ff5777;
  font-size: 22px;
}
.price-item span:nth-child(2) {
  margin-left: 10px;
  font-size: 13px;
  color: #666;
  text-decoration: line-through;
}
.price-item span:nth-child(3) {
  padding: 2px;
  font-size: 14px;
  color: #fff;
  background: #ff5777;
  border-radius: 6px;
  position: relative;
  bottom: 8px;
  left: 10px;
}

.columns-item {
  height: 30px;
  line-height: 30px;
  display: flex;

  border-bottom: rgb(225, 225, 225) solid 2px;
}
.columns-item span {
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: #666;
}
.service-item {
  display: flex;
  height: 50px;
  align-items: center;
  padding: 2px;
  border-bottom: rgb(225, 225, 225) solid 3.5px;
}
.service-item > span {
  flex: 1;
  display: flex;
}
.service-item img {
  margin-top: 8px;
  height: 15px;
  width: 15px;
}
.service-item .service-name {
  font-size: 10px;
  text-align: center;
  padding-top: 7px;
}
</style>
