<template>

    <div class="dashboard-profit__list sidebar-width">
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {
                info: false,
                load: false,
                errorData: false,

            }
        },

        created() {
            this.updateData();
        },
        methods: {
            updateData() {
                return Promise.resolve()
                    .then(() => {
                        return new Promise(resolve => setTimeout(resolve, 5000))
                    })
                    .then(() => {

                        return {
                            total:124,
                            percent:44,
                            clear:5325
                        }
                    })
                    .then((res) => {
                        this.info = res;
                        this.load = true;
                    }).catch((err) => {
                        this.errorData = {message: 'Error load data'}
                    });
            }
        }
    }


</script>

