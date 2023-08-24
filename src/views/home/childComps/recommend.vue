<template>
  <div class="recommends">
    <div v-for="(item, key) in recommends" :key="key">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommends",
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.recommends {
  display: flex;
  justify-content: space-around;
  padding: 15px 0px 15px;
  border-bottom: 10px solid #eee;
}
.recommends div {
  text-align: center;
  color: black;
  flex: 1;
}
.recommends div p {
  color: black;
  margin-top: 7px;
  font-size: 8px;
}
.recommends img {
  height: 70px;
  width: 70px;
}
</style>
