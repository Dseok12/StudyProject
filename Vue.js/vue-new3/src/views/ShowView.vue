<template>
  <div class='show'>
    <div class="wrap">
      <div class="inner">
        <p v-for="show in fetchedShow" :key="show">
          <a :href="show.url">
            {{ show.title }}
          </a>
          <small>{{show.time_ago}} by {{show.user}}</small>
        </p>
      </div>
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

<style lang="scss" scoped>

</style>
