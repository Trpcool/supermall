<template>
  <div class="goods-list">
    <CateGoodsItem v-for="item of goodsList" :goods="item" />
  </div>
</template>

<script>
import CateGoodsItem from "./CateGoodsItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "GoodsList",
  components: {
    CateGoodsItem,
    Scroll,
  },
  props: {
    goodsList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.goods-list {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
