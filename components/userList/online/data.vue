<template>

    <div class="sidebar-width border users-list-toodo-sidebar--active-block">

        <div class="users-list-toodo-sidebar--active-block__top">
            <h5 class="title">Активность</h5>
            <p>{{data.length}} Онлайн</p>
        </div>

        <div class="users-list-toodo-sidebar--active-block__list--wr">

            <ul class="users-list-toodo-sidebar--active-block__list">
                <onlineItem v-for='user in data'
                            :key='user.id'
                            :actionText='user.actionText'
                            :ip='user.ip'
                            :isoCountry='user.country'/>
            </ul>
        </div>
    </div>


</template>

<script>
    import onlineItem from './onlineItem';

    export default {
        props: ['data'],
        components: {onlineItem},
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
