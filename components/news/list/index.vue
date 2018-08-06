<template>

    <div class="list-contact-main border">
        <DataInfo :data="info" :page='{total_page,current_page}' v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>
<style lang='scss' scoped>
</style>
<script>
       import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        computed: {
            ...mapGetters({
                info: 'news/getData',
                load: 'news/getLoad',
                errorData: 'news/getError',
                oneOnews:'news/oneNews'
            })
        },
        methods: {
            ...mapActions({
                getNewsFull:'news/getNewsFull',
                deleteNews:'news/deleteNews',
                getOneNews:'news/getOneNews',
                createNews:'news/createNews',
                })
        },

        mounted() {
            return this.getNewsFull();
        },
    }
</script>
