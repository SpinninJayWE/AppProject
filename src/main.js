//js入口
import Vue from 'vue'
//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);

//2.1导入 vue-resource 
import VueResource from 'vue-resource'
//2.2:安装 vue-resource
Vue.use(VueResource)

//导入mui样式
import './lib/mui/dist/css/mui.css'
import './lib/mui/dist/css/icons-extra.css'

Vue.http.options.root="http://www.liulongbin.top:3005/"
Vue.http.options.emulateJson=true;

//导入格式化时间插件
import moment from 'moment'

//全局过滤器
Vue.filter('dataformat', function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
    // var dt = new Date(datastr);
    // var yy = dt.getFullYear();
    // var mm = (dt.getMonth()+1).toString().padStart(2,'0');
    // var dd = dt.getDate().toString().padStart(2,'0');
    // var hh = dt.getHours().toString().padStart(2,'0');
    // var ms = dt.getMinutes().toString().padStart(2,'0');
    // var ss = dt.getSeconds().toString().padStart(2,'0');
    // return `${yy}-${mm}-${dd} ${hh}:${ms}:${ss}`;
    return moment(datastr).format(pattern);
});


//按需导入mint-ui的组件
import {Header,Swipe, SwipeItem,CellSwipe  } from 'mint-ui'

Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(CellSwipe.name, CellSwipe)

//1.3导入自己的router.js路由模块
import router from './router.js'


//导入App组件

import app from './app.vue'

var vm =new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    render:c=>c(app),
    router //1.4挂载路由对象到vm实例中

});