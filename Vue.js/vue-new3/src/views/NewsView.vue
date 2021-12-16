<template>
  <div class="news">
    <div class="wrap">
      <div class="inner">
        <ul class="news_list">
          <li v-for="item in this.$store.state.news" :key="item" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
              {{item.points}}
            </div>
            <!-- 기타 정보 영역 -->
            <div class="user_info">
              <a :href="item.url" class="news_title" target="_blank">
                {{ item.title }}
              </a>
              <small class="small">
                {{item.time_ago}} by
                <router-link :to="`/user/${item.user}`" class="user_link">
                  {{item.user}}
                </router-link>
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style lang="scss" scoped>
.news_list{
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
