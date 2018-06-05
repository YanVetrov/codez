<template>
  <div class="row">
    <input type="text" name="heh" v-model="filter"/>
                    <div class="col-sm-6" v-for="tra in filterBy(transactions,filter)" :key="tra._id">
                        <div class="white-box">
                          <span class='text-muted'><i class='ti-time'></i> {{tra.date}}</span>
                            
                            <h4 class="box-title">OUT</h4>
                            <h3 class="box-title"><img class="img-circle" :src="tra.inner.logo" />{{tra.outter.bank}}</h3>
                            
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
                                            <td>{{tra.outter.sum}}</td>
                                            <td>{{tra.outter.back}}</td>
                                            <td>{{tra.outter.currency}}</td>
                                            <td>{{tra.outter.total}}</td>
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
        filter: 'ALFA',

        transactions: [{
            date: '24.06.2018 17:00:34',
            id: '234235235235',
            inner: {
              bank: 'ALFA-BANK',
              logo: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
              sum: '253.435 USD',
              back: '2.3%',
              currency: '1',
              total: '400.3 USD'
            },
            outter: {
              bank: 'SBERBANK',
              logo: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/privat24.png',
              sum: '23.435 RUB',
              back: '1.3%',
              currency: '1',
              total: '340.3 RUB'
            }

          },
          {
            date: '24.06.2018 17:00:34',
            id: '234235235235',
            inner: {
              bank: 'ALFA-BANK',
              logo: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
              sum: '253.435 USD',
              back: '2.3%',
              currency: '1',
              total: '400.3 USD'
            },
            outter: {
              bank: 'SBERBANK',
              logo: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/privat24.png',
              sum: '23.435 RUB',
              back: '1.3%',
              currency: '1',
              total: '340.3 RUB'
            }

          }




        ]


      }
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
