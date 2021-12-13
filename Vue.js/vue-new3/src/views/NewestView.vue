<template>
  <div class='newest'>
    <div v-for="newest in fetchedNewest" :key="newest">
      {{newest.title}}
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

<style scoped>

</style>
