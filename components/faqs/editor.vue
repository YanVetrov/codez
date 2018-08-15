<template>

<div class="faq-main border">
    <h5 class="title">Создание Faq</h5>

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

                <div class="border-shadow" >
                    <select v-model='faqs.group' v-if="!newgroup">
                        <option v-for='group in groups' :key='group.id'>{{group.groupName}}</option>
                    </select>
                    <input v-model="newFaqGroup" v-else type='text' placeholder="Введите новую группу" />

                    <span class="icon-drop-down"></span>
                </div>

                <button @click="newgroup=!newgroup"><i v-if="!newgroup" class="fal fa-plus-circle"></i> {{newgroup?'Отмена':'Cоздать новую группу'}}</button>
                <button @click="pushGroup" v-if="newgroup"><i class="fal fa-plus-circle"></i> Добавить</button>

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
                faqs:this.faq,
                groupss:this.groups,
                newgroup:false,
                newFaqGroup:'',
            }
        },
        methods:{
            pushGroup(){
                this.faqs.group = this.newFaqGroup;
                this.groupss.push({groupName:this.newFaqGroup});
                this.newgroup=false;
            }
        }
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
