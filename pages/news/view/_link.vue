<template>
    <div class="row">
        <div class="white-box">
            <h2>{{news_title}}</h2>
            <div v-html="news_content"></div>

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
                link: this.$route.params.link,
                news_content: '',
                news_title: ''

            }
        },
        methods: {
            getOneNews() {
                this.$rest.api('getOneNews', {link: this.link})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.news_title = response.data.title;
                            this.news_content = response.data.content
                        }
                    })
            }
        },
        created(){
            return this.getOneNews()
        }
    }

</script>