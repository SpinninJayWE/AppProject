

<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="newslist in newsListmessage" :key="newslist.id">
                <router-link :to="'/home/newsinfo/'+newslist.id">
                    <img class="mui-media-object mui-pull-left" :src="newslist.img_url">
                    <div class="mui-media-body">
                        {{newslist.title}}
                        <p class='mui-ellipsis'><span style="font-size:12px;">时间：{{newslist.add_time|dataformat}}</span> 
                        <label style="color:rgb(15,122,253)">浏览量:&nbsp;<span class="mui-badge mui-badge-primary">{{newslist.click}}</span></label>
                        </p>
                        
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsListmessage:[]
        }
    },
    created:function(){
        this.getnewsListmsg();

    },
    methods:{
        getnewsListmsg(){
            this.$http.get("api/getnewslist").then(result=>{
                if(result.body.status==0){
                    this.newsListmessage=result.body.message;
                    
                }else{
                    Toast({message:'新闻列表获取失败！',duration:1200});
                }
                

            });

        }

    },
    filters:{

    }

}
</script>

<style scoped>
    .mui-media-body{
        text-overflow: ellipsis;
        font-size: 14px;
    }
    .mui-media-body .mui-ellipsis{
        margin-top: 4px;
        font-size: 12px;
        color:rgb(23, 163, 173);
        display: flex;
        justify-content: space-between;
    }

</style>
