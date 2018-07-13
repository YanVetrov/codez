<template>

    <div class="dashboard-visitors--chart border">
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
                        return new Promise(resolve => setTimeout(resolve, 5000))
                    })
                    .then(() => {

                        return {
                            chart: {
                                type: 'areaspline'
                            },
                            xAxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                                ]
                            },
                            yAxis: {
                                title: {
                                    text: this.$t('salary')
                                },
                                plotLines: [{
                                    value: 0,
                                    width: 1,
                                    color: '#ccc'
                                }]
                            },

                            rangeSelector: {
                                selected: 999,
                                inputEnabled: false,
                                buttonTheme: {
                                    visibility: 'hidden'
                                },
                                labelStyle: {
                                    visibility: 'hidden'
                                }
                            },
                            tooltip: {
                                valueSuffix: '$'
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'right',
                                borderWidth: 0
                            },
                            series: [{
                                name: 'salary',
                                data: [
                                    [1313964000000, 48.17],
                                    [1314050400000, 518.82],
                                    [1314136800000, 53.29],
                                    [1314223200000, 520.04],
                                    [1314568800000, 59.08],
                                    [1439244000000, 690.30],
                                    [1439330400000, 191.47],
                                    [1439416800000, 386.51],
                                    [1439935200000, 794.04]
                                ]

                            }]
                        }
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
