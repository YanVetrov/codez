<template>
  
    <div class="dashboard-visitors--source sidebar-width">
        <h5 class="title">{{$t('visits')}}</h5>
        <div class="list-sidebar-wr">
            <ul class="list-sidebar">
                <li v-for="country in Stat" :key="country.id">
                    <div class="list-sidebar--progress">
                        <strong>{{country.count}}</strong>
                        <span>{{country.percent}}%</span>
                        <span class="list-sidebar--progress-line" :style="{width:country.percent +'%'}"></span>
                    </div>
                    <p>{{country.url}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Loading from "~/components/_utils/loader/index";
    export default {
      components:{Loading},
        data() {
            return {
                status_load:true,
                Stat:[]
            }
        },
        mounted() {
              this.status_load=false
               this.$rest.api('getStatisticClient')
          .then(res => {         
              let main = res.data.visitors;
              let obj={};
              let arr=[];
              main.forEach(el => {
                  el.fromUrl.forEach(el=>{
                      let count = el.count;
                      let url = el.url;
                      obj[url]?obj[url]=parseInt(obj[url])+count:obj[url]=count;
                  })
              });
              let total=0;
              for(let k in obj){
                  let objj = {};
                  objj.url = k;
                  objj.count = obj[k];
                  total+=obj[k];
                  arr.push(objj);
              }
              arr.forEach(el=>{
                 el.percent = Math.ceil((parseFloat(el.count * 100 / total))*10)/10
              })
              console.log(arr);
              this.Stat = arr;
            this.status_load=true;
             
            })
        }
    }
</script>
<style lang='scss' scoped>
 /*@import "dashboard/dashboard-visitors";*/
</style>