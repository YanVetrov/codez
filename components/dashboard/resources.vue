<template>
    
       <div class="col-lg-4 col-md-12">
                    <div class="white-box">
                        <h3 class="box-title">Visit from the resources</h3>
                        <ul class="country-state  p-t-20">
                            <li v-for="country in Stat" :key="country.id">
                                <h2>{{country.count}}</h2> <small>From {{country.url}}</small>
                                <div class="pull-right">25% <i class="fa fa-level-up text-success"></i></div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width:'25%'}"> <span class="sr-only"></span></div>
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
                  let date = el.date.slice(0,10);
                  el.fromUrl.forEach(el=>{
                      el.date = date;
                      arr.push(el)
                  })
              });
              this.Stat = arr;
             
            })


        }


    }


</script>




