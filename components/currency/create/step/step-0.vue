<template>
    <div class="create-currency-sidebar">

        <h4 class="create-currency-sidebar--title text-center">Логотип системы</h4>

        <div class="create-currency-sidebar__bot" style="    text-align: center;">


            <div>
                <p>Логотип валюты должно быть не меньше чем <b>100 x 100 px</b> и иметь формат: <b>PNG,JPG,JPEG</b></p>
            </div>
        </div>

        <ul class="create-currency-sidebar--tools">
            <li>
                <button class="btn" @click="upload=!upload" ><i class="fal fa-cloud-upload"></i> Загрузить лого</button>
                <imageUploader 
                :show="upload"                
                type="currencies"
                :width="100"
                :height="100"
                 />
            </li>
            <!--  <li>
                  <button class="btn"><i class="fal fa-times-circle"></i> Удалить</button>
              </li>-->
        </ul>

        <h4 class="create-currency-sidebar--title text-center">Основные данные</h4>

        <div class="create-currency-sidebar__main">

            <div class="create-currency-sidebar__item">

                <span><i class="fal fa-file-signature" style="color: #4584f6;"></i></span>

                <div class="create-currency-sidebar__item--info">
                    <span>Платежная система</span>
                    <input placeholder="Paypal" v-model="$parent.name"/>
                </div>

            </div>

            <div class="create-currency-sidebar__item">

                <span><i class="fal fa-usd-circle" style="font-size: 24px;    color: #4584f6;"></i></span>

                <div class="create-currency-sidebar__item--info">
                    <span>Тип валюты</span>
                    <input placeholder="USD" v-model="$parent.type"/>

                </div>

            </div>

            <div class="create-currency-sidebar__item">

                <span><i class="fal fa-code" style="color: #4584f6;"></i></span>

                <div class="create-currency-sidebar__item--info">
                    <span>XML валюты</span>

                    <p>

                        <select v-model="$parent.xml">
                            <option>Выбрать</option>
                            <option>Выбрать 1</option>
                            <option>Выбрать 2</option>
                        </select>

                        <i class="fal fa-sort-down"></i>
                    </p>

                </div>

            </div>

        </div>

        <div class="create-currency-sidebar__bot">

            <i class="fal fa-comment-alt-exclamation"></i>

            <div>
                <p>XML обозначение согласно стандарту</p>
                <span><a href="http://estandards.info/formirovanie-eksportnogo-fajla-s-kursami/" target="_blank">estandards.info</a></span>
            </div>
        </div>

        <div class="create-currency-sidebar__next">
            <button class="btn btn-blue" @click="$emit('next')" v-if="step === 0">продолжить далее</button>
        </div>


    </div>

</template>

<script>
    import imageUploader from '~/components/_utils/imageUploader'
    export default {
        components:{imageUploader},
        props: {
            step: {type: Number, required: true},
        },
        data() {
            return {
                upload:false,
            }
        }
    }
</script>
