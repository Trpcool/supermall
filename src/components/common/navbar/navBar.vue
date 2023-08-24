<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
.nav-bar {
  display: flex;
  width: 100vw;
  height: 44px;
  box-shadow: 0px 1px 1px 1px rgb(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
  line-height: 44px;
}
</style>
