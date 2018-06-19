<template>
  <div class="row">
    <div class="col-md-12">
     <div class='white-box'>
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title"/>
        <br/>
                                        <select v-model="faq.group">
                                    <option v-for='group in groups' :key='group.id'>{{group.groupName}}</option>
                                    <option @click='show=true'>Create new group</option>
                                </select><br/>
                                <input type="text" v-model="faq.group" v-if="show" @blur="show=false"/><br/>
                                      <select>
        <option v-for="lang in langs" @click="faq.lang = lang.lang" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>
      </select><br/>
                                
        <div v-html="faq.content"></div>
        <br/>
        <vue-editor v-model='faq.content'></vue-editor>
        <br/>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="save(faq.content,faq.title,faq.group,faq._id)">SAVE</button>
        <button class='btn btn-info btn-outline btn-rectangle btn-s m-r-14' @click="faq.content=''">CLEAR</button>
        <button class='btn btn-danger btn-outline btn-rectangle btn-s m-r-14' @click="save('delete','delete','delete',faq._id)">DELETE</button>
        
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
        show: false,
        faq: {
          title: 'Title',
          content: 'text',
          group: ''
        },
        groups: [],
        langs: [],


      }
    },
    methods: {
      save(content, title, group, id) {

        console.log(`${content} ${title} ${group}`)
        let link = 'editFaq';
        let obj = { content, title, group, id };
        content == 'delete'?link='deleteFaq':'';
        this.$root.$emit('loading', true);
        this.$rest.api(link, obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'successful'
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
      this.$rest.api('getFaqGroup')
        .then(res => {
          console.log(res);
          this.groups = res.data.faqGroups

        })
      let id = this.$route.params.id
      this.$rest.api('getOneFaq', { id })
        .then(res => {
          this.faq = res.data
        })
      this.$rest.api('getAllLang')
        .then(res => {
          this.langs = res.data.lang;
        })
    }

  }
</script>
