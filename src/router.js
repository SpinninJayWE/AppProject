import Vuerouter from "vue-router"

//导入路由组件
import Home from './components/tabbar/Home.vue'
import membr from './components/tabbar/membr.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newsList from './components/news/newsList.vue'


//3.创建路由对象
var router = new Vuerouter({
    routes:[ //配置路由规则
        {path:"/",redirect:'/home'},
        {path:"/Home",component:Home},
        {path:"/member",component:membr},
        {path:"/search",component:search},
        {path:"/shopcar",component:shopcar},
        {path:"/home/newsList",component:newsList}
    ],
    linkActiveClass:'mui-active'  //覆盖默认的路由高亮类
});

//把路由对象暴露出去
export default router