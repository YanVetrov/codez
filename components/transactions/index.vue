<template>

    <div class="dashboard-server">
        <DataInfo :transactions="info" :page='{current_page,total_page}' v-if="load && info"></DataInfo>
        
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
                info:false,
                errorData:false,
                load:false,
                current_page:Number,
                total_page:Number,
            }
        },
                methods: {
            getTransactions(page) {
                let filters = {};
                this.currency1 && this.currency1 !== '' ? filters.currency1 = this.currency1 : '';
                this.currency2 && this.currency2 !== '' ? filters.currency2 = this.currency2 : '';
                this.startDate && this.startDate !== '' ? filters.startDate = this.startDate : '';
                this.endDate && this.endDate !== '' ? filters.endDate = this.endDate : '';
                this.filterId && this.filterId !== '' ? filters.id = this.filterId : '';
                this.filterParam = filters;
                let pages = { page, limit: 10 },
                    obj = { filters, pages }
                this.$rest.api('adminGetOrders', obj)
                    .then(res => {
                        console.log(res)
                        if (res.success === true) {
                            this.info = res.data.transactions;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get transactions!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.load=true

                    })
                    .catch(err=>{
                        this.load=true
                        
                    })

            },
        },
        mounted() {
            this.$root.$on('delete', (id) => {
                console.log('ok')
                this.info.forEach((el, i) => {
                    if (el.id == id) {
                        this.info.splice(i, 1);
                    }

                })


            })
            return this.getTransactions();
        },

    }
</script>

<style lang='scss' scoped>
    
</style>
