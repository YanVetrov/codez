<template>

    <div class="dashboard-reserve">
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {
                info: false,
                load: false,
                errorData: false,

            }
        },

        created() {
            this.updateData();
        },
        methods: {
            updateData() {
                return Promise.resolve()
                    .then(() => {

                        return [{
                            img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                            name: 'PayPal',
                            type: 'USD',
                            total: '2344.42',
                            currency: {
                                img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                                amount: {
                                    total: '23423',
                                    type: 'USD'
                                },
                                end: {
                                    total: '43543',
                                    type: 'USD'
                                },
                                additional: [
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },

                                ]
                            }
                        }, {
                            img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                            name: 'PayPal',
                            type: 'USD',
                            total: '2344.42',
                            currency: {
                                img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                                amount: {
                                    total: '23423',
                                    type: 'USD'
                                },
                                end: {
                                    total: '43543',
                                    type: 'USD'
                                },
                                additional: [
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },

                                ]
                            }
                        }, {
                            img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                            name: 'PayPal',
                            type: 'USD',
                            total: '2344.42',
                            currency: {
                                img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                                amount: {
                                    total: '23423',
                                    type: 'USD'
                                },
                                end: {
                                    total: '43543',
                                    type: 'USD'
                                },
                                opt: [
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },

                                ]
                            }
                        }, {
                            img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                            name: 'PayPal',
                            type: 'USD',
                            total: '2344.42',
                            currency: {
                                img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                                amount: {
                                    total: '23423',
                                    type: 'USD'
                                },
                                end: {
                                    total: '43543',
                                    type: 'USD'
                                },
                                opt: [
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },

                                ]
                            }
                        }, {
                            img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                            name: 'PayPal',
                            type: 'USD',
                            total: '2344.42',
                            currency: {
                                img: 'https://exchanger_001.proexchanger.net/service/fs/img/parsers/gdax.png',
                                amount: {
                                    total: '23423',
                                    type: 'USD'
                                },
                                end: {
                                    total: '43543',
                                    type: 'USD'
                                },
                                opt: [
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },
                                    { name: 'PayPal', total: '2342', type: 'USD' },

                                ]
                            }
                        }, ]
                    })
                    .then((res) => {
                        this.info = res;
                        this.load = true;
                    }).catch((err) => {
                        this.errorData = { message: 'Error load data' }
                    });
            }
        }
    }
</script>
