<template>
  <div class='item'>
    <div class="wrap">
      <div class="inner">
        <section>
          <!-- 질문 상세 정보 -->
          <div class="user_container">
            <div class="user">
              프로필
            </div>
            <div class="link_box">
              <router-link :to="`/user/${fetchedItem.user}`" class="user_desc">
                {{ fetchedItem.user }}
              </router-link>
              <div class="time">
                {{ fetchedItem.time_ago }}
              </div>
            </div>
            <!-- 제목 -->
          </div>
          <h2 class="title">{{fetchedItem.title}}</h2>
        </section>
        <section>
          <!-- 질문 댓글 -->
          <div v-html="fetchedItem.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'item',
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created () {
    const itemId = this.$route.params.id
    console.log(itemId)
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style lang="scss" scoped>
.user_container{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .user{
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 15px;
  }
  .link_box{
    margin-right: 15px;
    .user_desc{
      display: block;
      font-weight: 600;
      color: #414141;
      margin-bottom: 10px;
    }
    .time{
      font-size: 12px;
    }
  }
}
.title{
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 20px;
}
</style>
