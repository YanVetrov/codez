<template>

    <highstock :options="dat"></highstock>

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
