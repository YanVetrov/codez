<template>

    <div>
        <h5 class="title">{{$t('visits')}}</h5>

        <div class="list-sidebar-wr">
            
                <litem :country='data'/>
            
        </div>
    </div>
</template>
<script>
import litem from '~/components/litem.vue';
    export default {
        name: "data",
        props: ['data'],
        components:{litem}
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
