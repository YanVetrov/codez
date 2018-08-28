<template>
    <div class="question border">
        <h3 class="title">Вопрос и ответ </h3>
        <search
        :lang="$parent.lang"
        @search="$parent.search = $event"
        @lang="$parent.lang=$event"
        @sort="$parent.sort=$event"
        />


        <tableMain :data='data' @delete="$parent.deleteRule($event)"/>


        <!--<pagination :currentPage="page.current_page"-->
        <!--            :totalPages="page.total_page"-->
        <!--            @page-changed="$parent.getTitleRules"/>-->
        <nuxt-link class="btn btn-blue" to="/rules/create">Создать новый</nuxt-link>
    </div>
   
</template>

<script>
    import search from './searchblock';
    import tableMain from './table';

    export default {
        props: ['data', 'langs', 'page'],
        components: { tableMain,  search }

    }
</script>

<style lang='scss' scoped>
</style>
