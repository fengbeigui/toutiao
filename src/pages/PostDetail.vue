<template>
  <div class="container">
    <!-- 文章详情页 -->
    <div class="article">
      <div class="header">
        <div class="header-left" @click="$router.back()">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew"></span>
        </div>
        <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleUnFollow">已关注</span>
      </div>
      <h3>{{detail.title}}</h3>

      <p class="post-info">{{detail.user.nickname}}2019-10-10</p>

      <div class="post-content" v-html="detail.content"></div>
    </div>
    <div class="post-btns">
      <!-- 点赞 -->
      <span @click="handleLike" :class="{like_active: detail.has_like}">
        <i class="iconfont icondianzan"></i>
        112
      </span>
      <span>
        <i class="iconfont iconweixin"></i>
        微信
      </span>
    </div>

    <!-- 页脚组件 -->
    <PostFooter />
  </div>
</template>

<script>
//导入页脚组件
import PostFooter from "@/components/PostFooter";
export default {
  data() {
    return {
      //文章的详情
      detail: {
        //user需要在模板中渲染，不然页面会报错
        user: {}
      }
    };
  },
  //存储导入的数据PostFooter
  components: {
    PostFooter
  },
  methods: {
    //关注当前的作者
    handleFollow() {
      //通过作者id关注用户
      this.$axios({
        url: "/user_follows/" + this.detail.user.id,
        //添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        const { message } = res.data;
        if (message === "关注成功") {
          //修改关注的按钮的状态
          this.detail.has_follow = true;
          this.$toast.success(message);
        }
      });
    },
    //取消关注的作者功能
    handleUnFollow() {
      //通过作者id关注用户
      this.$axios({
        url: "/user_unfollow/" + this.detail.user.id,
        //添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        const { message } = res.data;
        if (message === "取消关注成功") {
          //修改关注的按钮的状态
          this.detail.has_follow = false;
          this.$toast.success(message);
        }
      });
    },
    //点赞
    handleLike() {
     // const { id } = this.detail.id;
      this.$axios({
        url: "/post_like/" + this.detail.id,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        const { message } = res.data;
        if (message === "点赞成功") {
          //console.log(123);
          //修改关注的按钮的情况
          this.detail.has_like = false;
          this.$toast.success(message);//弹出信息框
        }
      });
    }
  },
  mounted() {
    //请求文章的详情
    const { id } = this.$route.params;
    this.$axios({
      url: "/post/" + id
    }).then(res => {
      console.log(res);

      const { data } = res.data;
      this.wenzhang = data;

      //保存到详情
      this.detail = data;
      console.log(this.detail);
    });
  }
};
</script >


<style scoped lang="less">
.container {
  padding-bottom: 100/360 * 100vw;
}
.article {
  padding: 0 10px;
  .header {
    height: 60/360 * 100vw;
    display: flex; //flex 布局
    justify-content: space-between; //向两边对齐
    align-items: center; //定义flex子项，（纵轴）方向上的对齐方式
    .header-left {
      * {
        vertical-align: middle; //vertical-align 属性设置元素的垂直对齐方式。 说明 该属性定义行内元素的基线相对...middle 把此元素放置在父元素的中部
      }
    }
    .iconnew {
      font-size: 50px;
    }
    .focus {
      width: 62/360 * 100vw;
      height: 26/360 * 100vw;
      line-height: 26/360 * 100vw;
      text-align: center;
      font-size: 12px;
      background: red;
      color: #fff;
      border-radius: 50px;
    }
    .focus_active {
      border: 1px #ccc solid;
      color: #333;
      background: none;
    }
  }
  .h3 {
    margin-bottom: 5px;
  }
  .post-info {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }
  .post-content {
    line-height: 1.5;
    // img是有服务器返回的标签，不属于当前的也米阿尼，不受scoped的影响
    /deep/ img {
      max-width: 100%;
    }
  }
}
.post-btns {
  margin-top: 30px;
  display: flex;
  //平均分配空间
  justify-content: space-around;

  span {
    padding: 0 15px;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    font-size: 12px;
    border: 1px #ddd solid;
    border-radius: 50px;
  }
  .iconweixin {
    color: #07c907;
  }

  .like_active {
    border: red 1px solid;
    i{
        color: red;
    }
  }
}
</style>