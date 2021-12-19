<template>
  <div class="ask">
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li class="post" v-for="item in this.$store.state.ask" :key="item">
            <a :href="item.url" class="title">
              {{item.title}}
            </a>
            <small class="dec">
              {{item.time_ago}} by
              <a href="#" class="user_name">{{item.user}}</a>
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ask',
  created () {
    this.$store.dispatch('FETCH_ASK')
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
