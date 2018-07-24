<template>

    <div class="breadcrumb">

        <p class="breadcrumb__name-block">dashboard</p>

        <div class="breadcrumb--r">

            <ul>
                <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
                <li>Dashboard</li>
            </ul>

            <div class="breadcrumb-item">
                <a href="/"><i class="fal fa-film"></i> {{$t('breadcrumb.tutorial')}}</a>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "breadcamp"
    }
</script>

<style scoped>

</style>