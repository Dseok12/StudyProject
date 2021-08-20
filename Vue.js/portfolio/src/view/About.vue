<template>
    <div>
        <h1>SKILL</h1>
        <p>CSS로 구현한 막대 그래프입니다.</p>
    </div>
    <div class="container">
        <div class="canvas">
            <div class="chart-box">
                <div class="bg-bar">
                    <div class="fill-bar fill-bar1 animate__animated animate__lightSpeedInLeft">{{bar[0]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar fill-bar2 animate__animated animate__lightSpeedInLeft">{{bar[1]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar fill-bar3 animate__animated animate__lightSpeedInLeft">{{bar[2]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar fill-bar4 animate__animated animate__lightSpeedInLeft">{{bar[3]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar fill-bar5 animate__animated animate__lightSpeedInLeft">{{bar[4]}}</div>
                </div>
                <div class="bg-bar">
                    <div class="fill-bar fill-bar6 animate__animated animate__lightSpeedInLeft">{{bar[5]}}</div>
                </div>
            </div>
        </div>
        <div class="myself">
            <h1>보유 자격증</h1>
            <ul>
                <li>GTQ 1급 자격증</li>
                <li>운전면허증(1종보통)</li>
                <li>웹디자인기능사 준비중(필기합격)</li>
            </ul>
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
    overflow: hidden;
}
.chart-box .fill-bar{
    height: 40px;
    line-height: 40px;
    font-weight: 800;
    font-size: 20px;
    transition: width 0.5s;
    text-align: left;
    padding-left: 20px;
    border-radius: 10px;
    position: absolute;
}
.chart-box .fill-bar1{
    width: 98%;
    background-color: rgb(248, 60, 60);
    color: white;
    animation-duration: 1s;
}
.chart-box .fill-bar2{
    width: 95%;
    background-color: rgb(50, 31, 219);
    color: white;
    animation-duration: 1.3s;
}
.chart-box .fill-bar3{
    width: 75%;
    background-color: rgb(228, 195, 7);
    color: #333;
    animation-duration: 1.6s;
}
.chart-box .fill-bar4{
    width: 80%;
    background-color: rgb(228, 195, 7);
    color: #333;
    animation-duration: 1.9s;
}
.chart-box .fill-bar5{
    width: 75%;
    background-color: rgb(31, 160, 26);
    color: white;
    animation-duration: 2.1s;
}
.chart-box .fill-bar6{
    width: 55%;
    background-color: rgb(31, 160, 26);
    color: white;
    animation-duration: 2.4s;
}

.myself ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.myself ul li{
    list-style: none;
    font-size: 24px;
    font-weight: 600;
    padding: 20px;
    border: 1px solid #333;
    border-radius: 10px;
    cursor: pointer;
}
.myself ul li:hover{
    background-color: #333;
    color: white;
    transition: all .3s;
}
</style>