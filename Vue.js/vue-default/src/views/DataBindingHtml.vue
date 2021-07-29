<template>
    <div>
        <div v-html="htmlString"></div>
        <div v-html="htmlbinding"></div>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            htmlString: '<p style="color:red;">This is a red string.</p>',
            htmlbinding:'<h1 style="background-color: #333; color: #fff; padding:10px; width:300px; margin: 0 auto; cursor:pointer;">This is a Headline.</h1>',
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