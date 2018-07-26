<template>

    <div class="row">
        <div class='white-box' v-for="(el,i) in reviews" :key="i">
            <loader type="block" :status_load="status_load"/>
            <div class="head line">
                <div class='lay'>ID</div>
                <div class='lay'>{{$t('user')}}</div>
                <div class='lay'>{{$t('date')}}</div>
                <div class='lay'>{{$t('email')}}</div>
                <div class='lay'>IP</div>
                <div class='lay'>USER-ID</div>
                <div class='lay'>{{$t('state')}}</div>
            </div>
            <div class='info line'>
                <div class='lay'>7015</div>
                <div class='lay'>
                    <div class='av'></div>
                    {{el.name}}
                </div>
                <div class='lay'>{{$moment(el.createdAt).format('DD.MM.YY в HH:mm')}}</div>
                <div class='lay'>{{el.email}}</div>
                <div class='lay'>177.234.55.23</div>
                <div class='lay'>{{el._id}}</div>
                <div class='lay'>PUBLISHED
                    <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-14"><i
                            class="ti-check"></i></button>
                    <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-14"
                            @click="deleteReview(el._id)"><i
                            class="ti-trash"></i></button>
                </div>
            </div>
            <div class='comment line'>
                <i class="fa fa-thumbs-up"/>
                <div style="height:80px;" class='lay comment-area'>{{el.message}}</div>
                <div @click="heigh($event)" class='lay btn btn-info btn-outline btn-rectangle btn-s m-r-20'>
                    {{showHide}}
                </div>
            </div>
        </div>
        <pagination :currentPage="current_page"
                    :totalPages="total_page"
                    @page-changed="getReviews">
        </pagination>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                status_load: true,
                reviews: [],
                total_page: [],
                current_page: this.$route.params.page,
                showHide: 'Show',
            }
        },
        methods: {
            getReviews(page) {
                this.$rest.api('getReviews', {page: page || 1, limit: 12})
                    .then(response => {
                        console.log(response.data.count);
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get reviews!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            console.log(response.data)
                            this.current_page = response.data.count.select_page || 1;
                            this.reviews = response.data.reviews;
                            this.total_page = response.data.count.pages;
                        }
                        this.status_load = true;

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get reviews!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.status_load = true;
                    });
            },
            deleteReview(id) {
                this.$rest.api('deleteReview', {review_id: id})
                    .then(response => {
                        console.log(response);
                        return this.getReviews(this.select_page);
                    })
            },
            heigh(e) {
                this.$rest.api('getStatisticClient').then(res => {
                    console.log(res)
                })
                if (e.target.previousSibling.style.height === '80px') {
                    e.target.previousSibling.style.height = 'auto';
                    this.showHide = 'Hide'
                }
                else {
                    e.target.previousSibling.style.height = '80px';
                    this.showHide = 'Show'
                }
            },
        },

        created() {
            return this.getReviews(this.select_page);
        },

    }

</script>
