<template>
    <div class="parser border">

        <h3 class="title">Каталог парсеров</h3>
        <search :ph="data.placehold"
                @onselect='$parent.getReviews(1,{sortType:$event})'
                @onenter='$parent.getReviews(1,{search:$event})'/>


        <tableMain :data='data' />

    </div>
</template>

<script>
    import search from './searchblock';
    import tableMain from './table';

    export default {
        props: ['data', 'page'],
        components: { tableMain, search}

    }
</script>

<style lang='scss' scoped>

</style>
