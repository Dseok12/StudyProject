<template>
    <div>
        <button type="button" @click="callChildFunc">부모에 있는 컴포넌트에서 클릭</button>
        <childcomponent02 ref="child_component" />
    </div>
</template>

<script>
import childcomponent02 from './childcomponent02.vue';
export default {
    name:'',
    components: {
        childcomponent02
    },
    computed: {},
    watch: {},
    data(){
        return{
            
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        callChildFunc(){
            // this.$refs.child_component.$refs.child_btn.click();
            this.$refs.child_component.childFunction();
        }
    }
}
</script>

<style scoped>

</style>