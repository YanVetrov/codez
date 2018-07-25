<template>
    
<div class="dashboard-server">
  <loader type="block" :status_load="status_load"/>
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
                            <strong>Cores:{{cpu.core}}</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt(cpu.used)}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-cpu" :style="{width:parseInt(cpu.used)+'%'}"></span>
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
                            <span>{{(parseInt(mem.free)/1024).toFixed(2)}} GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total">
                            <p>{{$t('total')}}:  {{(parseInt(mem.total)/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt(100-(100/mem.total*mem.free))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-memory" :style="{width:parseInt( 100-(100/mem.total*mem.free))+'%'}"></span>
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
                            <span>{{(disk.free/1024).toFixed(2)}} GB</span>
                        </li>

                        <li class="dashboard-server-item--main-total">
                            <p>Total: {{(disk.total/1024).toFixed(2)}} GB</p>
                            <strong>Cores: 8</strong>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>{{parseInt( (100-(100/disk.total) *disk.free ))}}%</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-drive" :style="{width:parseInt( (100-(100/disk.total) *disk.free ))+'%'}"></span>
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
                            <p>{{$t('system')}}: {{parseInt(uptime.sys/216000)}} {{$t('hours')}}</p>
                            <p>Linux</p>
                            <div class="uptime-hours">{{$t('app')}}: {{parseInt(uptime.app/216000)}} {{$t('hours')}}</div>
                        </li>

                    </ul>

                    <div class="dashboard-server-item--bot">

                        <p>Uptime:</p>
                        <div class="dashboard-server--line">
                            <span class="blue line-uptime" :style="{width:'100%'}"></span>
                        </div>

                    </div>

                </div>
            </li>
        </ul>
    </div>
</div>



</template>

<script>
    export default {
        data() {
            return {
              status_load:false,
                cpu: {},
                disk: {},
                mem: {},
                uptime: {},
                intervalUpdate: null
            }
        },

        mounted() {
            this.getServerStatus();
            this.intervalUpdate = setInterval(this.getServerStatus, 5000)
        },
        beforeDestroy() {
            clearInterval(this.intervalUpdate);
        },
        methods: {
            getServerStatus() {
                return this.$rest.api('getServerStatus')
                    .then(res => {
                        this.cpu = res.data.cpu;
                        this.mem = res.data.mem;
                        this.disk = res.data.disk;
                        this.uptime = res.data.uptime;
                        this.status_load=true;

                    })
            }
        }


    }
</script>

<style lang='scss' scoped>


</style>