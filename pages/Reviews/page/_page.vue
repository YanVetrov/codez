<template>

    <div class="row">
        <loading type="block" :status_load="status_load"/>
        <div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" v-for="(el,i) in reviews "
             :key="i">
            <div class="white-box icon">
                <button class="btn btn-outline btn-rounded btn-info btn2 img" @click='deleteNews(el._id)'><i
                        class='ti-close'></i></button>
                <br>
                <div class="text-muted">
                    <span class="m-r-10">
                        <i class="icon-user icon_m"></i>{{el.name}}
                        <br>
                        <i class="icon-calender icon_m "></i>{{moment(el.createdAt).format('DD.MM.YY в HH:mm')}}
                    </span>
                    <h3 class="m-t-20 m-b-20 news-title">{{el.message}} </h3>
                </div>
                <div class="btn-group-news">
                    <button class="btn btn-outline btn-rounded btn-success btn1">Read more
                    </button>
                    <nuxt-link class="btn btn-outline btn-rounded btn-info btn2" :to="'/reviews/edit/'+el._id"><i
                            class='icon-pencil'></i>
                    </nuxt-link>
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
    import Loading from "~/components/loading";
    import moment from 'moment';
    import pagination from '~/components/pagination'

    export default {
        components: {pagination, Loading,},
        data() {
            return {
                status_load: true,
                reviews: [],
                moment: moment,
                total_page: [],
                current_page: this.$route.params.page,
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
                            this.current_page = response.data.count.select_page || 1;
                            currentPage = response.data.count.select_page || 1;
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
                            title: 'Error get news!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.status_load = true;
                    });
            },
        },
        created() {
            return this.getReviews();
        },

    }

</script>

<style>


    .pagination {
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        margin: 30px auto 30px;
        padding: 0 15px;
        max-width: 1280px;
    }

    .pagination__left, .pagination__right {
        width: 20%;
    }

    .pagination__left {
        float: left;
    }

    .pagination__right {
        float: right;
    }

    .pagination__right a {
        float: right;
    }

    .pagination a, .pagination span {
        display: block;
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 300;
        line-height: 42px;
        height: 44px;
        color: #a3cef1;
        font-size: 18px;
    }

    .pagination a {
        padding: 0 20px;
        max-width: 160px;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #009fea;
        text-decoration: none;
        margin: 0 6px;
        transition: all .2s ease-in-out;
    }

    .pagination a.current {
        border-color: #009fea;
        color: #ea4c89;
    }

    @media (hover) {
        .pagination a:hover {
            border-color: #0090ea;
            color: #0090ea;
        }
    }

    .pagination__mid {
        display: flex;
        justify-content: center;
        width: 60%;
    }

    .pagination__mid ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .pagination__mid li {
        display: inline-block;
    }

    .icon_m {
        margin: 0px 5px 5px 0px;

    }

    .news-title {
        overflow-wrap: break-word; /* не поддерживает IE, Firefox; является копией word-wrap */
        word-wrap: break-word;
        word-break: keep-all; /* не поддерживает Opera12.14, значение keep-all не поддерживается IE, Chrome */
        line-break: loose; /* нет поддержки для русского языка */
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto; /* значение auto не поддерживается Chrome */
        text-overflow: ellipsis;
        display: -webkit-box;
        height: 3em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .btn-group-news {
        margin-top: 20px;
        height: 30px;
        width: 100%;
    }

    .btn1 {
        display: inline-block;
        float: left;
        width: calc(100% - 60px)
    }

    .btn2 {
        display: inline-block;
        float: right;
        width: 50px
    }

    .search2 {
        width: 80%;
        margin-left: 30px

    }

    .img {
        position: absolute;
        top: 10px;
        right: 3px;
        width: 20%;
    }

    .icon {
        position: relative;
        width: 100%; /* for IE 6 */
    }


</style>