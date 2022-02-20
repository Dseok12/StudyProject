<template>
  <div class='Header'>
    <div class="wrap">
      <div class="clearfix inner">
        <div class="logo_box">
          <router-link to="/">
            <h1>LOGO들어갈자리</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterComponent',
  data () {
    return {
      sampleData: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Footer.scss';
</style>
