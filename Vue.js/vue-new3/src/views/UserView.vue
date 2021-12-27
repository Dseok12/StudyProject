<template>
  <div class='user'>
    <div class="wrap">
      <div class="inner">
        <user-profile :propsdata="userInfo"></user-profile>
        <!-- <p>사용자 이름: {{userInfo.id}}</p>
        <p>활동 점수: {{userInfo.karma}}</p>
        <p>아이디 생성일: {{userInfo.created}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  name: 'user',
  components: {
    UserProfile
  },
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

</style>
