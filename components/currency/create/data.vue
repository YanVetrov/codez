<template>
    <div class="create-currency">


        <div class="create-currency-head">

            <ul class="create-currency-head--list">
                <li>
                    <div class="create-currency-head--item">
                        <span :class="{complete:step>0,active:step ===0}">01</span>
                        <p>добавления валюты</p>
                    </div>
                </li>
                <li>
                    <div class="create-currency-head--item">
                        <span :class="{complete:step>1,active:step ===1}">02</span>
                        <p>Курс и резервы</p>
                    </div>
                </li>
                <li>
                    <div class="create-currency-head--item">
                        <span :class="{complete:step>2,active:step ===2}">03</span>
                        <p>настройка оплаты</p>
                    </div>
                </li>
                <li>
                    <div class="create-currency-head--item">
                        <span :class="{complete:step>3,active:step ===3}">04</span>
                        <p>прочие настройки</p>
                    </div>
                </li>
            </ul>

            <ul class="create-currency-head--switch">

                <li><a href="/"><i class="fal fa-angle-left"></i></a></li>
                <li><a href="/"><i class="fal fa-angle-right"></i></a></li>

            </ul>

        </div>

        <div class="create-currency-block">


            <div class="create-currency-sidebar">

                <h4 class="create-currency-sidebar--title text-center">Логотип системы</h4>

                <p><img src="img/bank.svg" alt="logo"></p>

                <ul class="create-currency-sidebar--tools">
                    <li>
                        <button class="btn"><i class="fal fa-cog"></i> Изменить</button>
                    </li>
                    <!--  <li>
                          <button class="btn"><i class="fal fa-times-circle"></i> Удалить</button>
                      </li>-->
                </ul>

                <h4 class="create-currency-sidebar--title text-center">Основные данные</h4>

                <div class="create-currency-sidebar__main">

                    <div class="create-currency-sidebar__item">

                        <span><img src="img/bank.svg" alt=""></span>

                        <div class="create-currency-sidebar__item--info">
                            <span>Платежная система</span>
                            <p>Alfa bank LLC</p>
                        </div>

                    </div>

                    <div class="create-currency-sidebar__item">

                        <span><span class="icon-add-faq"></span></span>

                        <div class="create-currency-sidebar__item--info">
                            <span>Тип валюты</span>
                            <p>USD</p>
                        </div>

                    </div>

                    <div class="create-currency-sidebar__item">

                        <span><img src="img/right-and-left-arrows-square-button.svg" alt=""></span>

                        <div class="create-currency-sidebar__item--info">
                            <span>XML валюты</span>

                            <p>

                                <select>
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
                        <p>Введите обозначение согласно стандарту</p>
                        <span>estandarts.info</span>
                    </div>
                </div>

                <div class="create-currency-sidebar__next" >
                    <button class="btn btn-blue" @click="saveStep0" v-if="step === 0">продолжить далее</button>
                </div>


            </div>


            <step1 v-if="step <= 1" :step="step"/>
            <step2 v-if="step === 2"/>
            <step3 v-if="step === 3"/>

        </div>

    </div>


</template>

<script>
    import step1 from './step/step-1';
    import step2 from './step/step-2';
    import step3 from './step/step-3';

    export default {
        components: {step1, step2, step3},
        props: ['data'],
        data() {
            return {
                step: 0
            }
        },

        methods: {
            saveStep0(){
                this.step = 1;
            }
        },

    }
</script>
