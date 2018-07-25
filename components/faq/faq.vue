<template>
  <div class="row">
    <div class="col-md-12">
            <input type="text" v-model='filter.search'/>{{$t('search')}}
      <select>
        <option v-for="lang in langs" @click="filter.lang = lang.lang" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>
      </select>
      <select>
        <option v-for="group in groups" @click="filter.group = group.groupName" :key="group.id">{{group.groupName}}</option>
      </select>
      <button @click="getFaq">{{$t('send')}}</button>
      <div class="white-box" v-for="faq in faqs" :key="faq._id">
        <h3 class="box-title">{{faq.title}}</h3>
        <input type="text" v-model="faq.title" v-if="!faq.active"/>
        <br/>
        <div v-html="faq.content"></div>
        <br/>
        <vue-editor v-model='faq.content' v-if="!faq.active" />
        <br/>
        <nuxt-link :to="faq._id.toString()"><button>{{$t('edit')}}</button></nuxt-link>
        <button @click="save(faq._id)">{{$t('delete')}}</button>
        
      </div>
      <button @click='createNew'>{{$t('create')}}</button>
               <pagination
          :currentPage="current_page"
          :totalPages="total_page"
          @page-changed="getFaq"
         />
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        link: '',
        id: '',
        current_page: 1,
        total_page: 1,
        faqs: [],
        filter: { search: '', group: '', lang: '' },
        langs: [],
        groups: [],


      }
    },
    methods: {
      save(id) {
        this.$root.$emit('loading', true);
        this.$rest.api('deleteFaq', { id })
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                title: 'OK',
                text: 'faq successful edited'
              })
              this.faqs.forEach((el, i) => {
                el[i]._id = id ? this.rules.splice(i, 1) : '';
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
        console.log(obj);
        this.$rest.api('getFaqFull', obj)
          .then(res => {
            console.log(res)
            res.data.faq.forEach(el => {
              el.active = true;
            })
            this.faqs = res.data.faq;
          })
        this.$rest.api('getAllLang')
          .then(res => {
            this.langs = res.data.lang;
          })
        this.$rest.api('getFaqGroup')
          .then(res => {
            this.groups = res.data.faqGroups;

          })
      }
    },
    mounted() {
      return this.getFaq()

    }
  }
</script>
