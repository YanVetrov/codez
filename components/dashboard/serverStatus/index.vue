<template>

    <div class="dashboard-server">
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
                info: 'serverStatus/getData',
                load: 'serverStatus/getLoad',
                errorData: 'serverStatus/getError',
            })

        },

        created() {
            this.getServerStatus();
        },
        methods: {
            getServerStatus() {
               this.$store.dispatch('serverStatus/getServerStatus')
            }
        }
    }
</script>
