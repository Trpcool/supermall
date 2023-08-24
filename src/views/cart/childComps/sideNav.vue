<template>
  <div id="side-nav">
    <scroll class="scroll" :probe-type="3" :pull-up-load="true" ref="scroll">
      <ul>
        <li
          v-for="item of titles"
          @click="
            index = item.maitKey;
            itemClick(item.maitKey);
          "
          :class="{ active: item.maitKey == index }"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "SideNav",
  components: {
    Scroll,
  },
  props: {
    titles: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  mounted() {
    this.$refs.scroll.refresh();
  },
  data() {
    return {
      index: 3627,
    };
  },
  methods: {
    itemClick(key) {
      this.$emit("itemInfo", key);
    },
    refresh() {
      this.$refs.scroll.refresh();
      console.log(this.$refs.scroll.scroll.scrollerHeight, "---");
    },
  },
};
</script>
<style scoped>
#side-nav {
  width: 70px;
  height: 100%;
  background: rgb(255, 156, 174);
}
.scroll {
  height: 100%;
  overflow: hidden;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
}
ul li {
  height: 35px;
  border-bottom: rgb(219, 219, 219) solid 1px;
  text-align: center;
  line-height: 35px;
  color: rgb(255, 255, 255);
}
.active {
  background: rgba(0, 0, 0, 0.2);
}
</style>
