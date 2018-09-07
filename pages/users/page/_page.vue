<template>

    <div class='main'>
        <div class="users-list-toodo-wr">
            <list/>
            <div class="users-list-toodo-sidebar">

                <online/>

                <statistic/>

            </div>

        </div>
    </div>


</template>

<script>
    import online from '~/components/userList/online/index';
    import statistic from '~/components/userList/statistic/index';
    import list from '~/components/userList/list/index';

    export default {
        props: ['data'],
        components: {online, statistic, list},
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
