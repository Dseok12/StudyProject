<template>
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/img/portfolio-bg.png" class="d-block w-100" alt="...">
                <p class="desc animate__animated animate__backInUp">실무에서 진행한 작업물들입니다.</p>
                </div>
            </div>
        </div>
        <div class="wrap container">
                <h3>퍼블리셔로서의 작업물</h3>
            <div class="flex_box">
                <div class="card animate__animated animate__backInUp" v-for="(content,i) in List" :key="i">
                    <img :src="List[i].thumnail" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{List[i].name}}</h5>
                        <p class="card-text">{{List[i].description}}<strong>{{List[i].mode}}</strong></p>
                        <a :href="List[i].link" class="btn btn-primary" target=”_blank”>보러가기</a>
                    </div>
                </div>
            </div>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
*{
    font-family: 'Noto Sans KR', sans-serif;
}
.carousel-inner{
    position: relative;
}
.carousel-inner p{
    animation-duration: 0.5s;
}
.carousel-inner .desc{
    position: absolute;
    top: 42%;left: 38.5%;
    color: rgb(255, 255, 255);
    font-size: 30px;
    font-weight: 700;
    /* transform: translate(-30%,-50%); */
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
}
.wrap h3{
    margin-top: 100px;
    font-weight: bold;
}
.flex_box{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}
.card{
    width: 33%;
    margin-top: 30px;
    animation-duration: 1s;
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