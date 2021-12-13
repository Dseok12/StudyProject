<template>
  <div class="jobs">
    <div v-for="job in fetchedJobs" :key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'jobs',
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>
