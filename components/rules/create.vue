<template>
  <div class="row">
    <div class="col-md-12">
     <div class='white-box'>
        <h3 class="box-title">{{rule.title}}</h3>
        <input type="text" v-model="rule.title"/>
        <br/>
        <div v-html="rule.content"></div>
        <br/>
        <vue-editor v-model='rule.content'></vue-editor>
        <br/>
        <button @click="rule.active = !rule.active">{{rule.active?"Edit":"Close"}}</button>
        <button @click="save(rule.content,rule.title,rule._id)">Save</button>
        <button @click="rule.content=''">Clear</button>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link:'',
        id:'',
        rule: {
            title: 'Title',
            content: 'efwtwetwerwetew',
            _id: 23423234,
            active: true,
          },
        

      }
    },
    methods: {
      save(content, title, id) {

        console.log(`${content} ${title} ${id}`)
        let link,
        sortNumber=1,
        obj = { content, title, id, sortNumber };
        this.$root.$emit('loading', true);
        this.$rest.api('createRule', obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'Rule successful created'
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
    },

  }
</script>
