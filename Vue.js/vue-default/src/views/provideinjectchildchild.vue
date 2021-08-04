<template>
    <div>
        Item Legnth: {{ this.items.length }}
    </div>
</template>

<script>
export default {
    // props: {
    //     itemLength: {
    //         type: Number,
    //         default: 0,
    //     }
    // }
    inject: ['itemLength', 'items'],
};
</script>

<style scoped>

</style>