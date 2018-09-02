<template>

  <div class="list-partner-main border">
        <DataInfo :data="info.partners" :page='{total_page:info.count.total,current_page:info.count.pages}' v-if="load && info"></DataInfo>

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
                num:[
                    {},{},{}]
            }
        },
        computed: {
            ...mapGetters({
                info: 'partners/getData',
                load: 'partners/getLoad',
                errorData: 'partners/getError',
            })

        },
        mounted() {
            this.getPartnersAll()

        },
        methods: {
            ...mapActions({
                getPartnersAll:'partners/getPartnersAll',
                createPartner:'partners/createPartner',
                deletePartner:'partners/deletePartner',
                editPartner:'partners/editPartner'
            })
        },
    }
</script>
