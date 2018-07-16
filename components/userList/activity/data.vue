<template>


            
                <div class="sidebar-width border users-list-toodo-sidebar--active-block">
                    <online :data='data'/>
                </div>
            
              



</template>

<script>
import online from './online';
    export default {
        props: ['data'],
        components:{online},
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
