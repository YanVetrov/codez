<template>
    <div>
        <tabs :data='data.tabs'
              @ontab='$parent.getUserAdmin'/>


        <search :ph="data.placehold"
                @onselect='$parent.filter.sortType=$event'
                @onenter='$parent.filter.search=$event'/>


        <tableMain :data='data.users'/>


        <pagination :currentPage="page.current_page"
                    :totalPages="page.total_page"
                    @page-changed="$parent.getUserAdmin"/>
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
