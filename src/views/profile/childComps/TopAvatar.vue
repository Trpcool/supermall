<template>
  <div id="top-avatar">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="content">
      <div><a href="#">登录/注册</a></div>
      <div class="text">
        <img src="~assets/img/profile/phone.svg" alt="" /><span
          >暂无绑定手机号</span
        >
      </div>
    </div>
    <div class="inner">
      <img src="~assets/img/profile/right.png" alt="" />
    </div>
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
#top-avatar {
  display: flex;
  height: 80px;
  background: #ff8198;
}
.avatar {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar img {
  height: 80%;
}
.content {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content img {
  width: 20px;
}
.content .text {
  display: flex;
  color: white;
}
.content span {
  padding: 2px;
}
.content a {
  style: none;
  color: white;
  padding: 3px;
}
.inner {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner img {
  height: 30%;
}
</style>
