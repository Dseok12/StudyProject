<template>
  <div class="news">
    <div v-for="user in users" :key="user">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api'
export default {
  name: 'news',
  data () {
    return {
      users: []
    }
  },
  created () {
    fetchNewsList()
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
