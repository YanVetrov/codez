<template>


    <div class="row">
        <div class="white-box">
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
                        <img src='~/static/images/ok.svg' width="250px" height="250px">
                        <h2> Успешно опубликовано </h2>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import Loading from "~/components/loading";

    export default {
        components: {Loading},

        data() {
            return {
                status_load: true,
                news_id: this.$route.params.id,
                news_content: '',
                news_title: '',
                afterEdit: false

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