<template>
  <div class='newest'>
    <list-item></list-item>
    <!-- <div class="wrap">
      <div class="inner">
        <ul class="newest_list">
          <li v-for="newest in fetchedNewest" :key="newest" class="post">
            포인트 영역
            <div class="points">
              {{newest.points || 0}}
            </div>
            기타 정보 영역
            <div class="user_info">
              <a :href="newest.url" class="newest_title" target="_blank">
                {{newest.title}}
              </a>
              <small class="small">
                {{newest.time_ago}} by {{newest.user}}
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { fetchNewsList } from '../api'
// import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem.vue'
export default {
  name: 'newest',
  components: {
    ListItem
  }
  // computed: {
  //   ...mapGetters([
  //     'fetchedNewest'
  //   ])
  // },
  // created () {
  //   this.$store.dispatch('FETCH_NEWEST')
  //   // fetchNewsList()
  //   //   .then((response) => {
  //   //     this.newests = response.data
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error)
  //   //   })
  // }
}
</script>

<style lang="scss" scoped>
.newest_list{
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
    .newest_title{
      margin-left: 10px;
      color: #000;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.1s;
    }
    .newest_title:hover{
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
