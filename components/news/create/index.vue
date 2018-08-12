<template>

    <div>
        <DataInfo 
        v-if="load"
        :langs="langs"
        @publish="createNews($event)"
        >
        </DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                info: 'news/getData',
                oneNews: 'news/getOneNews',
                load: 'news/getLoad',
                errorData: 'news/getError',
                langs: 'news/getLangs'
            })
        },
        methods: {
            ...mapActions({
                getNewsFull: 'news/getNewsFull',
                getOneNews: 'news/getOneNews',
                deleteNews: 'news/deleteNews',
                editNews: 'news/editNews',
                createNews: 'news/createNews',
                getAllLangs: 'news/getAllLangs'
            })
        },
        mounted(){
            this.getAllLangs()
        }

    }
</script>
