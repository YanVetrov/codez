<template>
    <div class="row">
        <div class="white-box">
            <br>
            <input id='label001' type="text" class="form-control form-control-line" v-model="news_title">
            <br>
            <vue-editor v-model="news_content"></vue-editor>
            <button type="button" class="btn btn-outline btn-primary btn-1e">отправить</button>

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
                id: this.$route.params.id,
                news_content: '',
                news_title: ''

            }
        },
        methods: {
            getOneNews() {
                this.$rest.api('getOneNews', {id: this.id})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.news_title = response.data.title;
                            this.news_content = response.data.content
                        }
                    })
            }
        },
        created() {
            return this.getOneNews()
        }
    }

</script>