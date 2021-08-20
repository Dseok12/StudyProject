<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">LOGO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./About.vue">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Portfolio.vue">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Contact.vue">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Header',
    props: {/*부모에게서 받아온 데이터*/},
    components: {/*컴포넌트 불러온 후 정의하는 곳*/},
    computed: {},
    watch: {/*실시간 감시*/},
    data(){
        return{
            sampleData: '',
        };
    },
    setup() {/*methods, computed, watch 등등을 생성 할 수 있음.*/},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {/*각종 함수 정의하는 곳*/}
}
</script>

<style scoped>

</style>