import { request } from "./request";
export function getDetail(iid) {
  return request({
    // 在baseURL上拼接路径
    url: "/detail",
    // 传入参数
    params: {
      iid,
    },
  });
}
export function getRecommend() {
  return request({
    url: "/recommend",
  });
}
export class Goods {
  constructor(itemInfo, columns, service) {
    this.itemInfo = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.service = service;
  }
}
