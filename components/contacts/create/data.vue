<template>


    <div class="list-contact-sidebar">
        <img-uploader
                type="contacts"
                :width="100"
                :height="100"
                :show="show"
                @change-imageBase64="changeImageBase64"
                @change-imageId="changeImageId"
        />

        <div class="sidebar-width border list-contact-sidebar--new-block">

            <h5 class="title">Новый контакт</h5>

            <div class="list-contact-sidebar--upload">

                <div class="list-contact-sidebar--upload-wr">

                    <div class="list-contact-sidebar--upload__input" @click="show = !show">

                        <img v-if="imgDataUrl && imgDataUrl !==''" :src="imgDataUrl" alt="">

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
                                <input type="text" placeholder="Введите контакт" v-model='admin.name'>
                                <p class="num">1</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label>

                            <p>Контактые данны</p>

                            <div>
                                <input type="text" placeholder="Введите текст" v-model='admin.value'>
                                <p class="num">2</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label>

                            <p>Ссылка</p>

                            <div>
                                <input type="text" placeholder="Введитее ссылку" v-model='admin.link'>
                                <p class="num">3</p>
                            </div>

                        </label>

                    </li>

                    <li>

                        <label class="contact__">

                            <p>Размер блока (из 100%)</p>

                            <div>
                                <select v-model='admin.size'>
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
                                <span>
            
                                    <i class="fal fa-i-cursor"></i>
            
                                    <i class="fal fa-mouse-pointer"></i>
            
                                </span>
                        <p>Для того чтобы отредактировать
                            контак, просто нажмите на текст
                            который нужно измеить </p>
                    </li>

                    <li class="text-center">
                        <button class="btn btn-blue" @click='$emit("oncreate",admin)'>Добавить контакты</button>
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
                admin: {
                    name: '',
                    link: '',
                    imageId: '',
                    size: 6,
                    value: ''
                }
            }
        },

        methods: {
            changeImageBase64(v) {
                this.imgDataUrl = v;
            },
            changeImageId(v) {
                this.admin.imageId = v;
                this.show = false;
            }
        }
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height: auto;
    }
</style>
