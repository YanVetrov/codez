<template>

    <div>
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<style lang='scss' scoped>
    
</style>
<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: { DataInfo, WaitInfo },
         data() {
            return {
                load:false,
                errorData:false,
                info:true,

            }
        },
        methods: {
            getUserAdmin(page) {
                this.$rest.api('getUserOnline', {page: page || 1, limit: 12})
                    .then(response => {
                        console.log(response);
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get users!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            this.info = response.data.online
                        }
                        this.load = true;

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get users!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.load = true;
                    });

            },
        },
        created() {
            return this.getUserAdmin(this.select_page);
        }
    }
</script>
