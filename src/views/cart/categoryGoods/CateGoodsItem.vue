<template>
  <div class="goods-item">
    <a :href="goods.link">
      <img :src="goods.image" alt="" />
      <div>{{ goods.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  components: {},
  props: {
    goods: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.goods-item {
  box-sizing: border-box;
  padding: 8px;
  width: 50%;
}
.goods-item a img {
  width: 100%;
  vertical-align: middle;
}
.goods-item a div {
  text-align: center;
  color: #666;
}
</style>
