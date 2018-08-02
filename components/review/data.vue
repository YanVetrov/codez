<template>
    <div class="review border">
        <tabs 
              @ontab='$parent.getReviews'/>


        <search :ph="data.placehold"
                @onselect='$parent.getReviews(1,{sortType:$event})'
                @onenter='$parent.getReviews(1,{search:$event})'/>


        <tableMain :data='data' @delete="$parent.deleteReview($event)"/>


        <pagination :currentPage="page.current_page"
                    :totalPages="page.total_page"
                    @page-changed="$parent.getReviews"/>
    </div>
</template>

<script>
    import tabs from './tabs';
    import search from './searchblock';
    import tableMain from './table';

    export default {
        props: ['data', 'page'],
        components: { tableMain, tabs, search}

    }
</script>

<style lang='scss' scoped>

</style>
