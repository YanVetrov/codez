<template>
    
   <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="row">
                            <div class="col-lg-6 flexx" v-for="bank in banks" :key="bank._id">
                                <div class="white-box">
                                    <h3 class="box-title">{{bank.conf.name}}</h3>
                                    <h4>{{bank.conf.title}}</h4>
                                    <span class='text-muted'>{{time(bank.lastUpdatedAt)}}</span>
                                    <ul  class="list-inline m-t-30 p-t-10 two-part">
                                        <li><img :src="'https://exchanger_001.proexchanger.net/service/fs'+bank.conf.logo"/></li>
                                        <li style="width:50%" class="text-right">
                                            <ul>
                                                <li>{{bank.countRates}} Rates</li>
                                                <li :style="{color:bank.conf.config.active?'green':'red'}" >{{bank.conf.config.active?'ACTIVE':'NOT ACTIVE'}}</li>
                                                
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



</template>

<script>
    export default {
        data() {
            return {
          
            banks:[]


            }
        },

        mounted() {
       
             this.$rest.api('getAllParsers')
             .then((res)=>{
                 
                 this.banks = res.data.parsers
                 
                 
             })


        },
        methods:{
            
            time(date){
                let x = date.split('T');
                x = `${x[0]} in ${x[1].slice(0,8)}`
                return x;
                
            }
            
            
            
        }


    }


</script>


<style scoped>
    
    li img{
        width:100px;
        height:100px;
        
        
        
    }
    li ul,li ul li {
        width:100%;
    }
    li {
        list-style-type:none;
        font-weight:bold;
    }
    li span {
        font-size:15px;
    }
    .col-lg-6, .col-sm-12, .col-xs-12{
        width:100%;
    }
    
    .row{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
    }
    .flexx{
        width:40%;
    }
    @media screen and (max-width:700px){
        
        .flexx{
            width:100%;
        }
        
        
    }
    
    
    
    
    
    
    
    
</style>



