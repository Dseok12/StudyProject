<template>
    <div>
        <button type="button" @click="showData">부모 버튼</button>
        <childcomponent06 ref="child_component" />
    </div>
</template>

<script>
import childcomponent06 from './childcomponent06.vue'
export default {
    name:'',
    components: {
        childcomponent06
    },
    watch: {},
    data(){
        return{
            parentMsg: '',
        };
    },
    computed: {
        msg(){
            return this.$refs.child_component.msg;
        }
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        showData(){
            alert(this.msg);
        }
    }
}
</script>

<style scoped>

</style>