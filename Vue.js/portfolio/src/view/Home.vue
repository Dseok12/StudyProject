<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/img/img01.jpg" class="d-block w-100 img-fluid" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>이 홈페이지는 Vue.js로 만들었습니다.</h5>
                    <p>디자인 레이아웃은 Bootstrap을 사용하여 제작하였습니다.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="../assets/img/img02.jpg" class="d-block w-100 img-fluid" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>뛰어난 문제해결력</h5>
                    <p>문제에 직면하면 해결하기위한 여러가지의 방법들을 생각하고 문제점의 원인을 잘 파악합니다.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="../assets/img/img03.jpg" class="d-block w-100 img-fluid" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>끊임없는 호기심</h5>
                    <p>새로운 것에 굉장한 흥미를 느끼고 한번 시작을하면 끝까지 해보는 끈기를 가지고 있습니다.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="wrap container">
            <h1 class="mt-5 mb-4">Portfolio</h1>
            <a href="./Portfolio.vue" class="btn btn-primary animate__animated animate__pulse">더 보러가기</a>
            <div class="flex_box">
                <div class="card" v-for="(content,i) in List" :key="i">
                    <img :src="List[i].thumnail" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{List[i].name}}</h5>
                        <p class="card-text">{{List[i].description}}<strong>{{List[i].mode}}</strong></p>
                    </div>
                </div>
            </div>
            <h1 class="mt-5 mb-4">ABOUT</h1>
            <a href="./About.vue" class="btn btn-primary animate__animated animate__pulse">더 보러가기</a>
        </div>
    </div>
</template>

<script>
import portfolioList from '../assets/data/portfolio'

export default {
    name:'/*컴포넌트 제목*/',
    props: {/*부모에게서 받아온 데이터*/},
    components: {
        
    },
    computed: {},
    watch: {/*실시간 감시*/},
    data(){
        return{
            List: portfolioList,
            
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
/* @import '@splidejs/splide/dist/css/themes/splide-default.min.css'; */
.flex_box{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}
.card{
    width: 33%;
    margin-top: 30px;
}
strong{
    display: block;
}
@media (max-width: 640px) {
    .carousel-inner .desc{
        position: absolute;
        top: 50%;left: 50%;
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 700;
        transform: translate(-50%,-50%);
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 10px;
    }
    .flex_box{
        display: block;
    }
    .card{
        width: 90%;
        margin: 0 auto;
        margin-top: 30px;
    }
}
</style>