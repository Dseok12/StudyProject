<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar
  }
}
</script>

<style lang="scss">
@import url('./Global.scss');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.wrap{
  width: 100%;
  background-color: #fdfdfd;
  .inner{
    width: calc(100% - 200px);
    margin: 0 auto;
    padding: 3rem 0;
  }
}
</style>
