<template>
    <div>
        <pageTitle title='부모 컴포넌트에서 전송한 페이지 타이틀'/>
    </div>
</template>

<script>
import pageTitle from '../components/pageTitle.vue';
export default {
    name:'',
    components: {
        pageTitle
    },
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
    methods: {}
}
</script>

<style scoped>

</style>