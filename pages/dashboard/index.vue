<template>
    <div class="main">
        <cards/>

        <div class="dashboard-visitors">
            <chartCol/>
            <maps/>
            <resources/>
        </div>

        <div class="dashboard-profit">
            <profit/>
            <chartLine/>
            <partners/>
        </div>

        <machine/>
    </div>
</template>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard";*/
</style>

<script>
    import maps from '~/components/dashboard/map'
    import cards from '~/components/dashboard/cards'
    import resources from '~/components/dashboard/resources'
    import machine from '~/components/dashboard/machine'
    import chartCol from '~/components/dashboard/chartCol'
    import chartLine from '~/components/dashboard/chartLine'
    import profit from '~/components/dashboard/profit'
    import partners from '~/components/dashboard/partners'

    export default {
        components: {
            maps,
            chartCol,
            chartLine,
            machine,
            resources,
            cards,
            profit,
            partners,
        },
    }
</script>


