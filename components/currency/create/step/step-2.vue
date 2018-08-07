<template>

    <div class="create-currency-main">

        <div class="create-currency-main--head">
            <div class="create-currency-main--head--container">
                <p>инструкция ручной оплаты</p>

                <ul>
                    <li>
                        <button class="btn"><i class="fal fa-check-square"></i> стандартная</button>
                    </li>
                    <li>
                        <button class="btn"><i class="fal fa-file-alt"></i> уникальная</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="create-currency-main--toodo">

            <div class="create-currency--course_wr">

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Название поля для депозита</span>

                        <div class="border-shadow--currency orange-i">

                            <i class="fal fa-long-arrow-down"></i>

                            <div class="select">
                                <select>
                                    <option>Депозит</option>
                                    <option>EURO</option>
                                    <option>UAN</option>
                                </select>
                                <i class="fal fa-sort-down"></i>
                            </div>


                        </div>

                    </label>

                </div>

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Валидатор для поля депозита</span>

                        <div class="border-shadow--currency orange-i">

                            <i class="fal fa-check-square"></i>

                            <div class="select">
                                <select>
                                    <option>Выбрать валидатор</option>
                                    <option>Exchenge</option>
                                    <option>Binance</option>
                                </select>
                                <i class="fal fa-sort-down"></i>
                            </div>


                        </div>

                    </label>

                </div>

            </div>

            <div class="create-currency--course_wr">

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Название поля для вывода</span>

                        <div class="border-shadow--currency green-i">

                            <i class="fal fa-long-arrow-up"></i>

                            <div class="select">
                                <select>
                                    <option>Депозит</option>
                                    <option>EURO</option>
                                    <option>UAN</option>
                                </select>
                                <i class="fal fa-sort-down"></i>
                            </div>


                        </div>

                    </label>

                </div>

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Валидатор для поля депозита</span>

                        <div class="border-shadow--currency green-i">

                            <i class="fal fa-check-square"></i>

                            <input type="tel" placeholder="phone">

                        </div>

                    </label>

                </div>

            </div>

            <div class="create-currency--course_wr">

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Ссылка платёжной системы</span>

                        <div class="border-shadow--currency blue-i">

                            <i class="fal fa-link"></i>

                            <p>Платёжная ссылка</p>

                        </div>

                    </label>

                </div>

                <div class="create-currency--course marg-0">

                    <label>
                        <span>Ваш счёт платёжной системы</span>

                        <div class="border-shadow--currency blue-i">

                            <i class="fal fa-id-card"></i>

                            <p>Ваш счёт платёжной системы</p>

                        </div>

                    </label>

                </div>

            </div>


        </div>

        <div class="create-currency-main--foot">

            <button class="btn btn-simple" @click="$emit('back')">Назад</button>

            <button class="btn btn-blue" @click="$emit('next')">Сохранить и продолжить</button>

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
