<template>

<div class="faq-main border">
    <h5 class="title">Создание правила</h5>

    <div class="faq-main--name border-shadow">
        <input type="text" v-model='rule.title' placeholder="Заголовок вопрос">
    </div>
    <div v-html='rule.content' ></div>
    <div class="faq-main--viz">
        <vue-editor v-model='rule.content'></vue-editor>
    </div>

    <div class="faq-main-selects">
        <div class="faq-main-selects--categ">
            <p>Выбири категорию</p>

            <div class="faq-main-selects--categ-item">


            </div>

        </div>

        <div class="faq-main-selects--lang">
            <p>Выбери язык</p>

            <div class="border-shadow">

                <span class="icon-earth"></span>

                <div class="languages">

                    <!--<select v-model="faqs.lang">-->
                    <!--    <option v-for="lang in langs" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>-->
                    <!--</select>-->

                </div>

                <span class="ar icon-drop-down"></span>

            </div>
        </div>
    </div>

    <buttons @publish="$emit('publish',rule)" @delete='$emit("delete",rule._id)' :canDelete='rule.canDelete' />

</div>
              



</template>

<script>
    import buttons from './buttons'
    export default {
        components: { buttons },
        props: ['langs', 'rules'],
        data() {
            return {
                rule: this.rules
            }
        },
        watch:{
            rules(){
                this.rule = this.rules
            }
        }
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height: auto;
    }
</style>
