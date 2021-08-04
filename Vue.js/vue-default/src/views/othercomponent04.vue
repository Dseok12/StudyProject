<template>
    <div>
        <button type="button" @click="callChildFunc01">부모에 있는 컴포넌트에서 클릭</button>
        <childcomponent03 ref="child_component"/>
    </div>
</template>

<script>
import childcomponent03 from './childcomponent03.vue';
export default {
    name:'',
    components: {
        childcomponent03
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
        callChildFunc01(){
            // this.$refs.child-component.$refs.child-component01.click();
            // this.$refs.child_component.clickFunc();
            this.$refs.child_component.msg='부모 컨포넌트에서 변경한 MSG';
        }
    }
}
</script>

<style scoped>

</style>