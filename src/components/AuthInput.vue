
<template>
 <!-- /*  @input是输入框每次输入时候都会触发 */ -->
 <input type="text"
    class="input"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
 >
</template>

<script>
export default {
    props:[
        "placeholder",
        "value",
        "name",
        "rule",
    ],

    methods:{
        //每次输入框输入值时都会触发
        handleInput(event){
            this.$emit("input",event.target.value)
        }
    }
}
</script>

<style scoped lang="less">
//scoped 作用域样式
//lang声明样式的类型
.input{
    width:100%;
    height:38/360*100vw;
    padding:20px;
    box-sizing:border-box;
    background:#fff;
    border:none;
    border-bottom:1px #666 solid;
    outline:none;
}
</style>