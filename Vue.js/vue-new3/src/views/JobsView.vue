<template>
  <div class="jobs">
    <div class="wrap">
      <div class="inner">
        <p v-for="job in fetchedJobs" :key="job">
          <a :href="job.url">
            {{ job.title }}
          </a>
          <small>{{job.time_ago}}, {{job.domain}}</small>
        </p>
      </div>
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

<style lang="scss" scoped>

</style>
