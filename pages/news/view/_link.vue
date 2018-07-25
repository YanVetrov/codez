<template>
    <div class="row">
        <div class="white-box">
            <h2>{{news_title}}</h2>
            <div v-html="news_content"></div>
        </div>
        <div class="white-box ">
            <div>
                <label>Имя</label>
                <input class="form-control form-control-line" v-model="name">
                <label>Коментарий</label>
                <input class="form-control form-control-line" v-model="message">
                <br>
                <button type="button" class="btn btn-outline btn-primary btn-1e btn_a" @click='createCommentForNews()'>
                    отправить
                </button>
            </div>
            <br>
            <div class="white-box box_m" v-for="(el,i) in comment "
                 :key="i">
                <span>
                        <i class="icon-calender"></i> {{moment(el.createdAt).format('DD.MM.YY в HH:mm')}}
                    </span>
                <h5>Имя :{{el.name_author}}</h5>
                <div>
                    {{el.message}}
                </div>
                <br>


            </div>
        </div>
    </div>

</template>

<script>
    import Loading from "~/components/_utils/loader/index";
    import moment from 'moment'

    export default {
        components: {Loading},

        data() {
            return {
                status_load: false,
                link: this.$route.params.link,
                news_content: '',
                news_title: '',
                news_id: '',
                comment: '',
                moment: moment,
                name: '',
                message: '',

            }
        },
        methods: {
            getOneNews() {
                this.$rest.api('getOneNews', {link: this.link})
                    .then(response => {
                        if (response.success === true) {
                            this.news_title = response.data.title;
                            this.news_content = response.data.content;
                            this.news_id = response.data._id;
                            return this.getCommentsForNews();
                        }
                    })
            },
            createCommentForNews() {
                this.$rest.api('createCommentForNews', {
                    news_id: this.news_id,
                    message: this.message,
                    name_author: this.name
                })
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            return this.getCommentsForNews();
                        }
                    })
            },
            getCommentsForNews() {
                this.$rest.api('getCommentsForNews', {news_id: this.news_id})
                    .then(response => {
                        console.log(response.data);
                        if (response.success === true) {
                            this.comment = response.data.comments;
                            this.name = response.data.name_author

                        }
                    })
            }

        },
        created() {
            return this.getOneNews();

        },

    }


</script>
<style>
    .btn_a {
        position: relative;
        float: right;
    }

    .img {
        position: relative;
        top: -55px;
    }

    .box_m {
        position: relative;
        top: 55px;

    }
</style>