<template>
    <div class="dashboard-reserve-wr border">
        <div class="title">Резервы валют</div>

        <ul class="dashboard-reserve-list">
            <litem v-for='data in data' :key='data.id' :img='data.img' :name='data.name' :type='data.type' :total='data.total' :modal='data.currency' />
        </ul>
    
    </div>
</template>

<script>
    import litem from './litem'
    export default {
        props: ['data'],
        components:{litem},
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
