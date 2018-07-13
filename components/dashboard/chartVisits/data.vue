<template>
    <div>
        <h5 class="title">{{$t('entries')}}</h5>
        <highstock :options="dat" style="height: 270px;"></highstock>
    </div>
</template>

<script>
    export default {
        name: "dat",
        props: ['dat']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
