<template>
  <div class='show'>
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li class="post" v-for="show in this.$store.state.show" :key="show">
            <a :href="show.url" class="title">
              {{show.title}}
            </a>
            <small class="dec">
              {{show.time_ago}} by
              <a href="#" class="user_name">{{show.user}}</a>
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show',
  created () {
    this.$store.dispatch('FETCH_SHOW')
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
