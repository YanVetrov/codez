<template>
  <div class="row">
    <div class="col-md-12">
     <div class='white-box'>
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title"/>
        <br/>
                                        <select v-model="faq.group">
                                    <option v-for='group in groups' :key='group.id'>{{group.groupName}}</option>
                                    <option @click='show=true'>{{$t('create group')}}</option>
                                </select>
                                <br/>
                                <input type="text" v-model="faq.group" v-if="show" @blur="show=false"/>{{faq.group=='Create new group'?'':faq.group}}<br/>
                                                                      <select>
        <option v-for="lang in langs" @click="faq.lang = lang.lang" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>
      </select><br/>
                                
        <div v-html="faq.content"></div>
        <br/>
        <vue-editor v-model='faq.content'></vue-editor>
        <br/>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="save(faq.content,faq.title,faq.group,faq._id)">{{$t('save')}}</button>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="faq.content=''">{{$t('clear')}}</button>
        
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
        show:false,
        faq: {
            title: 'Title',
            content: 'text',
            group:''
          },
          groups:[],
          langs:[]
        

      }
    },
    methods: {
      save(content, title, group) {

        console.log(`${content} ${title} ${group}`)
        
        let obj = { content, title, group };
        this.$root.$emit('loading', true);
        this.$rest.api('createFaq', obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'Faq successful created'
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
    
    mounted(){
      this.$rest.api('getFaqGroup')
      .then(res=>{
        console.log(res);
        this.groups = res.data.faqGroups
        
      })
        this.$rest.api('getAllLang')
        .then(res => {
          this.langs = res.data.lang;
        })
    }

  }
</script>
