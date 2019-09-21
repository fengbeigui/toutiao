import Vue from "vue"

// + 导入App.vue
import App from "./App.vue"
import Login from "@/pages/Login"

//导入路由构造函数
import VueRouter from 'vue-router'


//注册下路由
Vue.use(VueRouter)

//路由 2.创建路由配置
const routes = [
    { path: '/login', component: Login }
]

//路由：3.创建对象
const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    // data:{
    //     message:"hello webpack和vue"
    // },

    //路由：4.挂载到跟实例
    router,

    render: function (createElement) {
        return createElement(App)
    },

})