import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router  from './router'
import { Lifecycle } from './life'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
new Lifecycle()
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// window.addEventListener('beforeunload',(event)=>{
//   event.preventDefault()
//   event.returnValue ="9999"
// })