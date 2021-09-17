<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            Clear All
        </span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name:'TodoFooter',
    methods: {
        ...mapMutations({
            clearTodo: 'clearAllItems'
        }),
        // clearTodo(){
        //     // this.$emit('clearAll');
        //     this.$store.commit('clearAllItems');
        // }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  /* 추가 */
  display: block;
  cursor: pointer;
}
</style>