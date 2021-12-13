<template>
  <div class="news">
    <div class="wrap">
      <div class="inner">
        <p v-for="item in this.$store.state.news" :key="item">
          <a :href="item.url">
            {{ item.title }}
          </a>
          <small>
            {{item.time_ago}} by
            <router-link :to="`/user/${item.user}`">
              {{item.user}}
            </router-link>
          </small>
        </p>
      </div>
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

<style lang="scss" scoped>

</style>
