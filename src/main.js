import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router  from './router'
import { Lifecycle } from './life'
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui'
Vue.config.productionTip = false
new Lifecycle()
Vue.use(VueRouter)
Vue.use(ElementUI);

// Vue.directive('prevent-touchmove', {
//   // 当被绑定的元素插入到 DOM 中时执行
//   inserted: function (el) {
//     // 阻止默认行为 touchmove
//     el.addEventListener('touchmove', function (event) {
//       alert("prevent 弹窗了")
//       event.preventDefault();
//     }, { passive: false });
//   }
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
document.addEventListener('touchmove', function(e) {
  // window.confirm("确认退出");
  e.preventDefault();
  }, { passive: false });
