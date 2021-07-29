<template>
    <div>
        <h1>{{ sampleData }}</h1>
        <div>{{ sampleData }}</div>
        <input type="text" v-model="sampleData" />
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            sampleData: '',
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