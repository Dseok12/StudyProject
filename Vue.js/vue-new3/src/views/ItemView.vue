<template>
  <div class='item'>
    <div class="wrap">
      <div class="inner">
        <section>
          <!-- 질문 상세 정보 -->
          <div>
            <div>
              User
            </div>
            <div>
              <router-link :to="`/user/${fetchedItem.user}`">
                <i class="fas fa-user-astronaut"></i>{{ fetchedItem.user }}
              </router-link>
              <div>
                {{ fetchedItem.time_ago }}
              </div>
            </div>
            <h2>{{fetchedItem.title}}</h2>
          </div>
        </section>
        <section>
          <!-- 질문 댓글 -->
        </section>
        <!-- <p>{{fetchedItem.title}}</p>
        <div>
          {{fetchedItem.content}}
        </div> -->
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

<style scoped>

</style>
