<template>
  <div id="cart">
    <navBar class="nav-bar"><div slot="center">我的档案</div></navBar>
    <top-avatar />
    <money />
    <others />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navBar";

import TopAvatar from "./childComps/TopAvatar";
import Money from "./childComps/Money";
import Others from "./childComps/Others";
export default {
  name: "Profile",
  components: {
    navBar,
    TopAvatar,
    Money,
    Others,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
  height: 100vh;
  width: 100vw;
}
.nav-bar {
  background: #ff8198;
  color: white;
  font-weight: 500;
}
</style>
