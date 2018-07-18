<template>


            
                          <div class="list-contact-sidebar">
            
                <div class="sidebar-width border list-contact-sidebar--new-block">
            
                    <h5 class="title">Новый контакт</h5>
            
                    <div class="list-contact-sidebar--upload">
            
                        <div class="list-contact-sidebar--upload-wr">
            
                            <div class="list-contact-sidebar--upload__input">
            
                                <img src="~/assets/img/sadness-face.svg" alt="">
            
                            </div>
            
                            <div class="list-contact-sidebar--upload__info">
                                <p class="color blue">Загрузить Изображение</p>
                                <span>логотип соц.сети или иконку</span>
                            </div>
            
                        </div>
            
                    </div>
            
                    <div class="list-contact-sidebar--data__list--wr">
            
                        <ul class="list-contact-sidebar--block__list">
            
                            <li>
            
                                <label>
            
                                    <p>Обозначте контакт</p>
            
                                    <div>
                                        <input type="text" placeholder="Введите контакт">
                                        <p class="num">1</p>
                                    </div>
            
                                </label>
            
                            </li>
            
                            <li>
            
                                <label>
            
                                    <p>Контактые данны</p>
            
                                    <div>
                                        <input type="text" placeholder="Введите текст">
                                        <p class="num">2</p>
                                    </div>
            
                                </label>
            
                            </li>
            
                            <li>
            
                                <label>
            
                                    <p>Ссылка</p>
            
                                    <div>
                                        <input type="text" placeholder="Введитее ссылку">
                                        <p class="num">3</p>
                                    </div>
            
                                </label>
            
                            </li>
            
                            <li>
            
                                <label class="contact__">
            
                                    <p>Размер контакта</p>
            
                                    <div>
                                        <!--<input type="text" placeholder="Введите контакт">-->
                                        <select>
                                            <option>25 %</option>
                                            <option>50 %</option>
                                            <option>75 %</option>
                                            <option>100 %</option>
                                        </select>
                                        <p class="num">4</p>
            
                                        <i class="fal fa-sort-down"></i>
            
            
                                        <!-- <ul>
                                             <li>
                                                 <button class="blue">+</button>
                                             </li>
                                             <li>
                                                 <button>-</button>
                                             </li>
                                         </ul>-->
                                    </div>
            
                                </label>
            
                            </li>
            
                            <li class="list-contact-sidebar--block__list--info">
                                <span>
            
                                    <i class="fal fa-i-cursor"></i>
            
                                    <i class="fal fa-mouse-pointer"></i>
            
                                </span>
                                <p>Для того чтобы отредактировать
                                    контак, просто нажмите на текст
                                    который нужно измеить </p>
                            </li>
            
                            <li class="text-center">
                                <button class="btn btn-blue">Добавить контакты</button>
                            </li>
            
            
                        </ul>
            
                    </div>
            
                </div>
            
            </div>
            
              



</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
