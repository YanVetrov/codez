<template>


    <div class="users-list-toodo-sidebar--social">
        <p class="users-list-toodo-sidebar--social__title text-center">
            {{$t('page.user.statistic.registeredThroughSocialNetwork')}}</p>

        <ul class="users-list-toodo-sidebar--social__list">

            <li v-for='soc in data' :key='soc.id'>
                <p><img :src="soc.src" alt=""></p>
                <span>{{soc.total}}</span>
            </li>

        </ul>
    </div>


</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
