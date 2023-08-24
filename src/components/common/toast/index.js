import Toast from "./Toast";
const obj = {};
// 封装为插件直接在vue中使用
// 安装插件时执行install函数
obj.install = function (vue) {
  // 创建出一个组件的对象
  const toastConstructor = vue.extend(Toast); //组件构造器
  // new一个实例
  const toast = new toastConstructor();
  //   手动挂载在div中
  toast.$mount(document.createElement("div"));
  //   挂载到页面
  document.body.appendChild(toast.$el);

  vue.prototype.$toast = toast;
};
export default obj;
