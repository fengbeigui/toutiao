
<template>
  <!-- template最外层只能包含一个标签 -->
  <div>
    <!-- 千万不要加空格 -->
    <keep-alive include="index,search">
        <!-- 组件占位符 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 必须暴露一个对象，对象是组件的配置
export default {};
</script>

<style>
/* 字体样式，需要连网，可以找找下载下来的方式方法 */
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
/* 导入vant样式 */
@import url("../node_modules/vant/lib/index.css");

/* 组件样式，会污染全局 */
/* 公共样式 */
* {
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
}
a:hover {
  text-decoration: none;
}
ul,
li,
ol {
  list-style: none;
}
i,
em {
  font-style: normal;
}
</style>