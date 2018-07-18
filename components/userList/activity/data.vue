<template>


            

                    <online :data='data'/>

            
             
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
