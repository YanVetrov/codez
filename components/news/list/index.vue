<template>

    <div class="catalog-news border">
        <DataInfo :data="info.news" :page='{total_page:info.count.total,current_page:info.count.pages}' v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>
<style lang='scss' scoped>
</style>
<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {
                search: '',
                sort: '',
            }
        },
        computed: {
            ...mapGetters({
                info: 'news/getData',
                load: 'news/getLoad',
                errorData: 'news/getError',
                oneOnews: 'news/oneNews'
            })
        },
        methods: {
            ...mapActions({
                getNewsFull: 'news/getNewsFull',
                deleteNews: 'news/deleteNews',
                getOneNews: 'news/getOneNews',
                createNews: 'news/createNews',
            })
        },
        watch: {
            search() {
                return this.getNewsFull({ search: this.search, sort: this.sort });
            }
        },
        mounted() {
            return this.getNewsFull({ search: this.search, sort: this.sort });
        },
    }
</script>
