<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="describe">
      <div class="start"></div>
      <div class="content">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="bottom-img" v-for="item in detailInfo.detailImage">
      <div class="key">
        {{ item.key }}
      </div>
      <img v-for="ImgArr of item.list" :src="ImgArr" alt="" @load="imageLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    imageLoad() {
      this.$emit("detailImageLoad");
    },
  },
};
</script>
<style scoped>
.start,
.end {
  width: 100px;
  border: rgb(61, 61, 61) solid 1px;
}
.start {
  position: relative;
  left: 20px;
}
.start::before {
  display: block;
  content: "";
  height: 6px;
  width: 6px;
  background: black;
  position: absolute;
  left: -1px;
  bottom: 0px;
}
.content {
  padding: 20px;
}
.end {
  float: right;
  position: relative;
  right: 20px;
}
.end::after {
  position: absolute;
  display: block;
  content: "";
  height: 6px;
  width: 6px;
  background: black;
  right: -1px;
  bottom: 0px;
}
.key {
  font-size: 20px;
}
.bottom-img {
  padding: 2px;
}
.bottom-img img {
  width: 100%;
}
</style>
