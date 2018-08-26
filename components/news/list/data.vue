<template>
    <div>
        <h3 class="title">Каталог новостей</h3>
        <search
                @search="$parent.search = $event"
                @sort="$parent.sort=$event"/>

        <tableMain :news='data'
                   @delete="$parent.deleteNews($event)"/>

        <pagination/>

    </div>
</template>

<script>
    import pagination from '~/components/_utils/pagination'
    import tableMain from './table';
    import search from './searchblock'

    export default {
        props: ['data', 'page'],
        components: {pagination, tableMain, search}

    }
</script>
