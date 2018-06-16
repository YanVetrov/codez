<template>
  <div class="row">
    <div class="col-md-12">
      <div class="white-box" v-for="rule in rules" :key="rule._id">
        <h3 class="box-title">{{rule.title}}</h3>
        <input type="text" v-model="rule.title" v-if="!rule.active"/>
        <br/>
        {{rule.content}}
        <br/>
        <textarea v-model='rule.content' v-if="!rule.active" />
        <br/>
        <button @click="rule.active = !rule.active">{{rule.active?"Edit":"Close"}}</button>
        <button @click="save(rule.content,rule.title,rule._id)">Save</button>
        <button @click="save('delete','delete',rule._id)">Delete</button>
        
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
        sortNumber=1,
        obj = { content, title, id, sortNumber };
        id == 'new' ? link = 'createRules' : link = 'editRule';
        content == 'delete'?link='deleteRule':'';
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
      createNew() {
        let obj = { title: "Title", text: "Text", id: 'new', active: true }
        this.rules.push(obj);
      }
    }
  }
</script>
