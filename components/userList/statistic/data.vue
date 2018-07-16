<template>


            
                                   <div class="sidebar-width border users-list-toodo-sidebar--list">
            
                    <statistic :data='data.statistic'/>
            
                   <social :data='data.social' />
            
                </div>




</template>

<script>
import statistic from './statistic';
import social from './social';
    export default {
        props: ['data'],
        components:{social,statistic}
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
