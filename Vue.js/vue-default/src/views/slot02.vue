<template>
    <modal-layout>
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠01</p>
            <p>팝업 컨텐츠02</p>
        </template>

        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </modal-layout>
</template>
<script>
    import slot01 from './slot01';
    export default{
        components: {'modal-layout':slot01},
    }
</script>