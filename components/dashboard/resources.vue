<template>
    
       <div class="col-lg-4 col-md-12">
                    <div class="white-box">
                        <h3 class="box-title">{{$t('visits')}}</h3>
                        <ul class="country-state  p-t-20">
                            <li v-for="country in Stat" :key="country.id">
                                <h2>{{country.count}}</h2> <small>{{$t('from')}} {{country.url}}</small>
                                <div class="pull-right">{{country.percent}}%<i class="fa fa-level-up text-success"></i></div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:country.percent +'%'}"> <span class="sr-only"></span></div>
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
          
                Stat:[]


            }
        },

        mounted() {
       
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
             
            })


        }


    }


</script>




