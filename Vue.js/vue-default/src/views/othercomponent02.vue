<template>
    <div>
        <page-title :title="title"/>
        <ChildComponent :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" />
    </div>
</template>

<script>
import pageTitle from '../components/pageTitle.vue';
import ChildComponent from './ChildComponent.vue';
export default {
    name:'',
    components: {
        'page-title':pageTitle, ChildComponent
    },
    computed: {},
    watch: {},
    data(){
        return{
            title: '부모 컴포넌트에서 전송한 페이지 타이틀',
            likes: 23,
            isOk: true,
            commentIds: [1, 5, 3, 2],
            author: {
                name: '홍길동',
                commpany: '회사이름',
            }
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