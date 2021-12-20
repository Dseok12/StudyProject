<template>
  <div class='inputBox'>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo () {
      localStorage.setItem(this.newTodoItem, this.newTodoItem)
      this.clearInput()
    },
    clearInput () {
      this.newTodoItem = ''
    }
  }
}
</script>

<style lang="scss" scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  width: 100%;
  margin: 0 auto;
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
  color: #fff;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
