<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length != 0">
      <div class="user-comment">
        <span>用户评价</span>
        <span class="more">
          <a href="">更多</a>
        </span>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <img v-for="item of commentInfo.images" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$emit("finishedHeight");
  },
  filters: {
    showDate(value) {
      // 传入时间措单位是秒
      const date = new Date(value * 1000);
      // 由于js中没有date格式不像java一样有格式化，所以这里我用字符传拼接办法
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
  },
};
</script>
<style scoped>
.comment-info {
  border-bottom: #cfcfcf solid 2px;
  margin-bottom: 6px;
}
.user-comment {
  border-bottom: #cfcfcf solid 2px;
  margin: 0px 15px 0px 15px;
  padding: 15px 0px 15px 0px;
}
.user-comment > span:nth-child(1) {
  font-weight: 600;
}
.more {
  float: right;
  font-weight: 600;
}
.more a {
  color: black;
}
.info-user {
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
}
.info-user img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.info-user span {
  margin-left: 10px;
  font-size: 17px;
}
.info-detail {
  padding: 0px 15px 0px 15px;
}
.info-other {
  color: #666;
  font-size: 15px;
}
.date {
  margin-right: 5px;
}
.info-detail img {
  margin-top: 5px;
  width: 100px;
  height: 110px;
}
</style>
