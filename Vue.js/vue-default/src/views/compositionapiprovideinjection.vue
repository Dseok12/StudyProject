<template>
    <div>
        <compositionapiprovideinjection01 />
    </div>
</template>

<script>
import {provide} from 'vue';
import compositionapiprovideinjection01 from './compositionapiprovideinjection01.vue'
export default {
    components: {
        compositionapiprovideinjection01
    },
    setup(){
        provide('title', 'Vue.js 프로젝트');
    },
}
</script>