<template>

                <div class="new-main border">
                
                    <h5 class="title">Добавление новости</h5>
                    <div class="new-main--name border-shadow">
                        
                        <input type="text" placeholder="Введите заголовок" v-model="news.title">
                
                        <div class="new-main--name__select">
                
                            <select>
                                <option>Категория новости1</option>
                                <option>Категория новости2</option>
                                <option>Категория новости3</option>
                                <option>Категория новости4</option>
                            </select>
                
                            <span class="ar icon-drop-down"></span>
                
                        </div>
                
                    </div>
                
                    <div class="new-main--viz">
                        <vue-editor v-model='news.content'></vue-editor>
                    </div>
                
                    <div class="new-main-selects">
                        <div class="new-main-selects--categ">
                            <p>Автор</p>
                
                            <div class="border-shadow">
                
                                <i class="fal fa-user"></i>
                
                                <input type="text" placeholder="Введите имя автора">
                
                            </div>
                
                        </div>
                
                        <div class="new-main-selects--avat">
                            <p>Аватарка</p>
                            <imageUploader :show="show" type="contacts" :height="100" :width="100" @close="show=false" @change-imageId="news.imageid=$event"/>
                            <div>
                
                                <button class="btn btn-simple btn-simple--img" @click="show=!show">загрузить</button>
                
                            </div>
                
                        </div>
                
                        <div class="new-main-selects--date">
                            <p>Дата публикации</p>
                
                            <div class="border-shadow">
                
                                <i class="fal fa-calendar-check"></i>
                
                                <p class="new-main-selects--date__">{{$moment(news.createdAt).format('DD.MM.YY в HH:mm')||Date.now}}</p>
                
                                <span class="ar icon-drop-down"></span>
                
                            </div>
                
                
                        </div>
                
                        <div class="new-main-selects--lang">
                            <p>Выбери язык</p>
                
                            <div class="border-shadow">
                
                                <span class="icon-earth"></span>
                
                                <div class="languages">
                
                                    <select v-model="news.lang">
                                        <option v-for="lang in langs" :key="lang.name"><a>{{lang.lang}}-{{lang.name}}</a></option>
                                    </select>
                
                                </div>
                
                                <span class="ar icon-drop-down"></span>
                
                            </div>
                        </div>
                    </div>
                
                    <div class="faq-main--group-btn">
                        <button class="btn btn-simple del">Назад</button>
                
                        <div class="faq-main--group-btn__">
                            <button class="btn btn-blue" @click="$emit('publish', news)">Опубликовать</button>
                        </div>
                    </div>
                
                </div>
              



</template>

<script>
    import buttons from './buttons'
    import imageUploader from '~/components/_utils/imageUploader'
    export default {
        components:{buttons,imageUploader},
        props: ['langs','data'],
        data(){
            return{
                news:this.data,
                show:false
            }
        },
        mounted(){
          setTimeout(()=>{this.news = this.data},500)  
        },
        beforeMount(){
            this.news={}
        }
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
