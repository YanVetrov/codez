<template>
    <div class="question border">
        <h3 class="title">Вопрос и ответ </h3>
        <search
        :langs="langs"
        @search="$parent.search = $event"
        @lang="$parent.lang=$event"
        />

        <tips :groups='groups' @group="$parent.group = $event"/>
        <tableMain :data='data' @delete="$parent.deleteFaq($event)"/>


        <pagination :currentPage="page.current_page"
                    :totalPages="page.total_page"
                    @page-changed="$parent.getFaqFull"/>
        <nuxt-link class="btn btn-blue" to="/faq/create">Создать новый</nuxt-link>
    </div>
   
</template>

<script>
    import search from './searchblock';
    import tableMain from './table';
    import tips from './tips'

    export default {
        props: ['data', 'langs','groups', 'page'],
        components: { tableMain, tips, search }

    }
</script>

<style lang='scss' scoped>
</style>
