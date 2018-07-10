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
    import maps from '~/components/dashboard/map.vue'
    import cards from '~/components/dashboard/cards'
    import resources from '~/components/dashboard/resources.vue'
    import machine from '~/components/dashboard/machine.vue'
    import chartCol from '~/components/dashboard/chartCol.vue'
    import chartLine from '~/components/dashboard/chartLine.vue'
    import profit from '~/components/dashboard/profit.vue'
    import partners from '~/components/dashboard/partners.vue'

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


