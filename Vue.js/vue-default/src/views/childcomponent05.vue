<template>
    <div>
        <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    computed: {},
    watch: {},
    data(){
        return{
            msg: '자식 컴포넌트로부터 보내는 메시지',
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendFromChild(){
            this.$emit('send-message', this.msg)
        }
    }
}
</script>

<style scoped>

</style>