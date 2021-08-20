<template>
    <div>
        <h1>
            여기까지 봐주셔서 감사합니다.
            <br>귀사에 도움이 되는 인재가 되겠습니다.
        </h1>
        <div class="container flex">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">사는 곳</h5>
                    <p class="card-text">서울시 중랑구 신내동, <br>태릉입구역 근처</p>
                    <!-- <a href="#" class="btn btn-primary"></a> -->
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">메일</h5>
                    <p class="card-text">메일로 연락을 주시면<br> 연락을 드리겠습니다.</p>
                    <a href="mailto:works2020@naver.com" class="btn btn-primary">works2020@naver.com</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">연락처</h5>
                    <p class="card-text">연락이 닿지 않았다면<br> 곧 연락을 드리겠습니다.</p>
                    <a href="tel:010-7458-8189" class="btn btn-primary">010-7458-8189</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'/*컴포넌트 제목*/',
    props: {/*부모에게서 받아온 데이터*/},
    components: {
        
    },
    computed: {},
    watch: {/*실시간 감시*/},
    data(){
        return{
            sampleData: '',
        };
    },
    setup() {/*methods, computed, watch 등등을 생성 할 수 있음.*/},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {/*각종 함수 정의하는 곳*/}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
*{
    font-family: 'Noto Sans KR', sans-serif;
}
h1{
    margin-top: 100px;
}
.flex{
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-around;
}
@media (max-width: 640px) {
    .flex{
        display: block;
    }
    .flex .card{
        display: block;
        width: 100%;
        margin: 35px auto;
    }
}
</style>