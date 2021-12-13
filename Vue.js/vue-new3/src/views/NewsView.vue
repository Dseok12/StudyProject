<template>
  <div class="news">
    <div v-for="user in this.$store.state.news" :key="user">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>
