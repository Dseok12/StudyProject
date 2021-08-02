<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '페이지 타이틀 입니다.',
        }
    }
}
</script>