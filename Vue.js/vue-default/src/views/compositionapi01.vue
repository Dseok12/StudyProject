<template>
    <div>
        <h2>계산기</h2>
        <div>
            <input type="text" v-model.number="state.num1" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model.number="state.num2" @keyup="plusNumbers" />
            <span> = </span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'',
    setup(){
        let state = reactive({
            num1: 0,
            num2: 0,
            result: 0
        });
        
        function plusNumbers () {
            state.result = state.num1 + state.num2;
        }

        return {
            state,
            plusNumbers
        }
    }
}
</script>

<style scoped>

</style>