<template>
    <div>
        <h1>SKILL</h1>
        <p>CSS로 구현한 막대 그래프입니다.</p>
    </div>
    <div class="container">
        <div class="canvas">
            <div class="chart-box">
                <div class="bg-bar">
                    <div class="fill-bar1">{{bar[0]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar2">{{bar[1]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar3">{{bar[2]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar4">{{bar[3]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar5">{{bar[4]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar6">{{bar[5]}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name:'About',
    props: {/*부모에게서 받아온 데이터*/},
    components: {
        
    },
    computed: {},
    watch: {/*실시간 감시*/},
    data(){
        return{
            barbox: 0,
            bar: ['HTML 98%', 'CSS 95%', 'Javascript 75%', 'jQuery 80%', 'Vue.js 75%', 'Node.js 55%',],
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
    margin-bottom: 50px;
}
.chart-box .bg-bar{
    width: 100%;
    height: 40px;
    background-color: #ccc;
    border-radius: 10px;
    margin-top: 30px;
    position: relative;
}
.chart-box .fill-bar1{
    width: 98%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(248, 60, 60);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: white;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.chart-box .fill-bar2{
    width: 95%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(50, 31, 219);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: white;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.chart-box .fill-bar3{
    width: 75%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(228, 195, 7);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: #333;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.chart-box .fill-bar4{
    width: 80%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(228, 195, 7);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: #333;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.chart-box .fill-bar5{
    width: 75%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(31, 160, 26);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: white;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.chart-box .fill-bar6{
    width: 55%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(31, 160, 26);
    border-radius: 10px;
    position: absolute;
    transition: width 0.5s;
    color: white;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
</style>