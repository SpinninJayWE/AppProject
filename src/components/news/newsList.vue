

<template>
    <div>
        <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="newslist in newsListmessage" :key="newslist.id">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="newslist.img_url">
            <div class="mui-media-body">
                {{newslist.title}}
                <p class='mui-ellipsis'><span style="font-size:12px;">时间：{{newslist.add_time|newsTimeformat}}</span> 
                <label style="color:rgb(15,122,253)">浏览量:&nbsp;<span class="mui-badge mui-badge-primary">{{newslist.click}}</span></label>
                </p>
                
            </div>
        </a>
    </li>
</ul>
    </div>
</template>

<script>
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
                console.log(result.body);
                this.newsListmessage=result.body.message;

            });

        }

    },
    filters:{
        newsTimeformat:function(datastr){
            var dt = new Date(datastr);
            var yy = dt.getFullYear();
            var mm = (dt.getMonth()+1).toString().padStart(2,'0');
            var dd = dt.getDate().toString().padStart(2,'0');
            var hh = dt.getHours().toString().padStart(2,'0');
			var ms = dt.getMinutes().toString().padStart(2,'0');
            var ss = dt.getSeconds().toString().padStart(2,'0');
            return `${yy}-${mm}-${dd} ${hh}:${ms}:${ss}`;
        }
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
