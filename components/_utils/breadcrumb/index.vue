<template>

    <div class="breadcrumb">
        <modal name="tutorialVideo"
               :draggable="true"
               width="640"
               height="360">
            <iframe src="https://player.vimeo.com/video/240284291" width="100%" height="100%" frameborder="0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </modal>
        <p class="breadcrumb__name-block">
            {{$t('breadcrumb.routes.'+(this.$route.name?this.$route.name:'error').replace('-page-page', ''))}}</p>

        <div class="breadcrumb--r">

            <ul>
                <li v-if="(this.$route.name?this.$route.name:'error').replace('-page-page', '') !=='dashboard'">
                    <nuxt-link to="/dashboard">{{$t('breadcrumb.routes.dashboard')}}</nuxt-link>
                </li>
                <li>{{$t('breadcrumb.routes.'+(this.$route.name?this.$route.name:'error').replace('-page-page', ''))}}
                </li>
            </ul>

            <div class="breadcrumb-item">
                <a style="cursor: pointer" @click="showTutorial"><i class="fal fa-film"></i> {{$t('breadcrumb.tutorial')}}</a>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        head() {
            return {title: 'ProExAdmin | ' + this.$t('breadcrumb.routes.' + (this.$route.name ? this.$route.name : 'error').replace('-page-page', ''))}
        },
        methods: {
            showTutorial() {
                this.$modal.show('tutorialVideo');
            }
        }
    }
</script>

<style scoped>

</style>