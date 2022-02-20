<template>
  <div class='Footer'>
    <div class="wrap">
      <div class="clearfix inner">
        <div class="logo_box">
          <router-link to="/">
            <h1>LOGO들어갈자리</h1>
          </router-link>
        </div>
        <div class="add_wrap">
          <ul class="add_ul">
            <li><span>Home: </span><a href="#"></a></li>
            <li><span>E-mail: </span><a href="#"></a></li>
            <li><span>Phone: </span><a href="#"></a></li>
          </ul>
        </div>
        <div class="blog_wrap">
          <ul class="blog_ul">
            <li><a href="">블로그</a></li>
            <li><a href="">깃허브</a></li>
          </ul>
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
