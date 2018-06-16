<template>
  <div class="row">
    <div class="col-md-12">
      
      <div class="white-box" v-for="faq in faqs" :key="faq.id">
        <h3 class="box-question">{{faq.question}}</h3>
        
        <input type="answer" v-model="faq.question" v-if="!faq.active"/>
        <br/>
        
        {{faq.answer}}
        <br/>
        
        <textarea v-model='faq.answer' v-if="!faq.active" />
        <br/>
        
        <button @click="faq.active = !faq.active">{{faq.active?"Edit":"Close"}}</button>
        
        
        <button @click="save(faq.answer,faq.question,faq.id)">Save</button>
        
      </div>
      <button @click='createNew'>Create</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {


        faqs: [{
            question: 'question',
            answer: 'efwtwetwerwetew',
            id: 23423234,
            active: true,
          },
          {
            question: 'question',
            answer: 'efwtwetwerwetew3523423',
            id: 234232434,
            active: true,
          },
          {
            question: 'question',
            answer: 'efwtwet23423werwetew',
            id: 2344234,
            active: true,
          },
        ],

      }
    },
    methods: {
      save(answer, question, id) {

        console.log(`${answer} ${question} ${id}`)
        this.$root.$emit('loading',true);
        this.$rest.api('faqEdit', { answer, question, id })
          .then(res => {
            if (res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'info',
                question: 'OK',
                answer: 'Faq successful edited'
              })
            }
            if (!res.success) {
              this.$notify({
                group: 'main',
                duration: 5000,
                type: 'error',
                question: 'Error ...',
                answer: res.error.message,
              })
            }
            this.$root.$emit('loading',false);
          })
          .catch(err=>{
            this.$root.$emit('loading',false);
          })


      },
      createNew(){
        let obj = {question:"question",answer:"answer",id:'new',active:true}
        this.rules.push(obj);
      }
    }
  }
</script>
