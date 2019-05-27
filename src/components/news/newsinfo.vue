<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfoparams.title}}</h3>
        <!-- 子标题 -->
        <div class="subtitle">
            <span>发表时间：{{newsinfoparams.add_time|dataformat}}</span>
            <span>点击{{newsinfoparams.click}}次</span>
        </div>
        <!-- 新闻内容 -->
        <div class="content" v-html="newsinfoparams.content">
            
            <!-- 评论子组件 -->
            
        </div>
        <pinglun-box :id="this.news_id"></pinglun-box>
        
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
//导入评论组件
import pinglun from '../subcomponents/pinglun.vue'
export default {
    
    data(){
        return {
            news_id:this.$route.params.id, //将url地址传递过来的ID值，挂载到data中 方面以后调用
            newsinfoparams:{}
        }
    },
    created:function(){
        this.getnewsinfoByid();
    },
    methods:{
        getnewsinfoByid(){
            this.$http.get("api/getnew/"+this.news_id).then(result=>{
                if(result.body.status==0){
                    this.newsinfoparams=result.body.message[0];
                    // console.log(result.body.message[0]);
                }else{
                    Toast('获取信息失败！');
                }
                

            });
        }
    },
    components:{
        'pinglun-box':pinglun
    }
}
</script>

<style lang="css" scoped>
        .title{
            color:rgb(190, 37, 26);
            font-size: 16px;
            text-align: center;
            margin: 10px 0px;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: rgb(72, 79, 88);
            padding: 0px 7px 0px 7px;
            border-bottom: 1px solid rgb(160, 193, 201);
        }

    
        

</style>