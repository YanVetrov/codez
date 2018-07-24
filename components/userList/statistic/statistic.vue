<template>

    <ul class="users-list-toodo-sidebar--list__client">
        <li>
            <span>
                <i class="fal fa-users fa-3x" style="color: #188fff;"></i>
            </span>
            <p class="progress">

                {{$t('page.user.statistic.clients')}}

                <span class="line blue"></span>
            </p>
            <p class="count">{{data.active}}</p>
        </li>
        <li>
            <span>
                <i class="fal fa-user-lock fa-3x" style="color: #ff7675;"></i>
            </span>
            <p class="progress">
                {{$t('page.user.statistic.blocked')}}
                <span class="line red"></span>
            </p>
            <p class="count">{{data.blocked}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
