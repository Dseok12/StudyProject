<template>
    <div v-bind:style="[baseStyle, addStyle]">
        인라인 스타일 바인딩 Binding
    </div>
</template>

<script>
export default {
    data(){
        return{
            styleObject:{
                backgroundColor:'yellow',
                color: 'red',
                fontWeight: 'bold'
            },
            baseStyle: 'background-color:yellow;width:500px;height:200px;margin: 0 auto;',
            addStyle: 'color:red;font-weight:bold;'
        };
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 200px;
    }
    .active{
        background-color: rgb(160, 185, 231);
        font-weight: bold;
    }
    .text-red{
        color: crimson;
    }
</style>