<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
              경고!
              <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <h3 slot="body">할일을 입력해주세요.</h3>
            <h5 slot="footer">할일을 입력하지 않으면 저장이 되지 않습니다.</h5>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    name:'TodoInput',
    components: {
      Modal
    },
    data(){
        return{
            newTodoItem: '',
            showModal: false
        };
    },
    methods: {
        addTodo(){
            // console.log(this.newTodoItem);
            if(this.newTodoItem !== ''){
              // this.$emit('addTodoItem', this.newTodoItem)
              // const text =this.newTodoItem.trim();
              this.$store.commit('addOneItem', this.newTodoItem);
              this.clearInput();
            } else {
              this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
input{
  width: 85%;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  font-size: 25px;
  color:#42b983;
}
</style>