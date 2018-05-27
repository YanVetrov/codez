<template>
    
                <div class="row">
                    
                        <div class="col-lg-3 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title"><i class='fa fa-rocket' style="margin:5px"/>CPU</h3>
                                    <div class="text-right"> <span class="text-muted">cores:{{cpu.core}}</span>
                                        <h4><sup></sup> {{cpu.name}}</h4> </div> <span class="text-success">{{parseInt(cpu.used)}}%</span>
                                    <div class="progress m-b-0">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:parseInt(cpu.used)+'%'}"> <span class="sr-only"></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h4 class="box-title"><i class='fa fa-server' style="margin:5px"/>Memory (RAM)</h4>
                                    <div class="text-right"> <span class="text-muted">Total: {{parseInt(mem.free)}} MB</span>
                                        <h4> Free: {{parseInt(mem.total)}} MB</h4> </div> <span class="text-danger">{{parseInt( mem.free*100 / mem.total)}}%</span>
                                    <div class="progress m-b-0">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:parseInt( mem.free*100 / mem.total)+'%'}"> <span class="sr-only"></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title"><i class='fa fa-database' style="margin:5px"/>Hard drive</h3>
                                    <div class="text-right"> <span class="text-muted">Total: {{parseInt(disk.free)}} MB</span>
                                        <h4>Free: {{parseInt(disk.size)}} MB</h4> </div> <span class="text-info">{{parseInt( disk.free*100 / disk.size)}}%</span>
                                    <div class="progress m-b-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:parseInt( disk.free*100 / disk.size)+'%'}"> <span class="sr-only"></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title"><i class='fa fa-calendar' style="margin:5px"/>Uptime</h3>
                                    <div class="text-right"> <span class="text-muted">System: {{parseInt(uptime.sys/216000)}} Hours</span>
                                        <h4>App: {{parseInt(uptime.app/216000)}} Hours</h4> </div> 
                                    <div class="progress m-b-0">
                                        <div class="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:'100%'}"> <span class="sr-only"></span> </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
</template>

<script>
    export default {
        data() {
            return {
            cpu:{},
            disk:{},
            mem:{},
            uptime:{}
            }
        },

        mounted() {
       
        this.$rest.api('getServerStatus')
        .then(res =>{
            this.cpu = res.data.cpu
            this.mem = res.data.mem
            this.disk = res.data.disk
            this.uptime = res.data.uptime
            
        })


        }


    }


</script>




