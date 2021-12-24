<template>
  <div class='user'>
    <div class="wrap">
      <div class="inner">
        <ul class="user_wrap">
          <li>사용자 이름: <span>{{ userInfo.id }}</span></li>
          <li>활동 점수: <span>{{ userInfo.karma }}</span></li>
          <li>아이디 생성일: <span>{{ userInfo.created }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userInfo () {
      return this.$store.state.user
    }
  },
  created () {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style scoped>
.user_wrap li{
  margin-top: 20px;
  font-size: 1.1rem;
}
.user_wrap li:first-child{
  margin-top: 0;
}
.user_wrap li span{
  font-weight: bold;
}
</style>
