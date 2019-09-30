<template>
  <div class="container">
      <!-- 头部组件 -->
      <HeaderNormal title="精彩跟帖"/>

      <!-- 评论模块 -->
        <!-- v-model：是否在加载
     v-for="(item, index) in comments"		     finished：是否加载完毕
     :key="index">		     load：到底部触发加载 -->
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :immediate-check="false"
    @load="onLoad"
    >

      <div class="comment"
      v-for="(item,index) in comments"
      :key="index"
      >
          <div class="comment-info">
              <!-- 左侧用户信息 -->
              <div class="comment-user">
                  <!-- 头像 两个不能同时存在，使用v-if-->
                  <img :src="$axios.default.baseURL + item.user.head_img" v-if="item.user.head_img">
                  <img src="../../../static/timg.jpg" v-else>
                    <!-- 用户名字 -->
                    <div class="user-info">
                        <p>{{item.user.nickname}}</p>
                        <span>2小时</span>
                    </div>
                </div>
                <span class="reply"  @click="handleReply(item)">回复</span>
          </div>

        <!-- 评论楼层的组件 当v-if="item.parent"有值就传 -->
            <CommentFloor 
            v-if="item.parent" 
            :data="item.parent"
            @handleReply="handleReply"/>

          <div class="comment-content">
                <!-- //内容部分，啦啦啦 -->
                {{item.content}}
          </div>
      </div>
    </van-list>

    <!-- 定义 detail传给页脚组件,把事件传过去的方法-->
   <!--  <PostFooter :post="detail" @getComments="getComments"/> -->
        <!-- post文章的详情
     replyComment：要回复的评论
     getComments：发布评论成功后重新请求评论的列表 -->
     <PostFooter 
     :post="detail" 
     :replyComment="replyComment" 
     @handleReply="handleReply"
     @getComments="getComments"/>
     
  </div>
</template>

<script>
//导入脚本
import config from "./PostComment.js"
export default config;

</script>

<style scoped lang="less">
@import url("./PostComment.less");
</style>