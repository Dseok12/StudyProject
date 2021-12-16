<template>
  <div class='ask'>
    <list-item></list-item>
    <!-- <div class="wrap">
      <div class="inner">
        <ul class="ask_list">
          <li v-for="item in fetchedAsk" :key="item" class="post">
            포인트 영역
            <div class="points">
              {{item.points}}
            </div>
            기타 정보 영역
            <div class="user_info">
              <router-link :to="`item/${item.id}`" class="news_title" target="_blank">
                {{ item.title }}
              </router-link>
              <small class="small">
                {{item.time_ago}}
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem.vue'
export default {
  name: 'ask',
  components: {
    ListItem
  }
  // computed: {
  //   // #1
  //   // ask () {
  //   //   return this.$store.state.ask
  //   // }

  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })
  //   // import { mapState } from 'vuex'해줄 것

  //   // #3
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
  // },
  // created () {
  //   this.$store.dispatch('FETCH_ASK')
  // }
}
</script>

<style lang="scss" scoped>
.ask_list{
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
    .news_title{
      margin-left: 10px;
      color: #000;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.1s;
    }
    .news_title:hover{
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
