//js入口
import Vue from 'vue'

//导入mui样式
import './lib/mui/dist/css/mui.css'


//按需导入mint-ui的组件
import {Header,Tabbar, TabItem} from 'mint-ui'

Vue.component(Header.name,Header);

  

//导入App组件

import app from './app.vue'

var vm =new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    render:c=>c(app)

});