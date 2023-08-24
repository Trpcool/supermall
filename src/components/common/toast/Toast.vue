<template>
  <div id="toast" v-show="isShow">{{ msg }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      msg: "",
    };
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.msg = message;
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    },
  },
};
</script>
<style scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  /*translate根据本身盒子宽度进行相对比例移动*/
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  color: white;
  z-index: 99999;
}
</style>
