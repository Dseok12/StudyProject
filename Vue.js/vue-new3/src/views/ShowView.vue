<template>
  <div class='show'>
    <div v-for="show in shows" :key="show">
      {{ show.title }}
    </div>
  </div>
</template>

<script>
import { fetchShow } from '../api'
export default {
  name: 'show',
  data () {
    return {
      shows: []
    }
  },
  created () {
    fetchShow()
      .then((response) => {
        this.shows = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
