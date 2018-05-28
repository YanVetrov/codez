<template>
  <div class="row">
      
    <div class="col-md-12">
       
  <div class="row">
          
                    <div class="col-lg-12">
                        <div class="white-box">
                            <h3 class="box-title m-b-0">Daily Stat </h3>
                           
                           
                            <maps/>
                            <chartCol/>
                            <chartLine/>
                            

                        </div>
                    </div>
                </div>

                    
               




                    <machine/>

   
                 <!-- ============================================================== -->
            <!-- city-weather -->
            <!-- ============================================================== -->
            <div class="row">
               
               
               <resources/>



                <div class="col-md-12 col-lg-8">
                    <div class="white-box bg-extralight m-b-0">
                        <div class="city-weather-widget">
                            <h1>Kufri, Himachal Pradesh</h1>
                            <h4>Friday, 19 Jan 2017</h4>
                            <div class="row p-t-30">
                                <div class="col-sm-6">
                                    <ul class="side-icon-text">
                                        <li><span class="di vm"><i class="wi wi-day-hail text-info"></i></span><span class="di vm"><h1 class="m-b-0 text-info">23<sup>o</sup></h1><h5 class="m-t-0">Mostly Sunny</h5></span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-icons pull-right">
                                        <li><i class="wi wi-day-sunny m-r-5"></i>Humidity 38%</li>
                                        <li><i class=" wi wi-day-windy m-r-5"></i>Wind 38%</li>
                                    </ul>
                                </div>
                                <div class="col-md-12">
                                    <div id="ct-city-wth" style="height:220px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="row">
                            <ul class="list-unstyled city-weather-days">
                                <li class="col-xs-4 col-sm-2"><span>Tue</span><i class="wi wi-day-sunny"></i><span>32<sup>°F</sup></span></li>
                                <li class="col-xs-4 col-sm-2"><span>Wed</span><i class="wi wi-day-cloudy"></i><span>34<sup>°F</sup></span></li>
                                <li class="col-xs-4 col-sm-2"><span>Thu</span><i class="wi wi-day-hail"></i><span>35<sup>°F</sup></span></li>
                                <li class="col-xs-4 col-sm-2 active"><span>Fri</span><i class="wi wi-day-sprinkle"></i><span>34<sup>°F</sup></span></li>
                                <li class="col-xs-4 col-sm-2"><span>Sat</span><i class="wi wi-day-snow"></i><span>30<sup>°F</sup></span></li>
                                <li class="col-xs-4 col-sm-2"><span>Sun</span><i class="wi wi-day-sunny"></i><span>26<sup>°F</sup></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <!-- .row -->
                <div class="row">
                    
                    
                    
                    
                    
                 <cards></cards>
                 
                 
                 
                 
                 
                    <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="news-slide m-b-30 dashboard-slide">
                            <div class="vcarousel slide" >
                                <!-- Carousel items -->
                                <div class="carousel-inner">
                                    <div class="active item">
                                        <div class="overlaybg"><img src="../../static/images/heading-bg/slide6.jpg" /></div>
                                        <div class="news-content"><span class="label label-danger label-rounded">Primary</span>
                                            <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                                    </div>
                                    <div class="item">
                                        <div class="overlaybg"><img src="../../static/images/heading-bg/slide4.jpg" /></div>
                                        <div class="news-content"><span class="label label-primary label-rounded">Primary</span>
                                            <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                                    </div>
                                    <div class="item">
                                        <div class="overlaybg"><img src="../../static/images/heading-bg/slide6.jpg" /></div>
                                        <div class="news-content"><span class="label label-success label-rounded">Primary</span>
                                            <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
            <!-- Demo table -->
            <!-- ============================================================== -->
            <div class="row">
                <div class="col-md-12">
                    <div class="panel">
                        <div class="panel-heading">MANAGE USERS</div>
                        <div class="table-responsive">
                            <table class="table table-hover manage-u-table">
                                <thead>
                                    <tr>
                                        <th width="70" class="text-center">ID</th>
                                        <th>DATE</th>
                                        <th>GET</th>
                                        <th>GIVE</th>
                                        <th>PERCENT</th>
                                        <th>OCCUPATION</th>
                                        <th width="300">STATE</th>
                                    </tr>
                                </thead>
                                <tbody  >
                                 
                                    <tr v-for="list in lists" :key="list.key">
                                        <td class="text-center">14</td>
                                          <td>15 Mar 1988
                                            <br/><span class="text-muted">10: 55 AM</span></td>
                                        <td>ALFA-BANK LLC
                                            <br/><span class="text-muted">124 RUB</span></td>
                                        <td>ALFA-BANK LLC
                                            <br/><span class="text-muted">122 RUB</span></td>
                                        <td>4234.2 RUB
                                            <br/><span class="text-muted">230.3 USD</span></td>
                                        <td>4234.2 RUB
                                            <br/><span class="text-muted">230.3 USD</span></td>
                                        <td>
                                            <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-5"><i class="ti-check"></i></button>
                                            <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-5"><i class="ti-money"></i></button>
                                            <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-5"><i class="ti-back-left"></i></button>
                                            <button type="button" class="btn btn-info btn-outline btn-circle btn-s m-r-20"><i class="ti-trash"></i></button>
                                            <button type="button" class="btn btn-info btn-outline btn-rectangle btn-s m-r-20">INFO</button>

                                        </td>
                                    </tr>
                                    
                                    
                                 
                                </tbody>
                                   
  
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import maps from '~/components/dashboard/map.vue'
import cards from '~/components/dashboard/cards.vue'
import resources from '~/components/dashboard/resources.vue'
import machine from '~/components/dashboard/machine.vue'
import chartCol from '~/components/dashboard/chartCol.vue'
import chartLine from '~/components/dashboard/chartLine.vue'

import axios from 'axios'

    export default {
        
      data(){
        return{
            
            
            like:'mdi-thumb-up',
          dislike:'mdi-thumb-down',
          height:'80px',
          showHide:'Show',
            lists:[
              {},{},{},{}
            ],
            transactions:[],
            Stat:[],


        }
      },
            methods:{
          heigh(e){
              
             if( e.target.previousSibling.style.height=='80px')
             {
                 e.target.previousSibling.style.height='auto'
                 this.showHide = 'Hide'
                 }
             else{
                 e.target.previousSibling.style.height='80px';
                this.showHide = 'Show'
             }
          }
      },
      mounted(){
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
      },
    components: {
      maps,
      chartCol,
      chartLine,
      machine,
      resources,
      cards
      },
    }
</script>



<style scoped>
.laybox{
  width: 10%;
display:flex;
align-items:center;
flex-direction:column;
justify-content: space-around;
}

.line {
  background: #CCC;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

}
.wrap-fa {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.wrap-fa .fa {
    margin: 5px;
    font-size:25px;
    color:silver;
}
.line {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(245,245,245);
    padding:5px;
    margin-top:10px;
    color:#666;
}
.info{
    border-bottom:none;
}
.lay:not(.comment){
    width: 20%;
}
.info .lay{
        display: flex;
    flex-direction:row;
    align-items: center;
}
.av {
    width: 30px;
    height: 30px;  
    background: silver;
    border-radius: 100%; 
    margin-right: 5px;
}
.comment {
    background:rgba(252, 252, 252, 1);
    overflow: hidden;
    align-items: flex-end;
    padding: 15px;
}
.lay:first-child{
    width: 5%;
}
.line .btn {
    margin-left: 3px; 
}
.comment .btn{
    height: 30px;
} 
.comment i {
    font-size:25px;
    color:#DDD;
}
.line .comment-area{
        border-radius: 5px;
    padding: 15px;
    height: 20px;
    width: 90%;
    
}









</style>

