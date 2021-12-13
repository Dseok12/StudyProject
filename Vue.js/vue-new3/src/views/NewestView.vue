<template>
  <div class='newest'>
    <div v-for="newest in newests" :key="newest">
      {{newest.title}}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api'
export default {
  name: 'newest',
  data () {
    return {
      newests: []
    }
  },
  created () {
    fetchNewsList()
      .then((response) => {
        this.newests = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
