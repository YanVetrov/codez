<template>
    <div class="orders-wr">
    <div class="orders-main border">
     <div class="orders-main--top">
                
      <h3 class="title">ЗАЯВКАМИ на обмен</h3>
                
     </div>
    <search/>
    
    
    <tableMain :data="data" />
    
    
    <pagination/>

    </div>
    <sidebar :order="data[0]" />
    
    
    </div>
</template>

<script>
    import tableMain from './table';
    import search from './searchblock';
    import pagination from '~/components/_utils/pagination'
    import sidebar from './sidebar';

    export default {
        props: ['data', 'page'],
        components: { tableMain,pagination,search,sidebar }

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
