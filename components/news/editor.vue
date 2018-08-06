<template>

                <div class="new-main border">
                
                    <h5 class="title">Добавление новости</h5>
                
                    <div class="new-main--name border-shadow">
                        <input type="text" placeholder="Введите заголовок">
                
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
                
                    <div class="new-main--viz"></div>
                
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
                
                            <div>
                
                                <button class="btn btn-simple btn-simple--img">загрузить</button>
                
                            </div>
                
                        </div>
                
                        <div class="new-main-selects--date">
                            <p>Дата публикации</p>
                
                            <div class="border-shadow">
                
                                <i class="fal fa-calendar-check"></i>
                
                                <p class="new-main-selects--date__">16 Марта 2019</p>
                
                                <span class="ar icon-drop-down"></span>
                
                            </div>
                
                
                        </div>
                
                        <div class="new-main-selects--lang">
                            <p>Выбери язык</p>
                
                            <div class="border-shadow">
                
                                <span class="icon-earth"></span>
                
                                <div class="languages">
                
                                    <select>
                                        <option><a href="/">Русский</a></option>
                                        <option><a href="/">Eng</a></option>
                                        <option><a href="/">Chukchi</a></option>
                                    </select>
                
                                </div>
                
                                <span class="ar icon-drop-down"></span>
                
                            </div>
                        </div>
                    </div>
                
                    <div class="faq-main--group-btn">
                        <button class="btn btn-simple del">Назад</button>
                
                        <div class="faq-main--group-btn__">
                            <button class="btn btn-blue">Опубликовать</button>
                        </div>
                    </div>
                
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
