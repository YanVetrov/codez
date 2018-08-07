<template>

    <div class="create-currency-main" :class="{close:step ===0}">
        <!--здесь раскомитив close - эта часть будет перекрыта блоком с тенью-->

        <div class="create-currency-main--head">

            <div class="create-currency-main--head--container">
                <p>курсы валют к USD</p>
                <ul>
                    <li>
                        <button class="btn active"><i class="fal fa-play-circle"></i> автоматически</button>
                    </li>
                    <li>
                        <button class="btn"><i class="fal fa-sliders-h"></i> вручную</button>
                    </li>
                </ul>
            </div>

        </div>

        <div class="create-currency-main--toodo">

            <div class="create-currency--course_wr bb">

                <div class="create-currency--course br">

                    <label>
                        <span>Тип валюты</span>

                        <div class="border-shadow--currency green-i">

                            <i class="fal fa-money-bill-alt"></i>

                            <input type="text" placeholder="USD">

                        </div>

                    </label>

                    <p>
                        <i class="fal fa-comment-alt-dots"></i>
                        Внимание, данное поле необходимо корректировать для того чтобы партнерские вознаграждения
                        начислялись верно
                    </p>

                </div>

                <div class="create-currency--course">

                    <label>
                        <span>Тип валюты</span>

                        <div class="border-shadow--currency">

                            <i class="fal fa-exchange"></i>

                            <div class="select">
                                <select>
                                    <option>Binance Exchenge</option>
                                    <option>Exchenge</option>
                                    <option>Binance</option>
                                </select>
                                <i class="fal fa-sort-down"></i>
                            </div>


                        </div>

                    </label>

                    <p>
                        <i class="fal fa-comment-alt-dots"></i>
                        <span>
                        С полным списком парсеров и доступным им направлений вы можете увидеть в разделе <a href="/">Парсеры курсов</a>
                    </span>
                    </p>

                </div>

            </div>

            <div class="create-currency-main--head">
                <div class="create-currency-main--head--container">
                    <p>курсы валют к USD</p>
                    <ul>
                        <li>
                            <button class="btn"><i class="fal fa-play-circle"></i> автоматически</button>
                        </li>
                        <li>
                            <button class="btn"><i class="fal fa-sliders-h"></i> вручную</button>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="create-currency--course_wr bb">

                <div class="create-currency--course">

                    <label>
                        <span>Тип валюты</span>

                        <div class="border-shadow--currency">

                            <i class="fal fa-money-bill-alt"></i>

                            <input type="text" placeholder="26.465778">

                        </div>

                    </label>

                </div>

                <div class="create-currency--course">

                    <p>
                        <i class="fal fa-comment-alt-dots"></i>
                        <span>
                        С полным списком парсеров и доступным им направлений вы можете увидеть в разделе.
                    </span>
                    </p>

                </div>

            </div>


        </div>

        <div class="create-currency-main--foot flex-end">


            <button class="btn btn-blue" @click="$emit('next')">Продолжить</button>

        </div>

    </div>


</template>

<script>
    export default {
        props: {
            step: {type: Number, required: true}
        },
        data() {
            return {}
        },
    }
</script>
