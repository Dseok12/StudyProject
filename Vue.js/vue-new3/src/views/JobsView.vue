<template>
  <div class="jobs">
    <list-item></list-item>
    <!-- <div class="wrap">
      <div class="inner">
        <ul class="jobs_list">
          <li v-for="job in fetchedJobs" :key="job" class="post">
            포인트 영역
            <div class="points">
              {{job.points || 0}}
            </div>
            기타 정보 영역
            <div class="user_info">
              <a :href="job.url" class="jobs_title" target="_blank">
                {{ job.title }}
              </a>
              <small class="small">
                {{job.time_ago}} by
                <a :href="job.url" target="_blank">
                  {{job.domain}}
                </a>
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'jobs',
  components: {
    ListItem
  }
  // computed: {
  //   ...mapGetters([
  //     'fetchedJobs'
  //   ])
  // },
  // created () {
  //   this.$store.dispatch('FETCH_JOBS')
  // }
}
</script>

<style lang="scss" scoped>
.jobs_list{
  margin: 0;
  padding: 0;
  .post{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    .points{
      color: #41b883;
      font-weight: bold;
    }
    .jobs_title{
      margin-left: 10px;
      color: #000;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.1s;
    }
    .jobs_title:hover{
      color: #41b883;
    }
    .user_info{
      display: flex;
      align-items: center;
      .small{
        font-size: 13px;
        margin-left: 18px;
        a{
          color: rgb(150, 150, 150);
        }
        .user_link{
          color: #000;
          font-weight: bold;
          transition: all 0.1s;
        }
        .user_link:hover{
          color: #41b883;
        }
      }
    }
  }
}
</style>
