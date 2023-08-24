<template>
  <div class="detail-shop">
    <div class="shop">
      <img :src="shop.shopLogo" alt="" />
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-content">
      <div class="shop-sell">
        <span>
          <div class="num">{{ sells }}万</div>
          <div class="title">总销量</div>
        </span>
        <span>
          <div class="num">{{ shop.cGoods }}</div>
          <div class="title">全部宝贝</div>
        </span>
      </div>
      <div class="shop-commit">
        <div v-for="(item, index) in shop.score" class="commit-item">
          <span>{{ item.name }}</span>
          <span class="score" :class="{ 'score-better': item.isBetter }">{{
            item.score
          }}</span>
          <span class="better" :class="{ 'better-more': item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="in-shop">
      <a :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {
      isBetter: [],
    };
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  computed: {
    sells() {
      return (this.shop.cSells / 10000).toFixed(1);
    },
    set(index) {
      return index;
    },
  },
};
</script>
<style scoped>
.shop {
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 20px;
}
.shop img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.shop span {
  margin-left: 15px;
  color: #666;
}
.shop-content {
  display: flex;
}
.shop-content > div {
  flex: 1;
}
.shop-content > div:nth-child(1) {
  box-sizing: border-box;
}

.shop-sell {
  display: flex;
  border-right: #c0c0c0 solid 3px;
}
.shop-sell > span {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shop-sell .num {
  font-size: 16px;
}
.shop-sell .title {
  margin-top: 10px;
  font-size: 10px;
}

.commit-item {
  flex: 1;
  padding-left: 25px;
}

.score {
  color: green;
}
.better {
  background-color: green;
  border-radius: 2px;
  color: white;
}
.score-better {
  color: #ff5777;
}
.better-more {
  background: #ff5777;
}
.in-shop a {
  margin: 20px auto;
  display: block;
  color: rgb(69, 69, 69);
  height: 30px;
  width: 120px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  background: #f4f4fa;
}
</style>
