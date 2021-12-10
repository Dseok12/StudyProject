<template>
  <div class='header'>
    <div class="nav">
      <div class="nav_inner">
        <router-link to="/">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;
  padding: 20px 0px;
  background-color: #41b883;
  .nav_inner{
    margin-left: 20px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    a{
      color: #fff;
      transition: all 0.2s;
      margin: 0px 5px;
      &:hover{
        color:#00522d;
        text-decoration: underline;
      }
    }
  }
}
</style>
