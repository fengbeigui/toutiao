import Vue from "vue"

//  导入App.vue组件
import App from "./App.vue"
// 导入登录组件
import Login from "@/pages/Login"
//导入注册组件
import Register from "@/pages/Register";
//导入注册组件
import Personal from "@/pages/personal";
import EditProfile from "@/pages/EditProfile";
import UserFollow from "@/pages/UserFollow";
import UserComment from "@/pages/UserComment";
import PostDetail from "@/pages/PostDetail";
import Index from "@/pages/Index";
import Search from "@/pages/Search";

import Comment from "@/pages/postcomment/PostComment.vue";

//导入vant-ui组件
import Vant, { Toast } from 'vant';
//导入axios
import axios from "axios";


//导入路由构造函数
import VueRouter from 'vue-router'


//注册下路由, 在.vue文件中要使用router-link或者router-view.需要注册下插件
Vue.use(VueRouter);
Vue.use(Vant);

//把axios挂载到原型
Vue.prototype.$axios = axios;  //this.$axios  $axios为自定义
//基准路径，以后每次请求都会自动在前面加上该路径
axios.defaults.baseURL = "http://localhost:3000";
//axios.defaults.baseURL = "http://106.54.54.189:3000";

//路由 2.创建路由配置
const routes = [
    { path: '/login', component: Login },
    { path: "/register",component: Register},
    { path: "/personal",component: Personal},
    { path: "/edit_profile", component: EditProfile },
    { path: "/user_follow", component: UserFollow },
    { path: "/user_comment", component: UserComment },
    { path: "/post_detail/:id", component: PostDetail },
    // :id文章的id
    { path: "/post_comment/:id", component: Comment },

    { path: "/search/", component: Search },
    

    { path: "/", component: Index },
]

//路由：3.创建对象
const router = new VueRouter({
    routes
});

//路由守卫，就是一页面跳转之前的拦截器
//to要跳转之后的页面，去哪里
//from跳转之前的页面，来着哪里
//next 必须要调用next() 调用才会执行跳转，还可以重定向，next("/login")
router.beforeEach((to,from,next)=>{
    //是否有token
    const hasToken = localStorage.getItem("token");

    //判断是否是需要登录权限的页面
    if(to.path === "/personal" || to.path === "/edit_profile"){
        //判断本地是否有token
        if(hasToken){
            //正常跳转
            next();

        }else{
            //没有token正常跳转到登录
            next("/login")
        }
    }else{
        //所有人都可以访问的页面正常浏览
        next();
    }
})

//axios的统一的拦截器，拦截响应
//固定的声明
axios.interceptors.response.use(res=>{
    //console.log(res)
    const{message,statusCode}=res.data;

    if(statusCode === 401){
        Toast.fail(message);
    }

    //token过期了，或者token无效，一般引起的原因可能token被清空，密码修改了
    if(message === "用户信息验证失败"){
        //跳转到登录
        router.push('/login')
    }
    //必须要返回res
    return res;
})
new Vue({
    el: "#app",
    // data:{
    //     message:"hello webpack和vue"
    // },

    //路由：4.挂载到跟实例
    router,

    // 指定一个组件渲染根实例，这个组件可以成为最底层的组件
    render: function (createElement) {
        // render函数使用固定的写法，只有App是可变；
        return createElement(App)
    },

})