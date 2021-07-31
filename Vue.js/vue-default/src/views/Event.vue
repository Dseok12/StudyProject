<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button><br>
        <button type="button" @click="decreaseCounter">Miner 1</button><br>
        <button type="button" @click="multiCounter">Multi 1 (X2)</button><br>
        <button type="button" @click="divisionCounter">Division 1 (X2)</button><br>
        <button type="button" @click="reset">Reset</button><br>
        <p>The counter is {{ counter }}</p>
        <button type="button" @click="one(), two()">멀티 클릭 이벤트</button><br>

        <span>거주하는 지역을 고르시오. </span>
        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충정">충정</option>
            <option value="전라">전라</option>
            <option value="경상">경상</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
        <p>당신이 거주 하는 지역은 {{ city }}(도)입니다.</p>

        <input type="text" v-model="textValue" @keyup.enter="showValue" />
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            counter: 0,
            city: '',
            textValue: ''
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter(){
            this.counter = this.counter + 1
        },
        decreaseCounter(){
            this.counter = this.counter - 1
        },
        multiCounter(){
            this.counter = this.counter * 2
        },
        divisionCounter(){
            this.counter = this.counter / 2
        },
        reset(){
            this.counter= 0
        },
        one(){
            alert('One')
        },
        two(){
            alert('Two')
        },
        changeSelect(){
            alert(this.city)
        },
        // tab, delete, esc, spacebar, up, down, left, right 키를 누를때는 이벤트가 가능하다.
        showValue(){
            alert(this.textValue)
        },
    }
}
</script>

<style scoped>
    button{
        margin-top: 20px;
        width: 300px;
        height: 40px;
        background-color: rgb(40, 94, 243);
        border: none;
        cursor: pointer;
        color: #fff;
        border-radius: 10px;
    }
    button:hover{
        background-color: rgb(20, 72, 185);
        transition: all .3s;
    }
    select{
        margin-top: 30px;
    }
    input{
        display: block;
        margin: 0 auto;
        margin-top: 30px;
    }
</style>