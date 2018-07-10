<template>
    <div>
        <h5 class="title">{{$t('visits')}}</h5>
        <div class="list-sidebar-wr">
            <ul class="list-sidebar">
                <li v-for="country in data" :key="country.id">

                    <div class="list-sidebar--progress">
                        <strong>{{country.count}}</strong>
                        <span>{{country.percent}}%</span>

                        <span class="list-sidebar--progress-line" :style="{width:country.percent +'%'}"></span>
                    </div>

                    <p>{{country.url}}</p>

                </li>

            </ul>
        </div>
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
