<template>
  <div class="container">
        <div class="header">
           <!--  返回上一页@click="$router.back()" -->
            <span class="iconfont iconjiantou2" @click="$router.back()"></span>
            <div class="input-wrap">
            <span class="iconfont iconsearch"></span>
            <input type="text" >           
            </div>
             <span class="search-btn">搜索</span>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.container{
    margin-top: 10px;
    .header{
        height: 30/360*100vw;
        padding:0 10px;
        display: flex;
        //两边贴边
        justify-content: space-between;
        //水平居中
        align-items: center;
        
    }
    .input-wrap{
        position: relative;
        flex: 1;
        //margin加到外面
        margin: 0 10px;
        .iconsearch{
            position: absolute;
            left: 10px;
            top: 12/360*100vw;
        }
        input{
        width: 100%;
        display: block;
        
        height: 36/360*100vw;
        border-radius: 50px;
        background: #fff;
        border: 1px #eee solid;
        padding: 0 15px 0 30px;
        font-size: 12px;
        //加上內减模式
        box-sizing: border-box;
        }
    }
    .search-btn{
        font-size: 14px;
    }
}
</style>