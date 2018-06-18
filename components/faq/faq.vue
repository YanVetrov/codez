<template>
  <div class="row">
    <div class="col-md-12">
            <input type="text" v-model='filter.search'/>search
      <select>
        <option v-for="lang in langs" @click="filter.lang = lang.lang" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>
      </select>
      <select>
        <option v-for="group in groups" @click="filter.group = group.groupName" :key="group.id">{{group.groupName}}</option>
      </select>
      <button @click="getFaq">send</button>
      <div class="white-box" v-for="faq in faqs" :key="faq._id">
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title" v-if="!faq.active"/>
        <br/>
        <div v-html="faq.content"></div>
        <br/>
        <vue-editor v-model='faq.content' v-if="!faq.active" />
        <br/>
        <button @click="faq.active = !faq.active">{{faq.active?"Edit":"Close"}}</button>
        <button @click="save(faq.content,faq.title,faq._id)">Save</button>
        <button @click="save('delete','delete',faq._id)">Delete</button>
        
      </div>
      <button @click='createNew'>Create</button>
               <paging
          :currentPage="current_page"
          :totalPages="total_page"
          @page-changed="getFaq"
         />
    </div>
  </div>
</template>

<script>
  import paging from '~/components/pagination';

  export default {
    components: {
      paging
    },
    data() {
      return {
        link: '',
        id: '',
        current_page: 1,
        total_page: 1,
        faqs: [],
        filter: {        search:'',group:'',lang:''},
        langs: [],
        groups:[],


      }
    },
    methods: {
      save(content, title, id) {

        console.log(`${content} ${title} ${id}`)
        let link,
          sortNumber = 1,
          group = 'main',
          obj = { group, content, title, id, sortNumber };
        id == 'new' ? link = 'createFaq' : link = 'editFaq';
        content == 'delete' ? link = 'deleteFaq' : '';
        this.$root.$emit('loading', true);
        console.log(obj);
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
      getFaq(page) {
        let obj = this.filter
        obj.page = page || 1;
        obj.limit = 10;
        this.$rest.api('getFaqFull', obj )
          .then(res => {
            console.log(res)
            res.data.faq.forEach(el => {
              el.active = true;
            })
            this.faqs = res.data.faq
          })
        this.$rest.api('getAllLang')
          .then(res => {
            this.langs = res.data.lang
          })
        this.$rest.api('getFaqGroup')
          .then(res => {
            console.log(res);
            this.groups = res.data.faqGroups

          })
      }
    },
    mounted() {
      return this.getFaq()

    }
  }
</script>
