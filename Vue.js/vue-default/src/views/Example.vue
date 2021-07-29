<template>
    <div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model.number="valueModel2" />
        <textarea v-model="valueModel3"></textarea>
        <div>{{ valueModel3 }}</div>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            valueModel: 'South Korea',
            valueModel2: 12,
            valueModel3: '안녕하세요.'
        };
    },
    setup() {},
    create() {},
    mounted() {
        // let valueModel3 = 11;
        console.log(this.valueModel2);
        // console.log(valueModel3);
    },
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>