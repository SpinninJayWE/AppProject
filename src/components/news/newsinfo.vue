<template>
    <div>
        <h4>新闻资讯详情-----{{news_id}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news_id:this.$route.params.id, //将url地址传递过来的ID值，挂载到data中 方面以后调用
            newsinfoparams:{}
        }
    },
    created:function(){

    },
    methods:{
        getnewsinfoByid(){
            
        }
    }
}
</script>

<style scoped>

</style>
