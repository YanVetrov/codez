<template>

    <div class="row">

        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title"><i class='fa fa-rocket' style="margin:5px"/>CPU</h3>
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
                <h4 class="box-title"><i class='fa fa-server' style="margin:5px"/>Memory (RAM)</h4>
                <div class="text-right"><span
                        class="text-muted">Total:  {{(parseInt(mem.total)/1024).toFixed(2)}} GB</span>
                    <h4> Free: {{(parseInt(mem.free)/1024).toFixed(2)}} GB</h4></div>
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
                <h3 class="box-title"><i class='fa fa-database' style="margin:5px"/>Hard drive</h3>
                <div class="text-right"><span class="text-muted">Total: {{(disk.total/1024).toFixed(2)}} GB</span>
                    <h4>Free: {{(disk.free/1024).toFixed(2)}} GB</h4></div>
                <span class="text-info">{{parseInt( (100-(100/disk.total) *disk.free ))}}%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                         aria-valuemax="100" :style="{width:parseInt( (100-(100/disk.total) *disk.free ))+'%'}"><span
                            class="sr-only"></span></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title"><i class='fa fa-calendar' style="margin:5px"/>Uptime</h3>
                <div class="text-right"><span class="text-muted">System: {{parseInt(uptime.sys/216000)}} Hours</span>
                    <h4>App: {{parseInt(uptime.app/216000)}} Hours</h4></div>
                <span class="text-success">Good</span>

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
            this.intervalUpdate = setInterval(this.getServerStatus, 1000)
        },
        beforeDestroy() {
            this.getServerStatus();
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




