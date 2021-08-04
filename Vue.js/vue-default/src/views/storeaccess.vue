<template>
    <div>
        <h1>Cart: {{ cartCount }}</h1>
        <h1>Cart Product A: {{ productACount }}</h1>
        <h1>Cart + Cart Product A: {{cartCount + productACount}}</h1>
        <h2>Count: {{ count }}</h2>
        <button type="button" @click="increment">increment</button>
    </div>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        cartCount(){
            return this.$store.getters.cartCount;
        },
        productACount(){
            return this.$store.getters.productACount;
        },
    },
    methods: {
        increment(){
            this.$store.commit('increment');
        }
    }
}
</script>

<style scoped>

</style>