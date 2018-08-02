<template>
<div class="review-wr">
    
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
                info: 'reviews/getData',
                load: 'reviews/getLoad',
                errorData: 'reviews/getError',
                total_page:'reviews/getTotalPages',
                current_page:'reviews/getCurrentPage',
            })
        },
        methods: {
            ...mapActions({
                getReviews:'reviews/getReviews',
                deleteReview:'reviews/deleteReview'
                })
        },

        mounted() {
            return this.getReviews(this.select_page);
        },
    }
</script>
