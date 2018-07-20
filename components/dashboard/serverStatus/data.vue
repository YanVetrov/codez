<template>


    <div class="dashboard-server-wr border">
        <h5 class="title">Загрузка сервера</h5>

        <ul class="dashboard-server-list">
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><i class="fal fa-server fa-2x" style="color: #65b340"></i></span>
                        <strong>{{$t('cpu')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>{{$t('free')}}:</p>
                            <span><animate-number :from="0" :to="(100-data.cpu.used)"></animate-number>%</span>
                        </li>

                        <li class="dashboard-server-item--main-total"
                            style="width: 45%; margin: auto 0;text-align: right">
                            <p>{{data.cpu.name}}</p>
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

                        <span>
                            <i class="fal fa-memory fa-2x" style="color: #ff5857"></i>
                        </span>
                        <strong>{{$t('mem')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>{{$t('free')}}:</p>

                            <span><animate-number :from="0" :to="(data.mem.free/1024)"
                                                  :formatter="formatter"></animate-number> GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total" style="text-align: right">
                            <p>{{$t('total')}}: {{(parseInt(data.mem.total)/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt(100-(100/data.mem.total*data.mem.free))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-memory"
                                  :style="{width:parseInt( 100-(100/data.mem.total*data.mem.free))+'%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><i class="fal fa-hdd fa-2x" style="color: #178dc1"></i></span>
                        <strong>{{$t('hdd')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-free">
                            <p>{{$t('free')}}:</p>
                            <span><animate-number :from="0" :to="(data.disk.free/1024)"
                                                  :formatter="formatter"></animate-number> GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total" style="text-align: right">
                            <p>Total: {{(data.disk.total/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt( (100-(100/data.disk.total) *data.disk.free ))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-drive"
                                  :style="{width:parseInt( (100-(100/data.disk.total) *data.disk.free ))+'%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
            <li>
                <div class="dashboard-server-item">

                    <div class="dashboard-server-item--top">

                        <span><i class="fal fa-plug fa-2x" style="color: #ea9e33"></i></span>
                        <strong>{{$t('uptime')}}</strong>

                    </div>

                    <ul class="dashboard-server-item--main">

                        <li class="dashboard-server-item--main-img">
                            <i class="fab fa-linux fa-6x" style="padding: 22px 7px; color: #cccccc"></i>
                        </li>

                        <li class="dashboard-server-item--main-uptime">
                            <p>
                                {{$t('system')}}:
                            </p>
                            <p>{{$moment.duration(data.uptime.sys).humanize()}}</p>
                            <div class="uptime-hours" style="text-align: right">
                                {{$t('app')}}:
                            </div>
                            <div class="uptime-hours" style="text-align: right">
                                {{$moment.duration(data.uptime.app).humanize()}}
                            </div>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

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
        props: ['data'],
        methods: {
            formatter: function (num) {
                return (+num).toFixed(2)
            }
        }
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
