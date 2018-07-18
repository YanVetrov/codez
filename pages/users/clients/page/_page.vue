<template>

<div class='main'>
    <div class="users-list-toodo-wr">
        
            
            
            
                <list/>
            
            
        
            
            <div class="users-list-toodo-sidebar">
            
                <activity/>
            
               <statistic/>
            
            </div>
        
        </div>
</div>


</template>

<script>
    import activity from '~/components/userList/activity';
    import statistic from '~/components/userList/statistic';
    import list from '~/components/userList/list';
    export default {
        props: ['data'],
        components:{activity,statistic,list},
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
