<template>

    <div class="dashboard-server">
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {
                info: false,
                load: false,
                errorData: false,

            }
        },

        created() {
            this.getServerStatus();
        },
        methods: {
            getServerStatus() {
                 this.$rest.api('getServerStatus')
                    .then(res => {
                        this.info = res.data;
                        this.load = true;

                    }).catch((err) => {
                        this.errorData = { message: 'Error load data' }
                    });
            }
        }
    }
</script>
