<template>
  <div class="row">
    <div class="col-md-12">
            <input type="text" v-model='id'/>id
      <input type="text" v-model='link'/>link
      <button @click="getFaq">send</button>
      <div class="white-box" v-for="faq in faqs" :key="faq._id">
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title" v-if="!faq.active"/>
        <br/>
        {{faq.content}}
        <br/>
        <textarea v-model='faq.content' v-if="!faq.active" />
        <br/>
        <button @click="faq.active = !faq.active">{{faq.active?"Edit":"Close"}}</button>
        <button @click="save(faq.content,faq.title,faq._id)">Save</button>
        <button @click="save('delete','delete',faq._id)">Delete</button>
        
      </div>
      <button @click='createNew'>Create</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link:'',
        id:'',
        faqs: [{
            title: 'Title',
            content: 'efwtwetwerwetew',
            _id: 23423234,
            active: true,
          },
          {
            title: 'Title',
            content: 'efwtwetwerwetew3523423',
            _id: 234232434,
            active: true,
          },
          {
            title: 'Title',
            content: 'efwtwet23423werwetew',
            _id: 2344234,
            active: true,
          },
        ],

      }
    },
    methods: {
      save(content, title, id) {

        console.log(`${content} ${title} ${id}`)
        let link,
          sortNumber = 1,
          obj = { content, title, id, sortNumber };
        id == 'new' ? link = 'createFaq' : link = 'editFaq';
        content == 'delete' ? link = 'deleteFaq' : '';
        this.$root.$emit('loading', true);
        this.$rest.api(link, obj)
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'faq successful edited'
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
      createNew() {
        let obj = { title: "Title", content: "Text", _id: 'new', active: true }
        this.faqs.push(obj);
      },
      getFaq(){
        let obj = {id:this.id,link:this.link}
        this.$rest.api('getFaq')
        .then(res=>{
          res.data.rule.forEach(el=>{
            el.active=true;
          })
          this.faqs = res.data.faq
        })
      }
    }
  }
</script>
