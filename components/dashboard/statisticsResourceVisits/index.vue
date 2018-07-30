<template>

    <div class="dashboard-visitors--source sidebar-width">
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import {mapGetters} from 'vuex';

    export default {
        components: { DataInfo, WaitInfo },
                data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                info: 'statisticResource/getData',
                load: 'statisticResource/getLoad',
                errorData: 'statisticResource/getError',
            })

        },
        methods: {
            getStatisticClient() {
               this.$store.dispatch('statisticResource/getStatisticClient')
            }
        }
    }
</script>
