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
        <trans/>
        <machine/>
        <reserve/>
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
    import trans from '~/components/transactions'
    import reserve from '~/components/dashboard/reserve'

    export default {
        components: {
            maps,
            trans,
            chartCol,
            chartLine,
            machine,
            resources,
            cards,
            profit,
            partners,
            reserve,
        },
    }
</script>
