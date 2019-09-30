<template>
<div>
         <!-- 评论楼层 再调用一遍-->
        <!-- 通过组件的方式调用自己 要传parent-->
        <comment  v-if="data.parent" 
        :data="data.parent"
         @handleReply="handleReply"
        ></comment>

      <!-- 评论楼层 -->
       <div class="comment-floor">
         <div class="floor-header">
           <span> {{data.user.nickname}}</span>
           <i>2小时前</i>
           <em @click="handleReply">回复</em>
         </div>

          <div class="comment-content">
           {{data.content}}
         </div>
       </div>



</div>

</template>

<script>
export default {
    //组件的名字，自己定义，单纯的针对当前的组件命名，当前的组件可以通过该名字自己调用自己
    name:"comment",

    //传值使用props声明数据接收
    props:["data"],

    //楼层先放一放
    // data(){
    //     return{
    //         index:1
    //     }
    // },
    // mounted(){
    //     console.log(this.index++)
    // }

    // watch:{
    //     // data(){
    //     //     console.log(123);        }
    //     //data函数监听不到，使用深度监听看看，data对象
    //     data:{
    //         deep:true,
    //         handler: function name(params) {
    //             console.log(123);
                
    //         }
    //     }
    // }

    methods:{
      handleReply(){
        this.$emit("handleReplay",this.data);
      }
    }
}
</script>

<style scoped lang="less">
.comment-floor{
    border: 1px #ccc solid;
    padding: 10px;
    background: #f6f6f6;
    .floor-header{
        font-size:13px;
        color:#666;

         i{
            font-size:12px;
            color:#999;
        }
        em{
            float:right;
        }
    }

}
</style>