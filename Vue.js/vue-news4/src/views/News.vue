<template>
  <div class="news">
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li class="post" v-for="item in this.$store.state.news" :key="item">
            <a :href="item.url" class="title">
              {{item.title}}
            </a>
            <small class="dec">
              {{item.time_ago}} by
              <router-link
                :to="`/user/${item.user}`"
                class="user_name">
                  {{item.user}}
              </router-link>
            </small>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
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
