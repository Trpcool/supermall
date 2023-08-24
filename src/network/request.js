import axios from "axios";
// 封装
// export function request(config, success, failure) {
//   //后面两个参数是回调的时候返回的请求装态
//   // 1.创建实例
//   const instance = axios.create({
//     // 配置基全局的baseURL参数和响应时间
//     baseURL: "http://123.207.32.32:7888/api/hy66",
//     timeout: "5000"
//   });
//   instance(config) //配置参数
//     .then(res => {
//       success(res); //回调响应成功结果
//     })
//     .catch(err => {
//       failure(err); //捕获错误
//     });

// }

// 最终方案
export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    // 配置基全局的baseURL参数和响应时间
    baseURL: "http://123.207.32.32:7888/api/hy66",
    timeout: "5000",
  });
  //2.拦截器（这里是当下的实例拦截）只有拦截后才能进行数据响应
  instance.interceptors.response.use(
    //也就是实例后调用拦截器方法在调用响应或请求的方法在用use进行成功或回调参数操作
    (config) => {
      // console.log("拦截", config); //拦截后必需得返回，否则后面请求获取不了数据
      return config.data;
      /**
       * 作用
       * 1.发送网络请求时，正在加载的图片进行交互提示
       * 2.某些网络请求（比如登录（token））,必需携带一些特殊的参数
       */
    },
    (err) => {
      console.log(err);
    }
  );

  // 3.发送真正的请求
  return instance(config); //其本身就是一个promise所以直接返回他就可以
}
