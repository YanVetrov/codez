<template>
  <div class="row">
    <div class="col-md-12">
      <input type="text" v-model='id'/>id
      <input type="text" v-model='link'/>{{$t('link')}}
      <button @click="getRule">{{$t('send')}}</button>
      <div class="white-box" v-for="rule in rules" :key="rule._id">
        <h3 class="box-title">{{rule.title}}</h3>
        <input type="text" v-model="rule.title" v-if="!rule.active"/>
        <nuxt-link :to="rule._id.toString()"><button>{{$t('edit')}}</button></nuxt-link>
        <button @click="save(rule._id)">{{$t('delete')}}</button>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        id: '',
        rules: [],

      }
    },
    methods: {
      save(id) {
        this.$root.$emit('loading', true);
        this.$rest.api('deleteRule', { id })
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'Rule successful deleted'
              })
              this.rules.forEach((el,i)=>{
                el[i]._id = id?this.rules.splice(i,1):'';
              })
            }
            if (!res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'error',
                title: 'Error ...',
                text: res.error.message,
              })
            }
            this.$root.$emit('loading', false);
          })
          .catch(err => {
            this.$root.$emit('loading', false);
          })


      },
      getRule() {
        this.$root.$emit('loading', true);
        let obj = { id: this.id, link: this.link }
        this.$rest.api('getTitleRules')
          .then(res => {
            console.log(res)
            res.data.rules.forEach(el => {
              el.active = true;
            })
            this.rules = res.data.rules
            this.$root.$emit('loading', false);
          })
      }
    },
    mounted() {
      return this.getRule()
    }
  }
</script>
