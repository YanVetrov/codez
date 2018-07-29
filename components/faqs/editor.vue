<template>

<div class="faq-main border">
    <h5 class="title">{{faqs.title}}</h5>

    <div class="faq-main--name border-shadow">
        <input type="text" v-model='faq.title' placeholder="Заголовок вопрос">
    </div>
    <div v-html='faqs.content' ></div>
    <div class="faq-main--viz">
        <vue-editor v-model='faq.content'></vue-editor>
    </div>

    <div class="faq-main-selects">
        <div class="faq-main-selects--categ">
            <p>Выбири категорию</p>

            <div class="faq-main-selects--categ-item">

                <div class="border-shadow">
                    <select v-model='faqs.group'>
                        <option v-for='group in groups' :key='group.id'>{{group.groupName}}</option>
                    </select>

                    <span class="icon-drop-down"></span>
                </div>

                <button><i class="fal fa-plus-circle"></i> Создать категорию</button>

            </div>

        </div>

        <div class="faq-main-selects--lang">
            <p>Выбери язык</p>

            <div class="border-shadow">

                <span class="icon-earth"></span>

                <div class="languages">

                    <select v-model="faqs.lang">
                        <option v-for="lang in langs" :key="lang.id">{{lang.name}} - {{lang.lang}}</option>
                    </select>

                </div>

                <span class="ar icon-drop-down"></span>

            </div>
        </div>
    </div>

    <buttons @publish="$emit('publish',faqs)" @delete='$emit("delete",faqs.id)' :canDelete='faq.canDelete' />

</div>
              



</template>

<script>
    import buttons from './buttons'
    export default {
        components:{buttons},
        props: ['groups','langs','faq'],
        data(){
            return{
                faqs:this.faq
            }
        }
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
