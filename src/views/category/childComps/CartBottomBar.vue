<template>
  <div id="bottom-bar">
    <div class="check-bottom">
      <div class="check-all" @click="isCheckAll">
        <img v-show="isSelectAll" src="~assets/img/cart/chosen.png" alt="" />
      </div>
      <span>全选</span>
    </div>
    <div class="total">合计：￥{{ totalPrice }}</div>
    <div class="calculate" @click="totalClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  components: {},
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    totalPrice() {
      return this.$store.getters.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return pre + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.getters.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      //   return !this.$store.getters.cartList.filter((item) => !item.checked)
      //     .length;
      //   判断是否全选
      return this.$store.getters.cartList.length != 0
        ? !this.$store.getters.cartList.find((item) => !item.checked)
        : false;
    },
  },
  methods: {
    isCheckAll() {
      if (this.isSelectAll) {
        this.$store.getters.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.getters.cartList.forEach((item) => (item.checked = true));
      }
    },
    totalClick() {
      if (this.$store.getters.cartList.find((item) => item.checked)) {
        this.$toast.show("购买成功！~~");
      } else {
        this.$toast.show("请选择商品！");
      }
    },
  },
};
</script>
<style scoped>
#bottom-bar {
  width: 100vw;
  height: 40px;
  background: rgb(249, 249, 249);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 49px;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-bottom {
  display: flex;
  height: 100%;
  width: 80px;
  justify-content: center;
  align-items: center;
}
.check-bottom span {
  margin-left: 10px;
  color: #9e9e9e;
}
.check-all {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: #c0c0c0 solid 1px;
  display: flex;
}
.check-all img {
  height: inherit;
  width: inherit;
}
.total {
  height: 100%;
  display: flex;
  align-items: center;
  color: #787878;
  position: relative;
  left: -13px;
}
.calculate {
  height: 100%;
  width: 100px;
  background: red;
  text-align: center;
  line-height: 40px;
  color: white;
}
</style>
