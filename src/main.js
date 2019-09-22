import Vue from "vue"

// + 导入App.vue
import App from "./App.vue"
import Login from "@/pages/Login"
//导入vant-ui组件
import Vant from 'vant';

//导入路由构造函数
import VueRouter from 'vue-router'


//注册下路由, 在.vue文件中要使用router-link或者router-view.需要注册下插件
Vue.use(VueRouter);
Vue.use(Vant);

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

    // 指定一个组件渲染根实例，这个组件可以成为最底层的组件
    render: function (createElement) {
        // render函数使用固定的写法，只有App是可变；
        return createElement(App)
    },

})