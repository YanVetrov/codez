<template>
    <div class="main">
        <general-statistics-with-filter/>

        <div class="dashboard-visitors">
            <chart-visits/>
            <map-visits/>
            <statistics-resource-visits/>
        </div>

        <div class="dashboard-profit">
            <total-profit/>
            <chart-profit/>
            <statistics-activity-partners/>
        </div>
        <exchanges-pending/>
        <server-status/>
        <reserve-status/>
    </div>
</template>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard";*/
</style>

<script>
    import generalStatisticsWithFilter from '~/components/dashboard/generalStatisticsWithFilter';
    import chartVisits from '~/components/dashboard/chartVisits';
    import mapVisits from '~/components/dashboard/mapVisits';
    import statisticsResourceVisits from '~/components/dashboard/statisticsResourceVisits';
    import totalProfit from '~/components/dashboard/totalProfit';
    import chartProfit from '~/components/dashboard/chartProfit';
    import statisticsActivityPartners from '~/components/dashboard/statisticsActivityPartners';
    import exchangesPending from '~/components/exchangesPending'
    import serverStatus from '~/components/dashboard/serverStatus'
    import reserveStatus from '~/components/dashboard/reserveStatus'

    export default {
        components: {
            generalStatisticsWithFilter,
            chartVisits,
            mapVisits,
            statisticsResourceVisits,
            totalProfit,
            chartProfit,
            statisticsActivityPartners,
            exchangesPending,
            serverStatus,
            reserveStatus,
        }
    }
</script>
