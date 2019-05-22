<template>
    <div>
        <!-- 輪播圖區域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用V-FOR一定要使用 :key -->
            <mt-swipe-item v-for="imglist in lunboimgList" :key="imglist.img">
                <img :src="imglist.img" alt="noimg" /> 
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格到六宫格 -->
		        <ul class="mui-table-view mui-grid-view mui-grid-9 uls">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newsList">
		                    <span class="mui-icon mui-icon-paperplane"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-alipay"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
    data(){
        return {
            lunboimgList:[] //保存轮播的数组
        }
    },
    created:function(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu:function(){
            this.$http.get("api/getlunbo").then(result=>{
                console.log(result.body); 
                if(result.body.status==0){
                    //成功
                    this.lunboimgList=result.body.message;
                }else{
                    //失败
                    Toast('加载轮播失败');
                }
            });
        }
    }
}
    
</script>


<style lang="css" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe img{
    width: 100%;
    height: 100%;
}
.uls{
    background: white;
}

.uls .mui-table-view-cell{
    border: 0;
    
}
.uls .mui-table-view-cell .mui-media-body{
    color: black;
    font-size: 13px;
    
}
.uls .mui-table-view-cell span{
    color:rgb(41, 162, 253);
    
}
    
</style>