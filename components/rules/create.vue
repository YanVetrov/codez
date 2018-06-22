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
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="save(rule.content,rule.title)">{{$t('save')}}</button>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="rule.content=''">{{$t('clear')}}</button>
        
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
            content: '',
          },
        

      }
    },
    methods: {
      save(content, title) {

        console.log(`${content} ${title}`)
        let link,
        sortNumber=1,
        obj = { content, title, sortNumber };
        this.$root.$emit('loading', true);
        this.$rest.api('createRules', obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'success',
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
