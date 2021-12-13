<template>
  <div class='newest'>
    <div class="wrap">
      <div class="inner">
        <p v-for="newest in fetchedNewest" :key="newest">
          <a :href="newest.url">
            {{newest.title}}
          </a>
          <small>{{newest.time_ago}} by {{newest.user}}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api'
import { mapGetters } from 'vuex'
export default {
  name: 'newest',
  computed: {
    ...mapGetters([
      'fetchedNewest'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_NEWEST')
    // fetchNewsList()
    //   .then((response) => {
    //     this.newests = response.data
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
}
</script>

<style lang="scss" scoped>

</style>
