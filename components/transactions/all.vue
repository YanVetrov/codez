<template>
  <div class="row">
      ID
    <input type="text" placeholder="example: 412423423523" name="heh" v-model="filter"/>
        Start date
    <input type="date" placeholder="dd/mm/yy" name="startDate" v-model="startDate" />
        End date
    <input type="date" placeholder="dd/mm/yy" name="endDate" v-model="endDate"/>
        Currency 1
    <select v-model="currency1">
        <option>валюта 1</option>
    </select>
        Currency 2
    <select v-model="currency2">
        <option>валюта 2</option>
    </select>
    <button class="fcbtn btn btn-info btn-1b" @click="sendFilter" style="margin:5px">accept</button>
                    <div class="col-sm-6" v-for="tra in transactions" :key="tra._id">
                        <div class="white-box">
                          <span class='text-muted'><i class='ti-time'></i> {{tra.date}}</span>
                            
                            <h4 class="box-title">OUT</h4>
                            <h3 class="box-title"><img class="img-circle" :src="tra.inner.logo" />{{tra.outer.bank}}</h3>
                            
                            <div class="table-responsive">
                                <table class="table color-table info-table">
                                    <thead>
                                        <tr>
                                            <th>Sum</th>
                                            <th>Backward</th>
                                            <th>Currency</th>
                                            <th>Total</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{tra.outer.sum}}</td>
                                            <td>{{tra.outer.back}}</td>
                                            <td>{{tra.outer.currency}}</td>
                                            <td>{{tra.outer.total}}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                             <h4 class="box-title">IN</h4>
                             <h3 class="box-title"><img class="img-circle" :src="tra.inner.logo" />{{tra.inner.bank}}</h3>
                            <div class="table-responsive">
                                <table class="table color-table success-table">
                                    <thead>
                                        <tr>
  
                                            <th>Sum</th>
                                            <th>Backward</th>
                                            <th>Currency</th>
                                            <th>Total</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{tra.inner.sum}}</td>
                                            <td>{{tra.inner.back}}</td>
                                            <td>{{tra.inner.currency}}</td>
                                            <td>{{tra.inner.total}}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <hr/>
                   <div class="row">
                    <div class="col-lg-6 col-sm-12" style="width:100%">
                        <div class="white-box">
                            <div class="button-box">
                                                              <button class="fcbtn btn btn-success btn-outline btn-1b">ok</button>
                                 <button class="fcbtn btn btn-info btn-outline btn-1b">not paid</button>
                                <button class="fcbtn btn btn-info btn-outline btn-1b">return</button>
                                <button class="fcbtn btn btn-danger btn-outline btn-2b">in trash</button>
                            </div>
                        </div>
                    </div>
                    </div>
                            <span class='text-muted'>TRANSACTION ID: {{tra.id}}</span>
                        </div>
                    </div>
                    
                    
                    

                    </div>
</template>

<script>
  export default {

    data() {
      return {
        filter: '',
        startDate:'',
        endDate:'',
        currency1:'',
        currency2:'',

        transactions: []


      }
    },
    methods:{
        
        sendFilter(){
            let obj = {
                currency1:this.currency1,
                currency2:this.currency2,
                startDate:this.startDate,
                endDate:this.endDate,
                id:this.filter
            }
            console.log(obj)
        }
        
        
    },
    mounted(){
        this.$root.$emit('loading',true);
        
        
        this.$rest.api('adminGetOrders')
        .then(res=>{
            this.transactions = res.data.transactions;



            this.$root.$emit('loading',false);

        })
        
    }

  }
</script>

<style scoped>
  .col-sm-6 {
    width: 100%;
  }

  h3 img {
    width: 35px;
    margin: 5px;
    height: 35px;
  }
  input {
    margin:15px;
    border:1px;
    border-radius:20px;
    padding:4px;
    color:grey;
  }
</style>
