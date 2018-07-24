<template>
            <li>
                <a @click='modalState=true'>
                    <img :src="img" alt="">
                    <p class="dashboard-reserve-name">{{name}}</p>
                    <p>{{total}} <span>{{type}}</span></p>
                </a>
                <modal :data='modal' :show='modalState'/>
            </li>


</template>

<script>
import modal from './modal'
    export default {
        props: ['img','name','type','total','modal'],
        components:{modal},
        data(){return{modalState:false}}
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
