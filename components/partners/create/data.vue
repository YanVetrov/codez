<template>


    <div class="list-contact-sidebar">
        <img-uploader
                type="contacts"
                :width="100"
                :height="100"
                :show="show"
                @change-imageBase64="imgDataUrl=$event"
                @change-imageId="partner.imageId=$event"
                @close="show=false"
        />

        <div class="sidebar-width border list-contact-sidebar--new-block">

            <h5 class="title">Добавить партнера</h5>

            <div class="list-contact-sidebar--upload">

                <div class="list-contact-sidebar--upload-wr">

                    <div class="list-contact-sidebar--upload__input" @click.self="show = true">

                        <img v-if="imgDataUrl && imgDataUrl !==''" :src="imgDataUrl" alt="">

                    </div>

                    <div class="list-contact-sidebar--upload__info">
                        <p class="color blue">Загрузить изображение</p>
                        <span>Логотип партнера 250x80 пикселей</span>
                    </div>

                </div>

            </div>

            <div class="list-contact-sidebar--data__list--wr">

                <ul class="list-contact-sidebar--block__list">

                    <li>

                        <label>

                            <p>Имя партнера</p>

                            <div>
                                <input type="text" placeholder="Введите партнера" v-model='partner.title'>
                                <p class="num">1</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label>

                            <p>Ссылка партнера</p>

                            <div>
                                <input type="text" placeholder="Введите ссылку" v-model='partner.value'>
                                <p class="num">2</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label>

                            <p>Краткое описание</p>

                            <div>
                                <input type="text" placeholder="Введите описание" v-model='partner.link'>
                                <p class="num">3</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label class="contact__">

                            <p>Приоритет партнёра</p>

                            <div>
                                <select v-model='partner.size'>
                                    <option value="3">25 %</option>
                                    <option value="6">50 %</option>
                                    <option value="9">75 %</option>
                                    <option value="12">100 %</option>
                                </select>
                                <p class="num">4</p>

                                <i class="fal fa-sort-down"></i>

                            </div>

                        </label>

                    </li>

                    <li class="list-contact-sidebar--block__list--info">
                               
            
                                        <i class="icon-priority"></i>
                
                                        <i class="icon-reputation"></i>
            <p>
                           Приоритет определяет позицию партнера в списке и блоке
Наши партнеры</p>
                    </li>

                    <li class="text-center">
                        <button class="btn btn-blue" @click='$emit("oncreate",partner)'>Добавить партнера</button>
                    </li>


                </ul>

            </div>

        </div>

    </div>


</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                show: false,
                imgDataUrl: '',
                partner: {
                    title: '',
                    link: '',
                    imageId: '',
                    size: 6,
                    value: ''
                }
            }
        },
    }
</script>
