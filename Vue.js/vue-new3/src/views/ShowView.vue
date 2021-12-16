<template>
  <div class='show'>
    <div class="wrap">
      <div class="inner">
        <ul class="show_list">
          <li v-for="show in fetchedShow" :key="show" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
              {{show.points || 0}}
            </div>
            <!-- 기타 정보 영역 -->
            <div class="user_info">
              <a :href="show.url" class="show_title" target="_blank">
                {{ show.title }}
              </a>
              <small class="small">
                {{show.time_ago}} by {{show.user}}
              </small>
            </div>
          </li>
        </ul>
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
.show_list{
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
    .show_title{
      margin-left: 10px;
      color: #000;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.1s;
    }
    .show_title:hover{
      color: #41b883;
    }
    .user_info{
      display: flex;
      align-items: center;
      .small{
        font-size: 13px;
        margin-left: 18px;
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
