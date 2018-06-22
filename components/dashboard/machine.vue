<template>

    <div class="row">

        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title"><i class='fa fa-rocket' style="margin:5px"/>{{$t('cpu')}}</h3>
                <div class="text-right"><span class="text-muted">{{cpu.name}}</span>
                    <h4><sup></sup> Cores:{{cpu.core}}</h4></div>
                <span class="text-success">{{parseInt(cpu.used)}}%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100" :style="{width:parseInt(cpu.used)+'%'}"><span
                            class="sr-only"></span></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h4 class="box-title"><i class='fa fa-server' style="margin:5px"/>{{$t('mem')}}</h4>
                <div class="text-right"><span
                        class="text-muted">{{$t('total')}}:  {{(parseInt(mem.total)/1024).toFixed(2)}} GB</span>
                    <h4> {{$t('free')}}: {{(parseInt(mem.free)/1024).toFixed(2)}} GB</h4></div>
                <span class="text-danger">{{parseInt(100-(100/mem.total*mem.free))}}%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100"
                         :style="{width:parseInt( 100-(100/mem.total*mem.free))+'%'}">
                        <span class="sr-only"></span></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title"><i class='fa fa-database' style="margin:5px"/>{{$t('hdd')}}</h3>
                <div class="text-right"><span class="text-muted">Total: {{(disk.total/1024).toFixed(2)}} GB</span>
                    <h4>{{$t('free')}}: {{(disk.free/1024).toFixed(2)}} GB</h4></div>
                <span class="text-info">{{parseInt( (100-(100/disk.total) *disk.free ))}}%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-info"
                         :style="{width:parseInt( (100-(100/disk.total) *disk.free ))+'%'}">
                        <span class="sr-only"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title"><i class='fa fa-calendar' style="margin:5px"/>{{$t('uptime')}}</h3>
                <div class="text-right"><span class="text-muted">{{$t('system')}}: {{parseInt(uptime.sys/216000)}} {{$t('hours')}}</span>
                    <h4>{{$t('app')}}: {{parseInt(uptime.app/216000)}} {{$t('hours')}}</h4></div>
                <span class="text-success">{{$t('good')}}</span>

                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100" :style="{width:'100%'}"><span class="sr-only"></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
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

                    })
            }
        }


    }


</script>




