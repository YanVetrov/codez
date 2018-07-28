<template>
    <div class="row">
        <div class="white-box">
            <loader type="block" :status_load="status_load"/>
            <h2 class="search2"> {{$t('search')}} </h2>
            <div><i class="icon-magnifier search"></i>
                <input type="text" class="form-control search2" :placeholder="$t('search')">
            </div>
        </div>

        <div class="row">

            <div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" v-for="(el,i) in news "
                 :key="i">
                <div class="image">
                    <img class="img-responsive " alt="user" src="~/static/img1.jpg">
                    <button class="btn btn-outline btn-rounded btn-info btn2 img" @click='deleteNews(el._id)'><i
                            class='ti-close'></i>
                    </button>
                </div>

                <div class="white-box">
                    <div class="text-muted">
                    <span class="m-r-10">
                        <i class="icon-calender"></i> {{$moment(el.createdAt).format('DD.MM.YY в HH:mm')}}
                    </span>
                    </div>
                    <h3 class="m-t-20 m-b-20 news-title">{{el.title}} </h3>
                    <p>Вступление новости SOON...</p>
                    <div class="btn-group-news">
                        <nuxt-link class="btn btn-outline btn-rounded btn-success btn1" :to="'/news/view/'+el.link">Read
                            more
                        </nuxt-link>
                        <nuxt-link class="btn btn-outline btn-rounded btn-info btn2" :to="'/news/edit/'+el._id"><i
                                class='icon-pencil'></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <pagination :currentPage="current_page"
                    :totalPages="total_page"
                    @page-changed="getNews">
        </pagination>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                pagination: true,
                status_load: false,
                current_page: this.$route.params.page,
                news: [],
                total_page: [],
                perPage:this.$route.params.limit
            }
        },

        methods: {
            getNews(page) {
                this.status_load = false;

                this.$rest.api('getNewsBasic', {page: page || 1, limit: 12})
                    .then(response => {
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get news!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            console.log(response.data.count)
                            this.current_page = response.data.count.select_page || 1;
                            this.news = response.data.news;
                            this.total_page = response.data.count.pages;
                            this.perPage = response.data.count.limit
                        }
                        this.status_load = true;

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get news!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.status_load = true;
                    });

            },
            deleteNews(id) {

                this.$rest.api('deleteNews', {news_id: id})
                    .then(response => {
                        return this.getNews(this.select_page);
                    })
            },
        },
        created() {
            return this.getNews(this.select_page);
        }
    }
</script>