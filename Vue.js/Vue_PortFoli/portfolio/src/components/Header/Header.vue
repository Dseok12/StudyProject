<template>
  <div class='Header'>
    <div class="wrap">
      <div class="clearfix inner">
        <div class="logo_box">
          <router-link to="/">
            <h1>LOGO들어갈자리</h1>
          </router-link>
        </div>
        <div class="menu_wrap">
          <ul class="menu_ul">
            <li><router-link to="/about">ABOUT</router-link></li>
            <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
          </ul>
        </div>
        <div class="m_menu_wrap">
          <div class="ham_btn">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="m_menu_box">
            <ul class="m_menu_ul">
              <li><router-link to="/about">ABOUT</router-link></li>
              <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
            </ul>
            <ul class="m_join_ul">
              <li><router-link to="/login">로그인</router-link></li>
              <li><router-link to="/signin">회원가입</router-link></li>
            </ul>
          </div>
        </div>
        <div class="join_wrap">
          <ul class="join_ul">
            <li><router-link to="/login">로그인</router-link></li>
            <li><router-link to="/signin">회원가입</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data () {
    return {
      sampleData: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
