<template>
  <div class="row">
    <div class="col-md-12">
     <div class='white-box'>
       {{$t('hello')}}
        <h3 class="box-title">{{rule.title}}</h3>
        <input type="text" v-model="rule.title"/>
        <br/>
        <div v-html="rule.content"></div>
        <br/>
        <vue-editor v-model='rule.content'></vue-editor>
        <br/>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="save(rule.content,rule.title,rule._id,rule.sortNumber)">{{$t('save')}}</button>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="rule.content=''">{{$t('clear')}}</button>
        <button class='btn btn-danger btn-outline btn-rectangle btn-s m-r-14' @click="save('delete','delete',rule._id,rule.sortNumber)">{{$t('delete')}}</button>
        
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
        rule: {},


      }
    },
    methods: {
      save(content, title, id, sortNumber) {
         let obj = { content, title, id, sortNumber };
         let link = 'editRule';
         content=='delete'?link='deleteRule':'';
        this.$root.$emit('loading', true);
        this.$rest.api(link, obj)
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
            this.$root.$emit('loading', false);
          })
          .catch(err => {
            this.$root.$emit('loading', false);
          })


      },
    },

    mounted() {
      let id = this.$route.params.id
      this.$root.$emit('loading', true)
      this.$rest.api('getRule', { id })
        .then(res => {
          this.rule = res.data.rule
          this.$root.$emit('loading', false)
        })

    }

  }
</script>
