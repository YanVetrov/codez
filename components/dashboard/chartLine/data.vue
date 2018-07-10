<template>


    <div>
        <h5 class="title">{{$t('profit')}}</h5>
        <highstock :options="data" style="height: 270px;"></highstock>
    </div>

</template>

<script>
    export default {
        name: "data",
        props: ['data']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
