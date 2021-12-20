<template>
  <div class='jobs'>
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li class="post" v-for="jobs in this.$store.state.jobs" :key="jobs">
            <a :href="jobs.url" class="title">
              {{jobs.title}}
            </a>
            <small class="dec">
              {{jobs.time_ago}} by
              <a href="#" class="user_name">{{jobs.user}}</a>
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jobs',
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style lang="scss" scoped>
.item_wrap{
  .post{
    padding: 10px 0;
    .title{
      font-size: 1.2rem;
      color: #222;
    }
    .dec{
      font-size: 12px;
      .user_name{
        color: #222;
        font-weight: 500;
      }
    }
  }
}
</style>
