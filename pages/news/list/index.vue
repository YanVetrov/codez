<template>
    <div class="row">
        <div class="white-box">
            <loading type="block" :status_load="status_load"/>
            <h2 class="search2"> Поиск </h2>
            <div><i class="icon-magnifier search"></i> <input type="text" class="form-control search2" placeholder="Введите текст поиска"></div>
        </div>

        <div class="row">
            <div class="white-box">
                <div id="pagination-template">
                    <div class="pagination">
                        <div class="pagination__left">
                            <a href="#" @click.prevent="changePage(prevPage)">Предыдущая</a></div>
                        <div class="pagination__mid">
                            <span>{{select_page}} из {{count_page}}</span>
                            <li><a href="#">1</a></li>
                        </div>
                        <div class="pagination__right">
                            <a href="#" @click.prevent="changePage(nextPage)">Следующая</a></div>
                    </div>
                </div>
            </div>
        </div>
        <pagination
                :current="select_page"
                @page-changed="getNews">
        </pagination>
        <div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" v-for="(el,i) in news" :key="i">
            <img class="img-responsive" alt="user" src="~/static/img1.jpg">
            <div class="white-box">
                <div class="text-muted">
                    <span class="m-r-10">
                        <i class="icon-calender"></i> {{moment(el.createdAt).format('DD.MM.YY в HH:mm')}}
                    </span>
                </div>
                <h3 class="m-t-20 m-b-20 news-title">{{el.title}}</h3>
                <p>Вступление новости SOON...</p>
                <div class="btn-group-news">
                    <button class="btn btn-outline btn-rounded btn-success btn1">Read more</button>
                    <button class="btn btn-outline btn-rounded btn-info btn2"><i class='icon-pencil'></i>
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import Loading from "~/components/loading";
    import moment from 'moment'
    import Pagination from "~/components/pagination";

    export default {
        components: {Pagination, Loading},

        data() {
            return {
                status_load: false,
                select_page: 1,
                count_page: 1,
                news: [],
                moment: moment,
            }
        },


        methods: {
            getNews(page) {

                this.$rest.api('getNewsBasic', {page: page || 1,limit:3})
                    .then(response => {
                        this.select_page = response.data.count.select_page || 1;
                        this.status_load = true;
                        if (response.success === true) {
                            this.news = response.data.news;
                            this.count_page = response.data.count.pages;
                        }
                    })
            },
        },
        created() {
            return this.getNews();
        }
    }


</script>
<style>
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

    .search {
        position: absolute;
        padding-top: 15px;

    }

    .search2 {
        margin-left: 30px
    }

    /*Pagination*/
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

</style>
