<template>

    <div class="create-currency">


    </div>
</template>

<script>
    export default {
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
                return this.$rest.api('admin/parser/list')
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