<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="content">
      <sideNav :titles="titles" @itemInfo="getItemInfo" ref="sideScroll" />
      <scroll
        class="content-goods"
        :probe-type="3"
        :pull-up-load="false"
        ref="goodsScroll"
      >
        <CateGoodsList :goodsList="itemList" />
      </scroll>
    </div>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import Scroll from "components/common/scroll/Scroll";

import sideNav from "./childComps/sideNav";

import { getCategoryTitle, getCategoryItem } from "network/category";
import CateGoodsList from "./categoryGoods/CateGoodsList";

export default {
  name: "Cart",
  components: { navBar, sideNav, CateGoodsList, Scroll },
  data() {
    return {
      titles: [],
      itemList: [],
    };
  },
  created() {
    getCategoryTitle()
      .then((res) => {
        res.data.category.list.forEach((item) => {
          this.titles.push(item);
        });
        setTimeout(() => {
          this.$refs.sideScroll.refresh();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getSubCategory();
  },
  methods: {
    getItemInfo(key) {
      this.getSubCategory(key);
    },
    getSubCategory(key = 3627) {
      getCategoryItem(key).then((res) => {
        this.itemList = [];
        res.data.list.forEach((item) => {
          this.itemList.push(item);
        });
        // console.log(res.data.list);
        setTimeout(() => {
          this.$refs.goodsScroll.refresh();
        }, 500);
        console.log("高度", this.$refs.goodsScroll.scroll.scrollerHeight);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
  height: 100vh;
  width: 100vw;
}
.nav-bar {
  background: #ff8198;
  color: white;
}
.content {
  width: 100vw;
  height: calc(100% - 44px - 49px);
  display: flex;
}
.content-goods {
  width: calc(100% - 70px);
  overflow: hidden;
}
</style>
