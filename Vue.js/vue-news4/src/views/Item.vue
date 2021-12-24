<template>
  <div class='item'>
    <div class="wrap">
      <div class="inner">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>

</style>
