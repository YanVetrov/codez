<template>

  <div>
        <DataInfo :data="info.transactions" :page='{}' v-if="load && info"></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>
<style lang='scss' scoped>
</style>
<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                info: 'orders/getData',
                load: 'orders/getLoad',
                errorData: 'orders/getError',
            })

        },
        mounted() {
            this.adminGetOrders()

        },
        methods: {
            ...mapActions({
                adminGetOrders:'orders/adminGetOrders',
            })
        },
    }
</script>
