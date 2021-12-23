<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== '') {
        this.$emit('addItem', this.newTodoItem)
        this.clearInput()
      }
    },
    clearInput: function () {
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
  width: 60%;
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
