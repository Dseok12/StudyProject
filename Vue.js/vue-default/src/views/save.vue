<template>
    <div>
        <input type="text" v-model="userInfo.name" />
        <input type="text" v-model.number="userInfo.age" @keyup.enter="saveUserInfo" />
        <input type="text" v-model="userInfo.job" @keyup.enter="saveUserInfo" />
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    computed: {},
    watch: {},
    data(){
        return{
            userInfo: {
                name: '',
                age: '',
                job: '',
            }
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUserInfo(){
            if(this.userInfo.name == ''){
                // return alert('사용자의 이름을 입력하세요.')

                // 모듈 가져오기 npm node package module 사용해보기 (sweetalert 사용하기)
                return this.$swal('사용자 이름을 입력하세요.');
            }

            if(this.userInfo.age == 0 || this.userInfo.age =='') {
                return alert('나이를 입력하세요.');
            }

            // const params = {
            //     name: this.name,
            //     age: this.age,
            //     job: this.job
            // }

            const r = this.saveData(this.userInfo);
            if (r == 'S'){
                alert('사용자 정보가 생성되었습니다.')
            }
        },
        saveData(params){
            console.log(params);
            const r = 'S';
            return r;
        }


    }
}
</script>

<style scoped>

</style>