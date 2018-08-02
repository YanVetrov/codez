<template>
<div class="parser-wr">
    
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
                info: 'parsers/getData',
                load: 'parsers/getLoad',
                errorData: 'parsers/getError',
            })
        },
        methods: {
            ...mapActions({
                getAllParsers:'parsers/getAllParsers',
                })
        },

        mounted() {
            return this.getAllParsers();
        },
    }
</script>
