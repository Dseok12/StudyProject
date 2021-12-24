<template>
  <div class='Newest'>
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li class="post" v-for="newest in this.$store.state.newest" :key="newest">
            <a :href="newest.url" class="title">
              {{newest.title}}
            </a>
            <small class="dec">
              {{newest.time_ago}} by
              <a href="#" class="user_name">{{newest.user}}</a>
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newest',
  created () {
    this.$store.dispatch('FETCH_NEWEST')
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
