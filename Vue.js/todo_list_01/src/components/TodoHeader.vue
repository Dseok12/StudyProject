<template>
  <div class='Todoheader'>
    <header>
      <h1>To Do List!</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader'
}
</script>

<style lang="scss">
body{
  text-align: center;
  background-color: #f6f6f6;
  input{
    border-style: groove;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
}
</style>
