<template>
  <div>
      <!-- 头部组件 -->
      <HeaderNormal title="精彩跟帖"/>

      <!-- 评论模块 -->
      <div class="comment">
          <div class="comment-info">
              <!-- 左侧用户信息 -->
              <div class="comment-user">
                  <!-- 头像 -->
                  <img src="../../../static/timg.jpg" alt="">
                    <!-- 用户名字 -->
                    <div>
                        <p>火星网友</p>
                        <span>2小时</span>
                    </div>
                </div>
                <span class="reply">回复</span>
          </div>

      <!-- 评论楼层 -->
       <div class="comment-floor">
         <div class="floor-header">
           <span>1 火星网友</span>
           <i>2小时前</i>
           <em>回复</em>
         </div>

          <div class="comment-content">
           文章说的很有道理！
         </div>
       </div>

          <div class="comment-content">
                内容部分，啦啦啦
          </div>
      </div>

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