<template>
    <div>
        <form>
            <p>성</p>
            <input type="text"  v-model="lastName"/>
            <p>이름</p>
            <input type="text"  v-model="firstName"/>
        </form>
        <h1>Hello, {{ lastName }}{{ firstName }}</h1>
        <h1>Hello, {{ getFullName() }}</h1>
        <h1>Hello, {{ fullName }}</h1>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            firstName: '재석',
            lastName: '유',
        };
    },
    computed: {
        fullName(){
            return this.lastName + this.firstName;
        }
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        getFullName(){
            return this.lastName + this.firstName;
        }
    }
}
</script>

<style scoped>
    form {
        width: 200px;
        margin: 0 auto;
    }
    form input{
        width: 100%;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
    }
    form p{
        margin-top: 30px;
        margin-bottom: 0px;
        text-align: left;
    }
</style>