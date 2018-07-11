<template>
<div class="dashboard-wait">

    <div class="dashboard-wait-wr border">
        <h5 class="title">Обмены в ожидании</h5>
        <transactions :transactions="transactions" ></transactions>
         <paging
          :currentPage="page.current_page"
          :totalPages="page.total_page"
          @page-changed="page.getTransactions"
         />

         </div>
        </div>
</template>

<script>
    import paging from '~/components/pagination';
    import transactions from '~/components/transactions/trans';
    export default {
        props: ['transactions', 'page'],

        components: { paging, transactions }

    }
</script>

<style lang='scss' scoped>
</style>
