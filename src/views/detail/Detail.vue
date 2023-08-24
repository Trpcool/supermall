<template>
  <!-- 这里的v-if是等数据加载完在进行渲染，增强用户体验 -->
  <div v-if="Object.keys(topImages).length !== 0">
    <detail-nav-bar class="detail-nav-bar" @clickItem="navBarClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :Goods="GoodsInfo" />
      <shop-info :shop="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @detailImageLoad="imageLoad"
      />
      <detail-params-info
        @finishedHeight="pushHeight"
        ref="params"
        :itemInfo="itemParams"
      />
      <detail-comment-info
        @finishedHeight="pushHeight"
        ref="comment"
        :comment-info="commentInfo"
      />
      <goods-list
        @finishedHeight="pushHeight"
        ref="recommend"
        :goods="RecommendInfo"
      />
    </scroll>
    <back-top @click.native="backTop" v-show="isBackShow" />
    <detail-button-bar @showSuccessAdd="showMsg" />
  </div>
</template>

<script>
import { getDetail, Goods, getRecommend } from "network/detail";

import DetailNavBar from "views/detail/childComps/DetailNavBar";
// 子组件
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import ShopInfo from "./childComps/ShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailButtonBar from "./childComps/DetailButtonBar";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";

import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    ShopInfo,
    DetailGoodsInfo,
    BackTop,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtonBar,
  },
  data() {
    return {
      idd: null,
      topImages: [],
      itemInfo: null,
      GoodsInfo: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      RecommendInfo: [],
      positionScrollY: [],
      currentIndex: null,
      isShowSuccess: false,
      isBackShow: false,
      object: [],
    };
  },
  created() {
    // 通过当前活跃的路由到的组件并获取当前携带进来的参数
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;
      // 整理获取商家信息写成一个组件
      this.GoodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取真实价格push到vuex中
      this.itemInfo = res.result.itemInfo;
      // 商家评论
      this.shop = res.result.shopInfo;
      this.detailInfo = res.result.detailInfo;
      this.itemParams = res.result.itemParams;
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });
    // 详情页推荐数据请求
    getRecommend().then((res) => {
      this.RecommendInfo = res.data.list;
    });
  },
  mounted() {
    // const refresh = debounce(() => {
    //   this.$refs.scroll.refresh;
    // }, 100); //调用封装的函数
    // // 通过事件总线来监听图片加载, 从而减少对组件通信的繁琐问题;
    // // const fun = debounce(() => {
    // //   this.positionScrollY.push(0);
    // //   this.positionScrollY.push(this.$refs.params.$el.offsetTop);
    // //   this.positionScrollY.push(this.$refs.comment.$el.offsetTop);
    // //   this.positionScrollY.push(this.$refs.recommend.$el.offsetTop);
    // // }, 190);
    // // this.$bus.$on("detailImageLoad", () => {
    // setTimeout(() => {
    //   console.log(this.$refs.scroll);
    // });
    // });
  },
  methods: {
    pushHeight() {
      this.positionScrollY = [];
      this.positionScrollY.push(0);
      this.positionScrollY.push(this.$refs.params.$el.offsetTop);
      this.positionScrollY.push(this.$refs.comment.$el.offsetTop);
      this.positionScrollY.push(this.$refs.recommend.$el.offsetTop);
    },
    backTop() {
      // $refs.ref属性调用的是该组件对象
      this.$refs.scroll.BackToTop(0, 0);
    },
    navBarClick(index) {
      this.$refs.scroll.BackToTop(0, -this.positionScrollY[index], 200);
    },
    // 通过betterScroll组件框架的滚动触发事件来获取滚动时的位置
    contentScroll(position) {
      // 获取长度进行位置判断
      this.isBackShow = -position.y > 1000 ? true : false;
      let length = this.positionScrollY.length;
      // 获取Y值
      const positionY = -position.y;
      // 根据距离进行位置判断navBar点击索引
      for (let i = 0; i < length; i++) {
        if (
          // 第一个条件判断是否进行进一步判断类似于节流
          (this.currentIndex !== i &&
            // 小于长度的时候进行判断
            i < length - 1 &&
            // 最后一个时进行判断
            positionY >= this.positionScrollY[i] &&
            positionY < this.positionScrollY[i + 1]) ||
          (i === length - 1 && positionY >= this.positionScrollY[i])
        ) {
          // 保存在data里面用于下一次if条件判断，节流
          this.currentIndex = i;
          // 直接通过refs调用该组件对象类的属性进行操作
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    // token提示
    showMsg() {
      const product = {};
      product.title = this.GoodsInfo.itemInfo;
      product.image = this.topImages[0];
      product.iid = this.iid;
      product.desc = this.detailInfo.desc;
      product.price = Number(this.itemInfo.highNowPrice);
      // 本身这里的dispatch异步函数集合是返回一个promise,可以进行返回该函数执行回调，返回状态
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res);
      });
    },
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
.content {
  position: absolute;
  top: 44px;
  left: 0px;
  bottom: 49px;
  right: 0px;
  z-index: 1;
  overflow: hidden;
}
</style>
