<template>
    <div>
        <provideinjectchild />
    </div>
</template>

<script>
import provideinjectchild from './provideinjectchild'
export default {
    components: {
        provideinjectchild
    },
    data(){
        return{
            items: ["A", "B"],
        };
    },
    provide(){
        return {
            itemLength: this.items.legnth,
            items: this.items,
        };
    },
}
</script>

<style scoped>

</style>