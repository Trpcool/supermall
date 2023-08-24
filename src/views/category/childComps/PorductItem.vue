<template>
  <div id="product-item">
    <div class="item">
      <div class="check">
        <!-- 这里的选择商品是放在vuex模型里面 -->
        <div class="check-item" @click="isChecked">
          <img
            v-show="product.checked"
            src="~assets/img/cart/chosen.png"
            alt=""
          />
        </div>
      </div>
      <img :src="product.image" alt="" />
      <div class="item-content">
        <h5>{{ product.title }}</h5>
        <p>{{ product.desc }}</p>
        <div class="param">
          <span>￥{{ product.price }}</span>
          <span>x{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data() {
    return {
      isCheck: false,
    };
  },
  props: {
    product: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    isChecked() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>
<style scoped>
#product-item {
  width: 100vw;
  box-sizing: border-box;
  height: 80px;
  border-bottom: #d7d7d7 solid 2px;
  padding: 5px;
}
.item h5 {
  width: 200px;
  padding: 0px;
  margin: 0px;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item p {
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0px;
  padding: 3px;
  font-size: 10px;
  width: 200px;
}
.item {
  display: flex;
  justify-content: space-around;
}
.item img {
  height: 70px;
  border-radius: 5px;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-item {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: #c0c0c0 solid 1px;
  display: flex;
}
.check-item img {
  height: inherit;
  width: inherit;
}
.param {
  padding: 4px;
  display: flex;
  justify-content: space-between;
}
.param span:first-child {
  color: red;
  font-weight: 600;
  font-size: 17px;
}
</style>
