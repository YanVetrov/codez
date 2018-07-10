<template>
    

    <div class="dashboard-server-wr border">
        <h5 class="title">Загрузка сервера</h5>

        <ul class="dashboard-server-list">
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><img src="~/assets/img/laptop-dash.png" alt=""></span>
                        <strong>{{$t('cpu')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>Free:</p>
                            <span>0.65 GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total">
                            <p>Total: 16.00 GB</p>
                            <strong>Cores:{{data.cpu.core}}</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt(data.cpu.used)}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-cpu" :style="{width:parseInt(data.cpu.used)+'%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><img src="~/assets/img/memory-dash.png" alt=""></span>
                        <strong>{{$t('mem')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>{{$t('free')}}:</p>
                            <span>{{(parseInt(data.mem.free)/1024).toFixed(2)}} GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total">
                            <p>{{$t('total')}}:  {{(parseInt(data.mem.total)/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt(100-(100/data.mem.total*data.mem.free))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-memory" :style="{width:parseInt( 100-(100/data.mem.total*data.mem.free))+'%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><img src="~/assets/img/hard-dash.png" alt=""></span>
                        <strong>{{$t('hdd')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>{{$t('free')}}:</p>
                            <span>{{(data.disk.free/1024).toFixed(2)}} GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total">
                            <p>Total: {{(data.disk.total/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt( (100-(100/data.disk.total) *data.disk.free ))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-drive" :style="{width:parseInt( (100-(100/data.disk.total) *data.disk.free ))+'%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><img src="~/assets/img/uptime-dash.png" alt=""></span>
                        <strong>{{$t('uptime')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-img">
                            <img src="~/assets/img/ping-dash.png" alt="">
                        </li>

                        <li class="dashboard-server-item--main-uptime">
                            <p>{{$t('system')}}: {{parseInt(data.uptime.sys/216000)}} {{$t('hours')}}</p>
                            <p>Linux</p>
                            <div class="uptime-hours">{{$t('app')}}: {{parseInt(data.uptime.app/216000)}} {{$t('hours')}}</div>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p></p>
                        <div class="dashboard-server--line">
                            <span class="blue line-uptime" :style="{width:'100%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
        </ul>
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
