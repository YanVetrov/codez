<template>
  <div class="row">
    <div class="col-md-12">
      <div class="white-box" v-for="rule in rules" :key="rule.id">
        <h3 class="box-title">{{rule.title}}</h3>
        <input type="text" v-model="rule.title" v-if="!rule.active"/>
        <br/>
        {{rule.text}}
        <br/>
        <textarea v-model='rule.text' v-if="!rule.active" />
        <br/>
        <button @click="rule.active = !rule.active">{{rule.id?"Edit":"Close"}}</button>
        <button @click="save(rule.text,rule.title,rule.id)">Save</button>
        
      </div>
      <button @click='createNew'>Create</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {


        rules: [{
            title: 'Title',
            text: 'efwtwetwerwetew',
            id: 23423234,
            active: true,
          },
          {
            title: 'Title',
            text: 'efwtwetwerwetew3523423',
            id: 234232434,
            active: true,
          },
          {
            title: 'Title',
            text: 'efwtwet23423werwetew',
            id: 2344234,
            active: true,
          },
        ],

      }
    },
    methods: {
      save(text, title, id) {

        console.log(`${text} ${title} ${id}`)
        this.$root.$emit('loading',true);
        this.$rest.api('ruleEdit', { text, title, id })
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'Rule successful edited'
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
            this.$root.$emit('loading',false);
          })
          .catch(err=>{
            this.$root.$emit('loading',false);
          })


      },
      createNew(){
        let obj = {title:"Title",text:"Text",id:'new',active:true}
        this.rules.push(obj);
      }
    }
  }
</script>
