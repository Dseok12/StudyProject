<template>
    <div>
        <h2>calculator</h2>
        <div>
            <input type="text" v-model.number="num1" @keyup="plusNumbers">
            <span> + </span>
            <input type="text" v-model.number="num2" @keyup="plusNumbers">
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'calculator',
    components: {},
    computed: {},
    watch: {},
    data(){
        return{
            num1: 0,
            num2: 0,
            result: 0,
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        plusNumbers(){
            this.result = this.num1 + this.num2;
        }
    }
}
</script>

<style scoped>

</style>