<template>
    <div style="height: 100%;width: 100%">
        <h5 class="title">Посещения</h5>

        <highmaps :options='data' style="height: 270px"></highmaps>

    </div>
</template>
<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
