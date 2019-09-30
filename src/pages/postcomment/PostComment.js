import HeaderNormal from "@/components/HeaderNormal"
export default{
        //要保存下面请求的数据需要声明一下
        data(){
            return {
                //评论列表，定义comments,属于数组
                comments:[]
            }
        },

     //导入一定要注册组件
     components:{
        HeaderNormal
     },
     mounted(){
         //如何从路由那边拿到id
         const {id} = this.$route.params;

         this.$axios({
             url:"/post_comment/" + id,
             //通过点then来接收这个参数
         }).then(res=>{
             //console.log(res.data);
             //请求的数据保存出来
             const {data} = res.data;
             this.comments = data;
         })
     }
    
}