<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.back-top img {
  height: 45px;
  width: 45px;
  position: fixed;
  right: 6px;
  bottom: 55px;
  /*脱标定位在顶部图层*/
  z-index: 10;
}
</style>
