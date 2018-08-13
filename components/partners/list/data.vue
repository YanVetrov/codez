<template>
    <div>
        <h3 class="title">Список Партнеров</h3>
        <tableMain :data='data'
                   @edit="$parent.editPartner($event)"
                   @delete='$parent.deletePartner($event)'
        />
                    <pagination/>

    </div>
</template>

<script>
    import tableMain from './table';
    import pagination from '~/components/_utils/pagination'


    export default {
        props: ['data', 'page'],
        components: { tableMain,pagination }

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
