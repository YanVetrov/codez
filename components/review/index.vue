<template>
    <div class="review-wr">
        <DataInfo :data="info" :page='{total_page,current_page}' :load="load"></DataInfo>
    </div>

</template>
<script>
    import DataInfo from "./data.vue";
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        components: {DataInfo},
        computed: {
            ...mapGetters({
                info: 'reviews/getData',
                load: 'reviews/getLoad',
                errorData: 'reviews/getError',
                total_page: 'reviews/getTotalPages',
                current_page: 'reviews/getCurrentPage',
            })
        },
        methods: {
            ...mapActions({
                getReviews: 'reviews/getReviews',
                deleteReview: 'reviews/deleteReview'
            })
        },

        mounted() {
            return this.getReviews(this.select_page);
        },
    }
</script>
