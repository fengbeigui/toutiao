import HeaderNormal from "@/components/HeaderNormal"
//评论楼层的组件
import CommentFloor from "@/components/CommentFloor.vue"
//页面发布评论的地步
import PostFooter from "@/components/PostFooter"

export default {
    //要保存下面请求的数据需要声明一下
    data() {
        return {
            //评论列表，定义comments,属于数组
            comments: [],
            //文章的详情
            detail: {},
            //保存点击回复的评论
            replyComment: null
        }
    },

    //导入一定要注册组件
    components: {
        HeaderNormal,
        CommentFloor,
        PostFooter
    },
    methods: {
        //封装文章的id,自定义一个名字,通过id参数传过来
        getComments(id) {

            //请求文章评论
            this.$axios({
                url: "/post_comment/" + id,
                //通过点then来接收这个参数
            }).then(res => {
                //console.log(res.data);
                //请求的数据保存出来
                const { data } = res.data;
                this.comments = data;
            });
        },
        //点击回复按钮时候触发的方法
        handleReply(item){
            //获取到当前要回复的id
            this.replyComment = item;
        }

    },
    mounted() {
        //如何从路由那边拿到id，文章的id
        const { id } = this.$route.params;

        //请求评论列表的调用
        this.getComments(id);

        // 文章的详情
        const config = {
            url: "/post/" + id
        }
        //声明
        const token = localStorage.getItem("token");

        if (token) {
            config.headers = {
                Authorization: token
            }
        }

        this.$axios(config).then(res => {
            const { data } = res.data;
            // 保存到详情
            this.detail = data;
        })

    }

}