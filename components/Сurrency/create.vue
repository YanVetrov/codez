<template>
    <div class="component-valut">
        <loading type="block" :status_load="status_load"/>
        <ImageUploader field="image"
                       class="uploader-image"
                       @crop-success="cropSuccess"
                       @crop-upload-success="cropUploadSuccess"
                       @crop-upload-fail="cropUploadFail"
                       v-model="show"
                       :width="100"
                       :height="100"
                       langType="en"
                       :noRotate="false"
                       :noCircle="true"
                       :noSquare="true"
                       :url="$rest.apiPath+'uploadImage/'"
                       :params="params"
                       :headers="headers"
                       img-format="png"></ImageUploader>

        <div class="component-valut_wr_block">

            <div class="component-valut_left">

                <div class="component-valut_logo">
                    <h5 class="component-valut_logo-title">Лого платежной системы</h5>
                    <div class="component-valut_logo-upload">
                        <label @click="toggleShow">
                            <span> <img :src="imgDataUrl" style="border-radius: 50%; width: 6.5em;"></span>
                            <p>Выберите</p>
                        </label>
                    </div>
                </div>
                <div class="component-valut_requirement">

                    <div class="component-valut_requirement-top">
                        <span></span>
                        <p>Изображенние должно быть не менее 100 х 100 пикселей, и быть форматом PNG, JPEG</p>
                    </div>

                    <div class="component-valut_requirement-bot">
                        <p>Lorem ipsum dolor sit amet, consec-
                            tetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris </p>
                    </div>

                </div>
            </div>

            <div class="component-valut_right">
                <div class="component-valut_right-item">
                    <label>
                        <span>Платежная система</span>

                        <div>
                            <input type="text" v-model="form.name">
                        </div>
                    </label>
                    <label class="component-valut_right-currency">
                        <span>Тип валюты</span>

                        <div>
                            <input type="text" v-model="form.type">
                        </div>
                    </label>

                </div>

                <hr>

                <div class="component-valut_right-item">
                    <label>
                        <span>XML Валюты</span>

                        <div>
                            <v-select :options="optionsXML" label="xml" placeholder="Введите XML"
                                      v-model="form.xml" taggable>
                                <template slot="option" slot-scope="option">
                                    {{option.xml}} - {{option.name}}
                                </template>
                            </v-select>

                        </div>
                    </label>

                    <div class="component-valut_right-info">
                        <a><img src="~/static/images/information.svg" alt=""></a>
                        <p>Введите обозначение (согласно стандарту) <a href="http://estandarts.info/" target="_blank">estandarts.info</a>
                        </p>
                    </div>
                </div>

                <hr>

                <div class="component-valut_right-item">


                    <label>
                        <span>Сумма резерва</span>

                        <div>
                            <input type="text" v-model="form.reserve">
                        </div>
                    </label>

                    <div class="component-valut_arrow">
                        <p>Точность суммы</p>
                        <div>
                            <a @click="form.precision = (form.precision-1 < 0)? 0 : form.precision-1"
                               class="component-valut_arrov-left"></a>
                            <span>{{form.precision}}</span>
                            <a @click="form.precision = (form.precision+1 > 16)? 16 : form.precision+1"
                               class="component-valut_arrov-right"></a>
                        </div>
                    </div>
                </div>

                <div class="component-valut_right-payment-method">

                    <div class="component-valut_right-payment-method_title">
                        <p>Курс валюты {{form.name}} {{form.type}} к USD</p>
                        <div>
                            <a class="cl-pointer" @click="form.type_rate = 'manually'"
                               :class="{active:(form.type_rate==='manually')}">Вручную</a>
                            <a class="cl-pointer" @click="form.type_rate = 'auto'"
                               :class="{active:(form.type_rate==='auto')}">Автоматически</a>
                        </div>
                    </div>

                </div>

                <div v-if="form.type_rate==='manually'">
                    <div class="component-valut_right-item">

                        <label>
                            <span>Введите курс валюты<br></span>

                            <div class="component-valut_right">
                                <input type="text" v-model="form.rate">
                            </div>
                        </label>

                        <div class="component-valut_right-info">

                            <a><img src="~/static/images/information.svg" alt=""></a>
                            <p>Внимание данное поле необходимо корректировать для того чтоб партнерские вознаграждения
                                начислялись верно.</p>
                        </div>
                    </div>


                </div>
                <div v-if="form.type_rate==='auto'">

                    <div class="component-valut_right-item">


                        <label>
                            <span>Валюта</span>

                            <div>
                                <input type="text" v-model="form.currency_for_parser">
                            </div>
                        </label>
                        <div class="component-valut_right-info">
                            <a><img src="~/static/images/information.svg" alt=""></a>
                            <p>Код валюты (Пример: EUR)</p>
                        </div>
                    </div>
                    <hr>
                    <div class="component-valut_right-item">

                        <label>

                            <span>Парсер</span>

                            <div>
                                <v-select :options="optionsParsers" label="title" placeholder="Вибирите парсер"
                                          v-model="form.selectParser">
                                    <template slot="option" slot-scope="option">
                                        <img :src="fsPath+option.logo" style="width: 20px;height: 20px"/>
                                        {{ option.title }}
                                    </template>
                                </v-select>
                            </div>
                        </label>
                        <div class="component-valut_right-info">
                            <a><img src="~/static/images/information.svg" alt=""></a>
                            <p>C полным списком парсеров и доступных им направлений вы можете увидеть в розделе
                                <nuxt-link to="/parsers">Парсеры курсов</nuxt-link>
                            </p>
                        </div>


                    </div>

                </div>


                <div class="component-valut_right-payment-method">

                    <div class="component-valut_right-payment-method_title">
                        <p>Способ оплаты</p>
                        <div>
                            <a class="cl-pointer" @click="form.type_pay = 'manually'"
                               :class="{active:(form.type_pay==='manually')}">Вручную</a>
                            <a class="cl-pointer" @click="form.type_pay = 'auto'"
                               :class="{active:(form.type_pay==='auto')}">Автоматически</a>
                        </div>
                    </div>

                </div>
                <div v-if="form.type_pay==='manually'">
                    <div class="component-valut_right-item">

                        <label>
                            <span>Название поля для депозита</span>

                            <div>
                                <input type="text" v-model="form.fieldDeposit">
                            </div>
                        </label>
                        <label>
                            <span>Валидатор для поля депозита</span>

                            <div>
                                <v-select :options="optionsRegexp" label="name" placeholder="Вибирите валидатор"
                                          v-model="form.regexpDeposit">
                                    <template slot="option" slot-scope="option">
                                        {{ option.name }}
                                    </template>
                                </v-select>
                            </div>
                        </label>


                    </div>

                    <hr>

                    <div class="component-valut_right-item">

                        <label>
                            <span>Название поля для вывода</span>

                            <div>

                                <input type="text" v-model="form.fieldWithdrawal">
                            </div>
                        </label>

                        <label>
                            <span>Валидатор для поля вывода</span>

                            <div>
                                <v-select :options="optionsRegexp" label="name" placeholder="Вибирите валидатор"
                                          v-model="form.regexpWithdrawal">
                                    <template slot="option" slot-scope="option">
                                        {{ option.name }}
                                    </template>
                                </v-select>
                            </div>
                        </label>

                    </div>

                    <hr>

                    <div class="component-valut_right-item">

                        <label>
                            <span>Ссылка платежной системы</span>

                            <div>
                                <input type="text" v-model="form.link">
                            </div>
                        </label>

                        <label>
                            <span>Ваш счет</span>

                            <div>
                                <input type="text" v-model="form.account">
                            </div>
                        </label>

                    </div>

                    <div class="component-valut_right-payment-method">

                        <div class="component-valut_right-payment-method_title">
                            <p>Инструкция ручной оплаты</p>
                            <div>
                                <a class="cl-pointer" @click="form.type_help_text = 'standard'"
                                   :class="{active:(form.type_help_text==='standard')}">Стандартная</a>
                                <a class="cl-pointer" @click="form.type_help_text = 'unique'"
                                   :class="{active:(form.type_help_text==='unique')}">Уникальное</a>
                            </div>
                        </div>

                    </div>

                    <div v-if="form.type_help_text==='standard'">

                        <br>
                        <div class="form-manual-must text-center">
                            <h3 class="title">Для завершение обмена необходимо выполнить следушие действия:</h3>
                            <ol>
                                <li>
                                    <div>
                                        <p>Авторизируйтесь в:</p>
                                        <a href="" class="btn btn-log-in"><img :src="imgDataUrl" alt=""><span>{{form.name}}</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>Оплатите:</p>
                                        <div class="form-manual-must_txt">СУММА {{form.type}}</div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>На счет:</p>
                                        <div class="form-manual-must_txt">{{form.account}}</div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>Комментарий к платежу:</p>
                                        <div class="form-manual-must_txt">
                                            <v-select :options="optionsLastStep" label="name"
                                                      placeholder="Что должен оставить?"
                                                      v-model="form.commentForPay">
                                                <template slot="option.name" slot-scope="option">
                                                    {{ option.name }}
                                                </template>
                                            </v-select>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div v-if="form.type_help_text==='unique'">
                        <div class="component-valut">
                            <label class="">
                                <vue-editor v-model="form.help_pay"></vue-editor>
                            </label>
                        </div>
                    </div>

                </div>
                <div v-if="form.type_pay==='auto'">
                    <div class="component-valut_right-item">

                        <label>
                            <span>Мерчант</span>

                            <div class="component-valut_right-select">
                                <select v-model="form.mechant">
                                    <option disabled selected>Выбирете Мерчант</option>
                                    <option>Privat24</option>
                                    <option>PayPal</option>
                                </select>
                            </div>
                        </label>

                        <div class="component-valut_right-info">
                            <a><img src="~/static/images/information.svg" alt=""></a>
                            <p>Внимание если вы не видите в списке нужно мерчанта возможно он не настроен в меню
                                <nuxt-link to="/payments/merchant">Мерчаинты и API</nuxt-link>
                                .
                            </p>
                        </div>

                    </div>
                </div>
                <div class="component-valut_right-item component-valut_right-send">

                    <button @click="postPost">Создать</button>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import Loading from "~/components/loading";

    export default {
        components: {Loading},
        data() {
            return {
                fsPath: process.env.config.fsPath,
                form: {
                    name: '',
                    type: '',
                    imageId: '',
                    xml: undefined,
                    reserve: '',
                    rate: '',
                    precision: 2,
                    type_rate: 'manually',
                    type_pay: 'manually',
                    fieldDeposit: '',
                    fieldWithdrawal: '',

                    regexpDeposit: undefined,
                    regexpWithdrawal: undefined,
                    // parser
                    parser_rate: '',
                    currency_for_parser: '',
                    selectParser: undefined,
                    //===
                    mechant: '',
                    type_help_text: 'standard',
                    help_pay: '',
                    link: '',
                    commentForPay: undefined,
                    account: ''
                },
                optionsParsers: [{img: '', title: 'Загрузка...', key: 'null'}],
                optionsRegexp: [{name: 'Загрузка...', regexp: 'null'}],
                optionsXML: [{name: 'Введите XML', xml: 'xml'}],
                optionsLastStep: [{name: 'Disable', value: 'disable'}, {
                    name: 'Order ID',
                    value: 'id'
                }, {name: 'Name & Surname', value: 'name'}, {name: 'Account TO', value: 'name'}],
                status_load: true,
                afterPost: false,
                title: '',
                content: '',

                show: false,
                params: {
                    public: true,
                    type: 'currencies'
                },
                headers: {
                    smail: '*_~'
                },
                imgDataUrl: ''
            };
        },
        mounted() {
            this.getXMLestandardsInfo();
            this.getParsers();
            this.getRegExp();
        },
        methods: {
            getParsers() {

                return this.$rest.api('getAllParsers')
                    .then((res) => {
                        this.optionsParsers = res.data.parsers.map(el => {
                            return {...el.conf, _id: el._id};
                        })

                    })
            },
            getRegExp() {

                return this.$rest.api('getAllRegExp')
                    .then((res) => {
                        this.optionsRegexp = res.data.regexp

                    })
            },
            getXMLestandardsInfo() {

                return this.$axios.get('https://proexchanger.net/service/api/v1/estandardsInfo')
                    .then((res) => {
                        this.optionsXML = res.data.data.res;

                    })
            },
            toggleShow() {
                this.show = !this.show;
            },
            cropSuccess(imgDataUrl) {
                this.imgDataUrl = imgDataUrl;
            },

            cropUploadSuccess(jsonData, field) {
                if (jsonData.success === true) {
                    this.form.imageId = jsonData.data._id;
                }
                else {
                    this.show = false;
                    this.imgDataUrl = '';
                    this.form.imageId = '';
                    if (jsonData.error) {
                        this.$notify({
                            group: 'currency_create',
                            duration: 5000,
                            type: 'error',
                            title: 'Error upload image!',
                            text: jsonData.error.message
                        })
                    }
                }
            },

            cropUploadFail(status, field) {
                this.imgDataUrl = '';
                this.form.imageId = '';
                this.$notify({
                    group: 'currency_create',
                    duration: 5000,
                    type: 'error',
                    title: 'Error upload image!',
                    text: 'Please retry upload image'
                })
            },

            postPost() {
                this.status_load = false;

                this.$rest.api('createCurrency', {
                    name: this.form.name,
                    type: this.form.type,
                    xml: this.form.xml && this.form.xml.xml ? this.form.xml.xml : this.form.xml && this.form.xml.name ? this.form.xml.name : undefined,
                    reserve: this.form.reserve,
                    precision: this.form.precision,
                    type_pay: this.form.type_pay,
                    regexpDeposit: this.form.regexpDeposit,
                    fieldDeposit: this.form.fieldDeposit,
                    regexpWithdrawal: this.form.regexpWithdrawal,
                    fieldWithdrawal: this.form.fieldWithdrawal,
                    help_pay: this.form.help_pay,
                    link: this.form.link,
                    account: this.form.account,
                    parserId: this.form.selectParser && this.form.selectParser._id && this.form.selectParser._id ? this.form.selectParser._id : undefined,
                    currencyParser: this.form.currency_for_parser,
                    rate: this.form.rate,
                    imageId: this.form.imageId
                })
                    .then(response => {
                        if (response.success === true) {
                            this.afterPost = true;
                        }
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error create Сurrency!',
                                text: response.error.message
                            })
                        }
                    })
                    .catch(() => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error create Сurrency!',
                            text: 'Server error 500! =( try'
                        })
                    })
                    .finally(() => {
                        this.status_load = true;
                    });

            }


        }
    }
</script>
<style>

    .v-select.single .selected-tag {
        position: absolute !important;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.01s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>

<style scoped>

    .form-manual-must ol {
        margin: 0 -.875rem 15px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: row;
        flex-direction: row;
        counter-reset: a;
    }

    ol, ul {
        list-style-type: none;
        padding: 0;
    }

    .form-manual-must_txt {
        font-size: 1.5rem;
        margin-top: 1.8rem;
        font-weight: 600;

    }

    .form-manual-must .btn {
        margin-top: 10px;
        border-radius: 35px;
        font-weight: 600;
    }

    .form-manual-must .btn img {
        margin: 0 15px 0 0;
        max-width: 100%;
        height: 29px;
        border-radius: 50%;
    }

    .btn-log-in {
        margin: 0 auto;
        max-width: 220px;
        width: 100%;
        background: #f0f1f4;
        color: inherit;
        font-size: 1.5rem;
        line-height: 2;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: center;
        justify-content: center;
        border: 1px solid #f0f1f4;
    }

    .form-manual-must li {
        border: 1px solid #e6e6e6;
        margin: 2em .875rem .875rem;
        padding: 1rem .94rem;
        -ms-flex: 1 1;
        flex: 1 1;
        position: relative;
    }

    .form-manual-must li:before {
        counter-increment: a;
        content: counter(a);
        font-size: 15px;
        font-weight: 500;
        position: absolute;
        top: -19px;
        width: 40px;
        height: 19px;
        line-height: 35px;
        border: 1px solid #e6e6e6;
        border-radius: 20px 20px 0 0/20px 20px 0 0;
        border-bottom: transparent;
        background: #fff;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }

    .component-valut hr {
        margin-top: 0;
        margin-bottom: 0;
    }

    .component-valut_right--span {
        font-size: 1em;
        text-transform: uppercase;
        font-weight: 500;
    }

    @media screen and (min-width: 1201px) and (max-width: 1365px) {
        .component-valut_right--span {
            font-size: .8em;
        }
    }

    .component-valut {
        width: 100%;
        font-size: 14px;
        color: #313131;
        line-height: 1.42857143;
        font-family: 'Rubik', sans-serif;
    }

    .component-valut p {
        margin: 0;
    }

    .component-valut {
        /* margin: 0 0 0 60px; */
        color: #656565;
    }

    @media screen and (max-width: 768px) {
        .component-valut {
            margin-left: 0;
        }
    }

    .component-valut_wr_block {
        padding: 0 10px 50px;
        display: flex;
        flex-wrap: wrap;
    }

    .component-valut_left {
        margin: 10px 15px;
        width: 290px;
    }

    @media screen and (max-width: 1450px) {
        .component-valut_left {
            width: 260px;
        }
    }

    @media screen and (max-width: 1200px) {
        .component-valut_left {
            width: 100%;
        }
    }

    @media screen and (max-width: 550px) {
        .component-valut_left {
            margin-left: 0;
            margin-right: 0;
        }
    }

    .component-valut_logo {
        border-radius: 3px;
        background-color: #f7f7f7;
        padding: 15px;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.11);
    }

    .component-valut_logo-title {
        font-size: 1em;
        text-transform: uppercase;
        line-height: 3.43;
        text-align: center;
        border-bottom: 1px solid rgba(101, 101, 101, 0.2);
    }

    .component-valut_logo-upload {
        position: relative;
        overflow: hidden;
        margin-top: 15px;
    }

    .component-valut_logo-upload label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    @media screen and (max-width: 1200px) {
        .component-valut_logo-upload label {
            justify-content: center;
        }
    }

    .component-valut_logo-upload input {
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 1px;
        opacity: 0;
    }

    .component-valut_logo-upload span {
        cursor: pointer;
        width: 6.5em;
        height: 6.5em;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        display: inline-block;
        background-image: url("~/static/images/upload.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    @media screen and (max-width: 1450px) {
        .component-valut_logo-upload span {
            width: 4.5em;
            height: 4.5em;
        }
    }

    @media screen and (max-width: 1200px) {
        .component-valut_logo-upload span {
            width: 6.5em;
            height: 6.5em;
        }
    }

    .component-valut_logo-upload p {
        cursor: pointer;
        margin: 0 7% 0 0;
        color: #010000;
        line-height: 3;
        font-size: 1.143em;
        font-weight: 600;
        padding-left: 40px;
        background-image: url("~/static/images/add-upload.svg");
        background-position: center left;
        background-repeat: no-repeat;
        background-size: 30px;
    }

    @media screen and (max-width: 1200px) {
        .component-valut_logo-upload p {
            margin: 0 0 0 30px;
        }
    }

    .component-valut_logo-upload p:hover {
        -webkit-transition: .35s all;
        -moz-transition: .35s all;
        -ms-transition: .35s all;
        -o-transition: .35s all;
        transition: .35s all;
    }

    .component-valut_requirement {
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
        margin-top: 30px;
        padding: 20px;
    }

    .component-valut_requirement p {
        font-size: 1em;
    }

    .component-valut_requirement-top {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 20px;
        margin-bottom: 40px;
    }

    .component-valut_requirement-top span {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 50%;
        background-color: #2cabe3;
        background-image: url("~/static/images/info-upload.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .component-valut_requirement-top p {
        line-height: 1.46;
        flex: 1 0;
    }

    .component-valut_requirement-bot {
        margin-bottom: 10px;
    }

    .component-valut_requirement-bot p {
        line-height: 1.29;
    }

    .component-valut_arrow {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        min-width: 300px;
        flex: .5 1;
        margin: 15px;
    }

    @media screen and (min-width: 1201px) and (max-width: 1450px) {
        .component-valut_arrow {
            min-width: initial;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
    }

    @media screen and (max-width: 550px) {
        .component-valut_arrow {
            min-width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
    }

    .component-valut_arrow p {
        margin: 0 20px 0 0;
        font-size: 1em;
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: 500;
    }

    @media screen and (min-width: 1201px) and (max-width: 1450px) {
        .component-valut_arrow p {
            margin: 0;
        }
    }

    @media screen and (min-width: 1201px) and (max-width: 1365px) {
        .component-valut_arrow p {
            font-size: .8em;
            margin-right: 11px;
        }
    }

    .component-valut_arrow div {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }

    .component-valut_arrow a {
        width: 35px;
        height: 33px;
        border-radius: 3px;
        border: solid 1px #dadada;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 15px;
        -webkit-transition: .35s all;
        -moz-transition: .35s all;
        -ms-transition: .35s all;
        -o-transition: .35s all;
        transition: .35s all;
    }

    @media screen and (min-width: 1201px) and (max-width: 1450px) {
        .component-valut_arrow a {
            height: 27px;
        }
    }

    .component-valut_arrow a.component-valut_arrov-left {
        background-image: url("~/static/images/back.svg");
    }

    .component-valut_arrow a.component-valut_arrov-right {
        background-image: url("~/static/images/next.svg");
    }

    .component-valut_arrow a:hover {
        background-color: #dadada;
    }

    .component-valut_arrow span {
        font-size: 1.28em;
        display: inline-block;
        margin-right: 25px;
        margin-left: 25px;
    }

    .component-valut_right {
        margin: 10px 15px;
        flex: 1 1;
    }

    @media screen and (max-width: 550px) {
        .component-valut_right {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
        }
    }

    .component-valut_right-item {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-left: -15px;
        margin-right: -15px;
    }

    @media screen and (min-width: 1201px) and (max-width: 1365px) {
        .component-valut_right-item > span {
            font-size: .8em;
        }
    }

    @media screen and (max-width: 1098px) {
        .component-valut_right-item {
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 550px) {
        .component-valut_right-item {
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    .component-valut_right-info {
        border-radius: 3px;
        background-color: #e5f7ff;
        padding-left: 17px;
        padding-right: 10px;
        margin: 15px;
        max-width: 45.5%;
        line-height: 3.7;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        flex: 1 0;
    }

    @media screen and (min-width: 1450px) {
        .component-valut_right-info {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media screen and (max-width: 550px) {
        .component-valut_right-info {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
            min-width: 230px;
        }
    }

    .component-valut_right-info a {
        color: #656565;
        font-size: 1em;
    }

    .component-valut_right-info > a {
        display: flex;
        align-items: center;
    }

    .component-valut_right-info img {
        max-width: 18px;
        width: 100%;
    }

    @media screen and (max-width: 550px) {
        .component-valut_right-info img {
            max-width: 50px;
        }
    }

    .component-valut_right-info p {
        font-size: 1em;
        margin-left: 30px;
        flex: 1 0;
    }

    @media screen and (max-width: 550px) {
        .component-valut_right-info p {
            line-height: normal;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

    .component-valut_right label {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin: 15px;
        flex: 1 1;
    }

    @media screen and (max-width: 768px) {
        .component-valut_right label {
            width: 100%;
            min-width: 290px;
            display: block;
        }
    }

    @media screen and (max-width: 550px) {
        .component-valut_right label {
            margin-left: 0;
            margin-right: 0;
        }
    }

    .component-valut_right label span {
        font-size: 1em;
        text-transform: uppercase;
        margin-right: 20px;
        cursor: pointer;
        flex: .5 1;
    }

    @media screen and (min-width: 1201px) and (max-width: 1450px) {
        .component-valut_right label span {
            margin-right: 5px;
        }
    }

    @media screen and (min-width: 1201px) and (max-width: 1365px) {
        .component-valut_right label span {
            font-size: .8em;
        }
    }

    .component-valut_right label div {
        position: relative;
        width: 100%;
        flex: 1 1;
    }

    .component-valut_right label div p.error {
        position: absolute;
        right: 0;
        top: 1.1em;
        color: #ff7676;
        padding-right: 20px;
        white-space: nowrap;
        background-image: url("~/static/images/wrong.svg");
        background-position: center right;
        background-repeat: no-repeat;
        background-size: 12px;
        margin-right: 3%;
    }

    .component-valut_right label input,
    .component-valut_right label select {
        border: solid 1px #d5d5d5;
        border-radius: 3px;
        padding: 5px 10px;
        min-width: 130px;
        line-height: 2.15;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.3em;
    }

    @media screen and (min-width: 1201px) and (max-width: 1450px) {
        .component-valut_right label input,
        .component-valut_right label select {
            min-width: 120px;
        }
    }

    .component-valut_right label input:focus,
    .component-valut_right label select:focus {
        outline: none;
    }

    .component-valut_right label input:invalid,
    .component-valut_right label select:invalid {
        border-color: #ff7676;
    }

    .component-valut_right label input.error,
    .component-valut_right label select.error {
        border-color: #ff7676;
    }

    .component-valut_right label select {
        height: 2.805em;
        padding-right: 25px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
    }

    .component-valut_right label.component-valut_right-currency {
        flex: .5 1;
    }

    @media screen and (max-width: 798px) {
        .component-valut_right label.component-valut_right-currency {
            flex: 1 1;
        }
    }

    .component-valut_right-select {
        position: relative;
    }

    .component-valut_right-select:after {
        content: "";
        border: 5px solid transparent;
        border-top: 5px solid #d5d5d5;
        position: absolute;
        right: 15px;
        top: 50%;
        z-index: 1;
        text-align: center;
        width: 10px;
        pointer-events: none;
        box-sizing: border-box;
        margin-top: -2px;
    }

    .component-valut_right-payment-method_title {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        background-color: #2cabe3;
        padding: 0px 30px;
    }

    @media screen and (max-width: 650px) {
        .component-valut_right-payment-method_title {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .component-valut_right-payment-method_title > p {
        font-size: 1.125em;
    }

    .component-valut_right-payment-method > * {
        color: #ffffff;
        text-transform: uppercase;
    }

    .component-valut_right-payment-method div {
        display: flex;
        align-items: center;
        position: relative;
    }

    .component-valut_right-payment-method div:after,
    .component-valut_right-payment-method div:before {
        content: '';
        position: absolute;
        height: 90%;
        top: 5%;
        width: 1px;
        background: rgba(229, 247, 255, 0.3);
    }

    .component-valut_right-payment-method div:after {
        right: 0;
    }

    .component-valut_right-payment-method div:before {
        left: 0;
    }

    .component-valut_right-payment-method a {
        font-size: 1em;
        flex: 1 1;
        position: relative;
        display: inline-block;
        line-height: 3.43;
        margin: 0;
        padding-left: 3.5em;
        padding-right: 3.5em;
        color: #b4e4f9;
    }

    @media screen and (max-width: 650px) {
        .component-valut_right-payment-method a {
            padding-left: 0.5em;
            padding-right: 0.5em;
        }
    }

    .component-valut_right-payment-method a:first-child:before {
        content: '';
        position: absolute;
        height: 90%;
        top: 5%;
        width: 1px;
        background: rgba(229, 247, 255, 0.3);
        right: 0;
    }

    .component-valut_right-payment-method a:hover,
    .component-valut_right-payment-method a.active {
        color: #ffffff;
        background: rgba(229, 247, 255, 0.3);
        -webkit-transition: .35s all;
        -moz-transition: .35s all;
        -ms-transition: .35s all;
        -o-transition: .35s all;
        transition: .35s all;
    }

    .component-valut_right-payment-method a.active:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -20px;
        border: 10px solid transparent;
        border-top: 10px solid #6cc3ec;
        margin-left: -10px;
    }

    .component-valut_right-payment-method a:hover:not(.active) {
        background: rgba(0, 0, 0, 0.5);
    }

    .component-valut_right button {
        border-radius: 24px;
        background-color: #ff7676;
        color: #ffffff;
        text-transform: uppercase;
        cursor: pointer;
        text-align: center;
        padding: 0 45px;
        line-height: 3.4;
        font-size: 1em;
        min-width: 20em;
        outline: none;
        background-image: url("~/static/images/right-arrow.svg");
        background-position: center;
        background-position-x: 90%;
        background-repeat: no-repeat;
        background-size: 15px;
        -webkit-transition: .35s all;
        -moz-transition: .35s all;
        -ms-transition: .35s all;
        -o-transition: .35s all;
        transition: .35s all;
    }

    .component-valut_right button:focus {
        outline: none;
    }

    .component-valut_right button:hover {
        background-color: #c75858;
    }

    .component-valut_right-send {
        justify-content: flex-end;
        margin: 45px 0 0;
    }

    .component-valut hr {
        border: none;
        border-bottom: 1px solid #ededed;
    }

    .news-notify {
        position: absolute;
        top: auto !important;
        bottom: 35px !important;
        right: 25px !important;
        z-index: 1;
    }

    .news-create-notifications {
        padding: 10px;
        width: 100%;

        margin: 0 5px 5px;

        font-size: 12px;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;
    }

    .news-create-notifications.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    .news-create-notifications.error {
        background: #E54D42;
        border-left-color: #B82E24;
    }

    .news-create-notifications.success {
        background: #68CD86;
        border-left-color: #42A85F;
    }
</style>
