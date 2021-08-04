<template>
    <div>
        <h1>{{parentMsg}}</h1>
        <childcomponent05 @send-message="sendMessage" />
    </div>
</template>

<script>
import childcomponent05 from "./childcomponent05.vue"
export default {
    name:'',
    components: {
        childcomponent05
    },
    computed: {},
    watch: {},
    data(){
        return{
            parentMsg: '',
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendMessage(data){
            alert(data);
            this.parentMsg = data;
        }
    }
}
</script>

<style scoped>

</style>