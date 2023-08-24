<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 这里获取节点元素，不一定指向的是当前组件中的wrapper元素; ref如果绑定在组件中，如果想要获取该元素则通过this.$refs.该ref
    // 可以获取该元素的节点
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 这里的距离监听事件可以根据组件需要动态绑定配置
      probeType: this.probeType,
      // 内部元素可以点击事件
      click: true,
      // 动态绑定是否监听
      pullUpLoad: this.pullUpLoad,
    });
    // 回到顶部函数监听
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 加载更多监听
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    // 由于该组件时公共组件，且有一个公共函数回到顶部，直接写在组件内
    BackToTop(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    },
    // 默认上拉加载只有一次，以下函数调用之后可以重复调用上拉加载函数
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp(); //finishPullUp()是scroll内部函数
    },
  },
};
</script>
<style scoped>
.wrapper {
}
</style>
