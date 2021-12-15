<template>
  <div class='ask'>
    <div class="wrap">
      <div class="inner">
        <p v-for="item in fetchedAsk" :key="item">
          <router-link :to="`item/${item.id}`">
            {{ item.title }}
          </router-link>
          <small>{{item.time_ago}}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ask',
  computed: {
    // #1
    // ask () {
    //   return this.$store.state.ask
    // }

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // import { mapState } from 'vuex'해줄 것

    // #3
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style lang="scss" scoped>

</style>
