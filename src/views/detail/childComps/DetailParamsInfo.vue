<template>
  <div class="detail-params-info">
    <table v-for="table in itemInfo.rule.tables" v-if="table.length !== 0">
      <tr v-for="tr in table">
        <td v-for="td in tr">{{ td }}</td>
      </tr>
    </table>
    <div class="info-set">
      <div v-for="item in itemInfo.info.set">
        <span class="s-key">{{ item.key }}</span>
        <span class="s-value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$emit("finishedHeight");
  },
};
</script>
<style scoped>
.detail-params-info {
  width: 100%;
}
table {
  width: 100%;
  padding: 10px;
}
table tr {
  border-bottom: #cfcfcf solid 2px;
  display: flex;
  padding: 20px;
}
tr td {
  flex: 1;
}
.info-set {
  padding: 0px 16px 0px 16px;
}
.info-set div {
  display: flex;
  border-bottom: #cfcfcf solid 2px;
  padding: 15px 0px 15px 0px;
}
.info-set div:last-child {
  border-bottom: #cfcfcf solid 4px;
}
.s-key {
  flex: 1;
}
.s-value {
  flex: 4;
  color: #ff5777;
  display: block;
}
</style>
