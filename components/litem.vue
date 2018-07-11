<template>
            <ul class="list-sidebar">
                <li v-for="country in country" :key="country.id">
                    <div class="list-sidebar--progress">
                        <strong>{{country.count}}</strong>
                        <span>{{country.percent}}%</span>
                        <span class="list-sidebar--progress-line" :style="{width:country.percent +'%'}"></span>
                    </div>
                    <p>{{country.url}}</p>
                </li>
            </ul>

</template>

<script>
    export default {
        props: ['country']
    }
</script>


<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
