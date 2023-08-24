import Vue from "vue";
import Router from "vue-router";
const Home = () => import("views/home/home");
const Category = () => import("views/category/category");
const Cart = () => import("views/cart/cart");
const Profile = () => import("views/profile/profile");
const Detail = () => import("views/detail/Detail");
Vue.use(Router);
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    // 动态路由用"/:属性"表示路由时需要用到参数传递--
    path: "/detail/:iid",
    component: Detail,
  },
];
const router = new Router({
  mode: "history",
  routes,
});
export default router;
