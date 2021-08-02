<template>
    <div>
        <button type="button" @click="childFunction" ref="child_btn">자식에 있는 컴포넌트 클릭</button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    computed: {},
    watch: {},
    data(){
        return{
            sampleData: '',
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        childFunction(){
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
        }
    }
}
</script>

<style scoped>

</style>