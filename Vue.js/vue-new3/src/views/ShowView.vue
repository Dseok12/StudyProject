<template>
  <div class='show'>
    <div v-for="show in fetchedShow" :key="show">
      {{ show.title }}
    </div>
  </div>
</template>

<script>
// import { fetchShow } from '../api'
import { mapGetters } from 'vuex'
export default {
  name: 'show',
  computed: {
    ...mapGetters([
      'fetchedShow'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_SHOW')
    // fetchShow()
    //   .then((response) => {
    //     this.shows = response.data
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
}
</script>

<style scoped>

</style>
