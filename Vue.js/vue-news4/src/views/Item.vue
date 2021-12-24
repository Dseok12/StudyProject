<template>
  <div class='item'>
    <div class="wrap">
      <div class="inner">
        <ul class="item_wrap">
          <li>{{ itemInfo.data }}</li>
          <li>{{ itemInfo.user }}</li>
          <li>{{ itemInfo.time_ago }}</li>
          <li>{{ itemInfo.content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  computed: {
    itemInfo () {
      return this.$store.state.item
    }
  },
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>

</style>
