<template>
  <div class="container">
        <div class="header">
           <!--  返回上一页@click="$router.back()" -->
            <span class="iconfont iconjiantou2" @click="$router.back()"></span>
            <div class="input-wrap">
            <span class="iconfont iconsearch"></span>
            <!-- 通过双向数据绑定 value改为keyword,方便等下赋值-->
            <input type="text" v-model="keyword" placeholder="搜索关键字">           
            </div>
             <span class="search-btn" @click="handleSearch">搜索</span>
        </div>

        <!-- 渲染列表，之前封装的PostCard，列表肯定是要循环的 -->
        <!-- 接收文章详细，把item传过去 -->
        <div class="list">
            <PostCard
            v-for="(item,index) in list"
            :key="index"
            :post="item"
            />
        </div>
  </div>
</template>

<script>
//之前封装过一个列表渲染PostCard
//导入文章列表模块的组件
import PostCard from "@/components/PostCard";

export default {
    //keep-alive标签需要定义的名字
    name:"search",
    data(){
        return{
            //搜索的关键字
            keyword:"",
            //文章的列表
            list:[]
        }
    },
    components:{
        PostCard
    },
    methods:{
        //处理搜索
        handleSearch(){
            this.$axios({
                url:`/post_search?keyword=${this.keyword}`
                //.then(res=>{})看下结果
            }).then(res=>{
                //console.log(res.data);
                //通过data 的方式保存起来
                const {data } = res.data;
                
                //赋值给list
                this.list = data;
            })
        }
    }
}
</script>

<style scoped lang="less">
.container{
    margin-top: 10px;
    .header{
        height: 30/360*100vw;
        padding:0 10px;
        display: flex;
        //两边贴边
        justify-content: space-between;
        //水平居中
        align-items: center;
        
    }
    .input-wrap{
        position: relative;
        flex: 1;
        //margin加到外面
        margin: 0 10px;
        .iconsearch{
            position: absolute;
            left: 10px;
            top: 12/360*100vw;
        }
        input{
        width: 100%;
        display: block;
        
        height: 36/360*100vw;
        border-radius: 50px;
        background: #fff;
        border: 1px #eee solid;
        padding: 0 15px 0 30px;
        font-size: 12px;
        //加上內减模式
        box-sizing: border-box;
        }
    }
    .search-btn{
        font-size: 14px;
    }
}
</style>