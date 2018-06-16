<template>
  <div class="row">
    <div class="col-md-12">
      <div class="white-box">
       
                               <v-select :options="options" label="name" placeholder="Choose"
                                          v-model="currency1.name">
                                    <template slot="option" slot-scope="option">
                                        {{ option.name }}
                                    </template>
</v-select>

<span>Comission %</span><input type="text" v-model="currency1.percent" /><br/>
<span>Min. comission</span><input type="text" v-model="currency1.min_comission" /><br/>
<span>Min. exchange sum</span><input type="text" v-model="currency1.min_sum" /><br/>
<span>Max. exchange sum</span><input type="text" v-model="currency1.max_sum" /><br/>


<v-select :options="options" label="name" placeholder="Choose" v-model="currency2.name">
  <template slot="option" slot-scope="option">
                                        {{ option.name }}
                                    </template>
</v-select>

<span>Comission %</span><input type="text" v-model="currency2.percent" /><br/>
<span>Min. comission</span><input type="text" v-model="currency2.min_comission" /><br/>
<span>Min. exchange sum</span><input type="text" v-model="currency2.min_sum" /><br/>
<span>Max. exchange sum</span><input type="text" v-model="currency2.max_sum" /><br/>

<h3>Accept step information</h3>
<vue-editor v-model="acceptInfo"></vue-editor>
<h3>Pay step information</h3>
<vue-editor v-model="payInfo"></vue-editor>

<h1 :style="{color:parserEnabled?'green':'red'}"> Parser: {{parserEnabled?"ACTIVE":"NON ACTIVE"}}</h1>
<button @click="parserEnabled=!parserEnabled">Switch</button>

<h3>Guide for verification</h3>
<vue-editor v-model="verifInfo"></vue-editor>
<button @click="send">SEND</button>
</div>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          { img: '', name: 'keke' },
          { img: '', name: 'keke' },
          { img: '', name: 'keke' },
          { img: '', name: 'keke' },


        ],
        currency1: {},
        currency2: {},
        acceptInfo: '',
        payInfo: '',
        verifInfo:'',
        parserEnabled: false,
        
      }
    },

    methods: {

      send() {
        let obj = { currency1: this.currency1, currency2: this.currency2, acceptInfo: this.acceptInfo,verifInfo:this.verifInfo, payInfo: this.payInfo, parserEnabled: this.parserEnabled }
        console.log(obj);
        this.$rest.api('sendRoute', obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'Success route added',
                text: 'OK'
              })
            }
            if (!res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'error',
                title: 'Something wrong...',
                text: res.error.message
              })
            }
          })

      }


    },

    mounted() {

      this.$axios.get('https://proexchanger.net/service/api/v1/estandardsInfo')
        .then((res) => {
          this.options = res.data.data.res;

        })


    }



  }
</script>
