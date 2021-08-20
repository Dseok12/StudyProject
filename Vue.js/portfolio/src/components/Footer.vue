<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">이 홈페이지는 Vue.js로 개발되었습니다.</h5>
                <div class="contact">
                    <p>메일: <a class="card-text" href="mailto:works2020@naver.com">works2020@naver.com</a></p>
                    <p>전화번호: <a class="card-text" href="tel:010-7458-8189">010-7458-8189</a></p>
                </div>
                <a href="/" class="btn btn-primary">Go To Home</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'/*컴포넌트 제목*/',
    props: {},
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
    methods: {}
}
</script>

<style scoped>
.contact{
    margin-top: 30px;
}
.contact p a{
    font-weight: 600;
    color:rgb(5, 68, 141);
    text-decoration: none;
}
.card{
    margin-top: 100px;
}
</style>