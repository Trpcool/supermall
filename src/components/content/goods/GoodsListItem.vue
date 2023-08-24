<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span
        ><img class="collect-img" src="~assets/img/common/collect.svg" alt=""
      /></span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    showImage() {
      // 组件复用为了兼容不同路径进行计算属性来判断路径（组件复用）
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("/home") >= 0) {
        this.$bus.$emit("itemImageLoad"); //监听home组件图片加载
      } else if (this.$route.path.indexOf("/detail") >= 0) {
        this.$bus.$emit("detailImageLoad"); //监听detail组件图片加载
      }
    },
    itemClick() {
      // 组件路由通过路由携带信息
      // push进入该组件示图，"/携带的属性"
      this.$router.push("/detail/" + this.goodsItem.iid); //$router.push("/detail")路由跳转，配置了路由属性
    },
  },
};
</script>
<style scoped>
.goods-item {
  width: 48%;
  border-radius: 5px;
}
.goods-item > img {
  width: 100%;
  border-radius: inherit;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 10px;
  line-height: 12px;
  height: 12px;
  margin-bottom: 5px;
}
.price {
  color: #ff5777;
}
.goods-item div {
  text-align: center;
  font-size: 8px;
  margin-bottom: 5px;
}
.goods-item span {
  padding: 2px;
}
.collect-img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  padding: 2px 2px 0px 2px;
}
</style>
