<template>

    <div class="dashboard-server">
        <DataInfo :transactions="info" :page='{current_page,total_page}' v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters } from 'vuex'
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                info:'exchangesPending/getData',
                load:'exchangesPending/getLoad',
                errorData:'exchangesPending/getError',
                total_page:'exchangesPending/getTotalPages',
                current_page:'exchangesPending/getCurrentPage',
            })
        
        },

        methods: {
            getTransactions(page) {
                this.$store.dispatch('exchangesPending/adminGetOrders')

            },
        },

    }
</script>

<style lang='scss' scoped>
</style>
