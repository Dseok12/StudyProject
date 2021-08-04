<template>
    <div>
        <button type="button" @click="getProductList" >조회</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>배송료</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.category}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '../api.js';
export default {
    name:'',
    mixins: [ApiMixin],
    components: {},
    computed: {},
    watch: {},
    data(){
        return{
            productList: [],
        };
    },
    setup() {},
    create() {},
    mounted() {
        console.log('컴포넌트 mounted()');
    },
    unmounted() {},
    methods: {
        async getProductList(){
            this.productList = await this.$callAPI('https://b2fa2c88-85c7-4a47-9f82-9ee9161442e7.mock.pstmn.io/productList', 'get', {});
            console.log(this.productList);
        }
    }
}
</script>

<style scoped>

</style>