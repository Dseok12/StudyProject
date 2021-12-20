<template>
  <div class='TodoList'>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">
        {{todoItem}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todoItems: []
    }
  },
  created () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i))
        }
      }
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
  padding: 10px 0;
}
</style>
