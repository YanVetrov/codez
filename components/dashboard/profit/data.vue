<template>
    

        <ul>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Прибыли всего</p>
                    <span>{{data.total}}</span>
                </div>
                <p><img src="~/assets/img/coins.svg" alt=""></p>
            </li>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Отчисления партнеров</p>
                    <span>{{data.percent}}</span>
                </div>
                <p><img src="~/assets/img/percentage.svg" alt=""></p>
            </li>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Чистая прибыль</p>
                    <span>{{data.clear}}</span>
                </div>
                <p><img src="~/assets/img/bank-dash.svg" alt=""></p>
            </li>
        </ul>




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
