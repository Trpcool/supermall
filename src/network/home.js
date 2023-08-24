import { request } from "./request";
// 这里方便管理首页的请求数据（推荐的请求方式）
export function getHome() {
  return request({
    url: "/home/multidata",
  });
}
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
