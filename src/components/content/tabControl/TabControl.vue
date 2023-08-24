<template>
  <div class="tab-control">
    <div
      v-for="(item, index) of titles"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 40px;
  font-size: 15px;
  top: 44px;
}
.tab-control-item {
  flex: 1;
}

.active {
  color: #ff5777;
}
span {
  padding: 5px;
}
/*当前绑定活跃状态class下的span*/
.active span {
  border-bottom: #ff8198 solid 3px;
}
</style>
