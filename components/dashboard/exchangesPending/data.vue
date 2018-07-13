<template>
<div class="dashboard-wait">

    <div class="dashboard-wait-wr border">
        <h5 class="title">Обмены в ожидании</h5>
        <transactions :transactions="transactions" ></transactions>
         <paging
          :currentPage="page.current_page"
          :totalPages="page.total_page"
          @page-changed="getTransactions"
         />

         </div>
        </div>
</template>

<script>
    import paging from '~/components/pagination';
    import transactions from '~/components/exchangesPending/trans';
    export default {
        props: ['transactions', 'page'],

        components: { paging, transactions },
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
                        this.load = true

                    })
                    .catch(err => {
                        this.load = true

                    })

            },
        },
    }
</script>

<style lang='scss' scoped>
</style>
