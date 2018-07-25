<template>

    <div class="dashboard-profit__list sidebar-width">
        <loader type="block" :status_load="status_load"/>
        <ul>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Прибыли всего</p>
                    <span>18 232</span>
                </div>
                <p><img src="~/assets/img/coins.svg" alt=""></p>
            </li>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Отчисления партнеров</p>
                    <span>18 232</span>
                </div>
                <p><img src="~/assets/img/percentage.svg" alt=""></p>
            </li>
            <li>
                <div class="dashboard-profit__list--item">
                    <p>Чистая прибыль</p>
                    <span>18 232</span>
                </div>
                <p><img src="~/assets/img/bank-dash.svg" alt=""></p>
            </li>
        </ul>

    </div>


</template>

<script>
    export default {
        data() {
            return {
                status_load: false,
            }
        },
        mounted() {
            this.status_load = true;
        }

    }


</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-profit";*/
</style>

