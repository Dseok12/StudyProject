<template>
  <div class='TodoInput'>
    <input type="text" v-model="newTodoItem" />
    <button v-on:click="addTodo">add</button>
    <span class="addContainer">

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
input:focus{
  outline: none;
}
button{
  width: 60px;
  padding: 10px;
  margin-left: 25px;
  background-color: rgb(94, 94, 94);
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  &:active{
    background-color: saddlebrown;
  }
}
</style>
