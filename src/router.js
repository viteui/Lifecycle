import VueRouter from 'vue-router'
import PageOne from './components/PageOne.vue'
import PageTwo from './components/PageTwo.vue'
import Page3 from './components/3.vue'
import Page4 from './components/404.vue'
import Page5 from './components/4.vue'
import Page6 from './components/5.vue'
import Page7 from './components/6.vue'
import Page8 from './components/7.vue'
import { Lifecycle } from './life'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/1',  component: PageOne },
    { path: '/2', name:'2',component: PageTwo },
    { path: '/3', component: Page3 },
    { path: '/4', component: Page5 },
    { path: '/5', component: Page6 },
    { path: '/6', component: Page7 },
    { path: '/7', component: Page8 },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
})

function preventBack(path ,type="vue") {
    console.log("返回触发的类型",type,path)
    // window.history.pushState(null, null,path);
    router.push('2');
}

// window.addEventListener('popstate', function(event) {
   
//     const path = event.target.location.pathname
//     //window.location.href
//     // 阻止用户返回到上一个状态
//     console.log('popstate',path,JSON.parse(JSON.stringify(event)) ,window.location.pathname)
//     Lifecycle.beforeunload(path)
//     const defaultValue = Lifecycle.getDefaultValue(path)
//     console.log(1,defaultValue)
//     if (!defaultValue) {
//         Lifecycle.unload(path)
//     } else {
//         preventBack(path,"popstate")
//     }
//   });
router.beforeEach((to, from, next) => {
   

    try {
         // const target = Lifecycle.getTarget(from.path)
    Lifecycle.beforeunload(from.path)
    // target?.addEventListener('touchmove', function(e) {
    //     Lifecycle.beforeunload(from.path)
    // }, { passive: false });
    // Lifecycle.beforeunload(from.path)
    const defaultValue = Lifecycle.getDefaultValue(from.path)
    if (!defaultValue) {
        next()
        Lifecycle.unload(from.path)
    } else {
        preventBack(from.path)
    }
      } catch (error) {
        if (error.name === 'NavigationDuplicated') {
          // 处理导航
          console.log('Navigation duplicated, but handled');
        }
      }
    return
})
export default router

// 现在，应用已经启动了！