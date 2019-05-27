<template>
    <div class="pinglun">
        <form class="pinglunform">
            <h4>发表评论</h4>
            <hr/>
            <textarea placeholder="请输入评论内容，不得少于三个字或者字符！" maxlength="120" class="mui-input-clear">
            </textarea>
            <button type="button" class="mui-btn mui-btn-primary">发送评论</button>
        </form>
        <div class="pinglunglist">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="(pinglun,index) in pinglunmessage" :key="index">
                    <a href="javascript:;">
                        <div class="mui-media-body">
                            <div class="pinglunHeader">
                            <span>#{{index+1}}</span><span>用户：{{pinglun.user_name}}</span><span>发表时间：{{pinglun.add_time|dataformat}}</span>
                            </div>
                            <p class='mui-ellipsis'>{{pinglun.content}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <button type="button" class="mui-btn mui-btn-warning"  style="width:100%;margin:8px auto;" @click="getmove">加载更多</button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
// import mui from '../../lib/mui/js/mui.js'
// mui(document.body).on('tap', '.mui-btn', function(e) {
//     mui(this).button('loading');
//     setTimeout(function() {
//         mui(this).button('reset');
//     }.bind(this), 2000);
// });
export default {
    data(){
        return {
            pageindex:1,
            pinglunmessage:[]
        }
    },
    created:function(){
        this.getpinglunlist();
    },
    methods:{
        getpinglunlist(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
               if(result.body.status === 0){
                   Toast('获取评论数据成功')
                //    this.pinglunmessage=result.body.message;
                //每当获取新评论数据的时候，不要把老数据清空覆盖，应该以老数据，拼接上新数据 使用concat
                    this.pinglunmessage=this.pinglunmessage.concat(result.body.message);
                //    console.log(this.pinglunmessage);
               }else{
                   Toast('获取评论数据失败')
               }

            });
        },
        getmove(){
            this.pageindex++;
            this.getpinglunlist();
        }
    },
    props:[
        'id'
    ]
    
}
</script>

<style lang="css" scoped>
    .pinglun h4{
        padding-left: 5px;
    }
    .pinglun .mui-input-clear{
        margin-bottom: 0px;
        font-size: 13px;
        width: 94%;
        margin-left: 3%;
    }
    .pinglunform .mui-btn{
        margin: 0px 0px 8px 10px;
        width: 95%;
    }

    .pinglunHeader{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        
    }

    
</style>