<template>
    
<div class="dashboard-server">
  <loading type="block" :status_load="status_load"/>
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

                        <p></p>
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
    import Loading from "~/components/loading";
    export default {
        components: {Loading},
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


.dashboard {

  &-server {

    >div {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .title {
      border-bottom: 1px solid $middleGrey;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      >li {
        flex: 1 1;
        min-width: 290px;

        @media screen and (max-width: 1300px) {
          min-width: 220px;
        }
      }
    }

    &-item {
      padding: 30px;

      @media screen and (max-width: 1300px) {
        padding: 15px;
      }


      &--top {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        strong {
          font-weight: 500;
          font-size: 16px;
          color: $darkGrey;
          display: inline-block;
          margin-left: 10px;
        }
      }

      &--main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 -20px;

        @media screen and (max-width: 1300px) {
          margin: 0 -10px;
        }

        li {
          margin: 20px;

          @media screen and (max-width: 1300px) {
            margin: 10px;
          }

          &.dashboard-server-item--main-img {
            margin-bottom: 10px;
            margin-right: 5px;
          }
        }

        p {
          font-size: 14px;
          color: $colorTable;
          margin-bottom: 25px;

          @media screen and (max-width: 1300px) {
            font-size: 13px;
          }
        }

        span {
          color: $dark;
          font-size: 28px;
          font-family: $comfortaa;
          white-space: nowrap;

          @media screen and (max-width: 1300px) {
            font-size: 18px;
          }
        }

        strong {
          font-size: 14px;
          text-transform: uppercase;
          color: $darkGrey;
          line-height: normal;
          display: inline-block;
          margin-top: 12px;

          @media screen and (max-width: 1300px) {
            font-size: 13px;
            margin-top: 5px;
          }
        }

        &-img {

          img {
            min-width: 80px;
            max-width: 80px;
            width: 80px;
            height: 94px;

            @media screen and (max-width: 1300px) {
              height: auto;
              min-width: 45px;
              max-width: 55px;
              width: 55px;
            }
          }
        }

        &-uptime {
          p {
            margin-bottom: 0;
            text-align: right;
          }
        }
      }

      &--bot {
        margin-top: 20px;
      }
    }

    &--line {
      position: relative;
      border-bottom: 4px solid #ededed;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;

      span {
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 4px;
        background: $bacBlue;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
    }

  }

}
</style>