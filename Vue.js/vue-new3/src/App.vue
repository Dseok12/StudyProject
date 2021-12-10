<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue'

export default {
  components: {
    ToolBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
@import url("./Global.scss");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
