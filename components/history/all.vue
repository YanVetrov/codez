<template>
    <div class="action-wr">
        <div class="action-main border">

            <div class="action-main--top">

                <h3 class="title">ЗАЯВКАМИ на обмен</h3>

            </div>

            <search placeholder="Search text..." :filter="filterProps" ></search>


            <div class="table table-head">

                <table>

                    <thead>
                    <tr>

                        <td class="small">
                            <span>Data</span>
                        </td>
                        <td class="small"></td>
                        <td></td>
                        <td class="user">
                            <span>USER</span>
                        </td>
                        <td class="middle">
                            <span>IP INFO</span>
                        </td>

                    </tr>
                    </thead>

                </table>

            </div>

            <div class="table">

                <table>


                    <tbody>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    <tr>

                        <td class="small">

                            <p class="time">14:36</p>
                            <span>12.03,18</span>

                        </td>

                        <td class="small">

                            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

                        </td>

                        <td class="bg bg-ar">

                            <div class="df">

                                <p class="name">Вася Пупкин <i class="fal fa-angle-right"></i></p>
                                <p>Создал новость “Курс биткойна ростет!”</p>

                            </div>

                        </td>

                        <td class="bg user">

                            <div>

                                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                                <div class="company">
                                    <p class="name-company">Qiwi Wallet</p>
                                    <p><span>support@mail.ru</span></p>
                                </div>

                            </div>

                        </td>


                        <td class="bg middle">

                            <div class="ip">

                                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                                <p>218.134.155.43</p>
                                <span class="icon-laptop"></span>

                            </div>

                        </td>

                    </tr>

                    </tbody>

                </table>
                <pagination
                        :currentPage="current_page"
                        :totalPages="total_page"
                        @page-changed="getAdminHistory"
                />

            </div>

        </div>
    </div>


</template>

<script>
    import search from '~/components/_utils/search';
    import history from '~/components/history/history';

    export default {
        data() {
            return {
                filterProps: [{name:'Все типы',value:'all'},{name:'Авторизации',value:'auth'}],
                operName: '',
                currency: '',
                current_page: '',
                total_page: '',
                filterParam: {},
                history: [],
            }
        },
        methods: {
            getAdminHistory(page) {
                this.$root.$emit('loading', true);
                let obj = {};
                this.operName.trim() !== '' ? obj.operName = this.operName : '';
                this.currency !== '' ? obj.currency = this.currency : '';
                this.filterParam = obj;
                this.$rest.api('getAdminHistory', obj)
                    .then(res => {
                        console.log(res)
                        this.$root.$emit('loading', false);
                        if (res.success) {
                            this.current_page = res.data.count.select_page || 1;
                            this.history = res.data.history;
                            this.total_page = res.data.count.pages;

                        }
                        else {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get history!',
                                text: res.error.message,
                            });

                            this.$router.back();
                        }

                    })
            },
        },
        components: {history, search},
        mounted() {
            return this.getAdminHistory();
        }

    }
</script>

<style scoped>
    input {
        margin: 15px;
        border: 1px;
        border-radius: 20px;
        padding: 4px;
        color: grey;
    }
</style>
