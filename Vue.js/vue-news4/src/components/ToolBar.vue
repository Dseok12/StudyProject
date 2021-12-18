<template>
  <div class='ToolBar'>
    <div class="wrap">
      <div class="inner">
        <ul class="menu">
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/ask">Ask</router-link></li>
          <li><router-link to="/job">Jobs</router-link></li>
          <li><router-link to="/show">Show</router-link></li>
          <li><router-link to="/newest">Newest</router-link></li>
        </ul>
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
.wrap{
  width: 100%;
  background-color: #2a7fb1;
  .inner{
    width: calc(100% - 200px);
    margin: 0 auto;
    padding: 20px 0;
    color: #fff;
    ul{
      display: flex;
      li{
        position: relative;
        padding: 0 10px;
        a{
          text-decoration: none;
          font-size: 1.2rem;
          color: #fff;
          font-weight: bold;
          transition: all .2s;
        }
        a:hover{
          color: #e1e1e1;
          text-decoration: underline;
        }
        a:before{
          content: '';
          width: 2px;
          height: 90%;
          background-color: #fff;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      li:nth-child(1){
        padding-left: 0;
      }
    }
  }
}
</style>
