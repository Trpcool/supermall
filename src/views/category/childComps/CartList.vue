<template>
  <div class="cart-list">
    <porduct-item v-for="item of cartList" :product="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PorductItem from "./PorductItem";

export default {
  name: "CartList",
  components: {
    PorductItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>
<style scoped></style>
