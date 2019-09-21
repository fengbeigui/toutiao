
<template>
	<!-- template最外层只能包含一个标签 -->
  	<div>
          <h1>第一个单文件组件</h1>
         <div class="box1">
            顶顶顶
        </div> 
        <router-link to='/login'>登陆页面</router-link>
        <router-view></router-view>
      </div>
      
</template>

<script>
// 必须暴露一个对象，对象是组件的配置
export default {

}
</script>

<style>
/* 组件样式，会污染全局 */
html{
    font-size: 10vw;
}
    
body{
    font-size:16px;
}

.box1{
    width: 2rem;
    height:2rem;
    background: skyblue;
}
</style>