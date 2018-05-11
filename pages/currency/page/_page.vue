<template>
    <div class="row">
        <div class="white-box">
            <loading type="block" :status_load="status_load"/>
            soon
        </div>

    </div>

</template>

<script>
    import Loading from "~/components/loading";


    export default {
        components: {Loading},

        data() {
            return {
                status_load: false,
                select_page: this.$route.params.page,
                currencies: [],
                total_page: 1,
            }
        },

        methods: {
            getAllCurrency(page) {

                this.$rest.api('getAllCurrency', {page: page || 1, limit: 50})
                    .then(response => {
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get currencies:',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            this.select_page = response.data.count.select_page || 1;
                            this.currencies = response.data.currencies;
                            this.total_page = response.data.count.pages;
                            this.status_load = true;
                        }

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get currencies:',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                    });

            }
        },

        created() {
            return this.getAllCurrency(this.select_page);
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
