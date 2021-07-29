<template>
    <div>
        <!-- <img v-bind:src="url" alt="" style="height:200px;width:auto;" /> -->
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">Click</button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            url: 'https://kr.vuejs.org/images/logo.png',
            textValue: '',
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>

</style>