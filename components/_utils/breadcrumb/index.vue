<template>

    <div class="breadcrumb">

        <p class="breadcrumb__name-block">{{$t('breadcrumb.routes.'+(this.$route.name?this.$route.name:'error').replace('-page-page', ''))}}</p>

        <div class="breadcrumb--r">

            <ul>
                <li v-if="(this.$route.name?this.$route.name:'error').replace('-page-page', '') !=='dashboard'">
                    <nuxt-link to="/dashboard">{{$t('breadcrumb.routes.dashboard')}}</nuxt-link>
                </li>
                <li>{{$t('breadcrumb.routes.'+(this.$route.name?this.$route.name:'error').replace('-page-page', ''))}}</li>
            </ul>

            <div class="breadcrumb-item">
                <a href="/"><i class="fal fa-film"></i> {{$t('breadcrumb.tutorial')}}</a>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        head(){
            return {title:'ProExAdmin | '+this.$t('breadcrumb.routes.'+(this.$route.name?this.$route.name:'error').replace('-page-page', ''))}
        }
    }
</script>

<style scoped>

</style>