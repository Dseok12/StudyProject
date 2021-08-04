<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
import {inject} from 'vue';
export default {
    setup(){
        const title = inject('title');

        return {title};
    }
}
</script>