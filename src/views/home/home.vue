<template>
  <div id="home">
    <!-- 组件化开发思想 -->
    <navBar class="home-nav"><div slot="center">购物街</div></navBar>
    <!-- 直接封装成小组件,且根据需要绑定是否监听配置 -->

    <tab-control
      class="tab-control-top"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlTop"
      v-show="isShowTabControl"
    ></tab-control>
    <!-- 这里是tab-control滚动至顶部吸贴效果 -->

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <HomeSwiper class="home-swiper" :banners="banners"></HomeSwiper>
      <Recommend :recommends="recommends"></Recommend>
      <FeatureView></FeatureView>
      <tab-control
        class="tab-control-scroll"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>
    <BackTop @click.native="backToTop" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/homeswiper";
import Recommend from "views/home/childComps/recommend";
import FeatureView from "views/home/childComps/featureView";

import scroll from "components/common/scroll/Scroll";
import navBar from "components/common/navbar/navBar";
import BackTop from "components/common/backTop/BackTop";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
// 用一下方法导入多个函数
import { getHome, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      // 滑动加载的图片数据保存模型
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 当前展示的产品类型，通过改变当前变量来重新指向
      currentType: "pop",
      isShowBackTop: true,
      isShowTabControl: false, //tabControl吸顶效果属性
      keepScroll: 0,
    };
  },
  computed: {
    // 将动态绑定的goods弄成一个计算属性，这样模版上的标签不会变长，代码结构就比较清晰
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    navBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  created() {
    // 把一下方法抽离为methods方法直接在首页创建完直接调用该函数，把首页需要展示的数据进行加载
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //由于触发的事件事件较多，所以利用防抖函数进行减少频繁触发事件进而优化性能
    const refresh = debounce(this.$refs.scroll.refresh, 50); //调用封装的函数
    // 通过事件总线来监听图片加载,从而减少对组件通信的繁琐问题
    this.$bus.$on("itemImageLoad", () => {
      // 调用scroll封装的刷新高度函数
      refresh();
    });
  },
  destroyed() {
    // this.$bus.$off("itemImageLoad", this.itemImgListener);
    console.log("取消图片加载监听");
  },
  // 此方法是在组件keepAlive状态下
  // 利用活跃状态保存当前垂直移动距离在进入活跃状态的组件进行距离定位
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.keepScroll, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 在不活跃时（进入其他组件时）
    this.keepScroll = this.$refs.scroll.scroll.y;
  },
  methods: {
    /*
    网络请求
    */
    getHomeMultidata() {
      getHome().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 以下请求封装
    getHomeGoods(type) {
      // 获取data数据的page
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //由于这里list是一个对象数组，所以这里不能用等于赋值，否则只会复制地址并不会深克隆那样
        // 巧用展开运算符，在进行push
        this.goods[type].list.push(...res.data.list);
        // 页码自增
        this.goods[type].page++;
        // 由于scroll到达底部默认只刷新一次，所以需要finishPullUp再进行重复调用该函数
        this.$refs.scroll.finishPullUp();
      });
    },
    /**
     * 事件监听方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 由于使用了两个同样的组件，但是他们触发的事件是同步的，以下方法是使两个相同的组件index同步
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlTop.currentIndex = index;
    },
    backToTop() {
      // 这里通过ref绑定对象，直接获取该组件对象从而获取里面公共的回到顶部函数
      this.$refs.scroll.BackToTop(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShowTabControl = -position.y > this.$refs.tabControl.$el.offsetTop;
    },
    loadMore() {
      // scroll滚动到底部加载更多图片
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  /* margin-top: 44px;*/
  height: 100vh;
}
.home-nav {
  background-color: #ff8198;
  color: #fff;

  /* position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1; 由于scroll部分用了框架没有脱标，所以定义了home-nav可以不用fixed定位从而脱标*/
}
.tab-control-top {
  position: relative;
  z-index: 9;
  background: #fff;
  top: -1px;
}
.content {
  position: absolute;
  /*用定位的方法设置视口的大小尺寸，也就是到上下左右的距离来判断*/
  top: 44px;
  right: 0px;
  left: 0px;
  bottom: 49px;
  overflow: hidden;
}
</style>
