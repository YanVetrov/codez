<template>
  <div class="row">
    <div class="col-md-12">
     <div class='white-box'>
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title"/>
        <br/>
                                        <v-select :options="groups" label="groupName" placeholder="choose group"
                                          v-model="faq.group">
                                    <template slot="option" slot-scope="option">
                                        {{ option.groupName }}
                                    </template>
                                </v-select>
                                <input type="text" v-model="faq.group" v-if="show" @blur="show=false"/>new group <button @click="show=!show">{{show?'close':'Create new group'}}</button><br/>
        <div v-html="faq.content"></div>
        <br/>
        <vue-editor v-model='faq.content'></vue-editor>
        <br/>
        <button @click="save(faq.content,faq.title,faq.group)">Save</button>
        <button @click="faq.content=''">Clear</button>
        
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
          groups:[]
        

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
    }

  }
</script>
