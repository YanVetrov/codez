<template>
    <div class="row">
        <div class="white-box">
            <notifications group="review_create" classes="news-create-notifications" class="news-notify"/>
            <loading type="block" :status_load="status_load "/>
            <div class="row" v-if="afterEdit === false">
                <input id='label001' type="text" class="form-control form-control-line" v-model="news_title">
                <br>
                <vue-editor v-model="news_content"></vue-editor>
                <button type="button" class="btn btn-outline btn-primary btn-1e" @click='editNews()'>отправить</button>
            </div>
            <div class="row" v-else>
                <div class="white-box " style="text-align: center">
                    <div class="col-md-12">
                        <succses_page/>
                        {{text}}
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import Loading from "~/components/loading";
    import Succses_page from "@/components/success_page";

    export default {
        components: {Succses_page, Loading},

        data() {
            return {
                status_load: true,
                succses_page: true,
                news_id: this.$route.params.id,
                news_content: '',
                news_title: '',
                afterEdit: false,
                text: ''

            }
        },
        methods: {
            getOneNews() {
                this.$rest.api('getOneNews', {id: this.news_id})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.news_title = response.data.title;
                            this.news_content = response.data.content;

                        }
                    })
            },
            editNews() {
                this.status_load = false;
                this.$rest.api('editNews', {news_id: this.news_id, content: this.news_content, title: this.news_title})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.status_load = true;
                            this.afterEdit = true;
                            this.succses_page = true;
                            this.text = 'Успешно опубликовано';


                        }
                        if (response.success === false) {
                            this.status_load = true;
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get news!',
                                text: 'Server error 500! Please retry.\n' + response.error.message
                            });
                        }
                    })
            }
        },
        created() {
            return this.getOneNews()
        },

    }

</script>