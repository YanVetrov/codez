<template>

    <div class="dashboard-visitors--chart border">
        <DataInfo :dat="info" v-if="load && info"></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {
                info: {

                    chart: {
                        type: 'areaspline'
                    },

                    yAxis: {
                        title: {
                            text: this.$t('users')
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
                        valueSuffix: ' users'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'right',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'entries',
                        data: []

                    }]

                },
                load: false,
                errorData: false,

            }
        },

        created() {
            this.updateData();
        },
        methods: {
            updateData() {
                this.$rest.api('getStatisticClient').then(res => {

                    let main = res.data.visitors;
                    let arr = [];
                    main.forEach(el => {
                        let date = el.date.slice(0, 10).split('-');
                        let realDate = [Date.UTC(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2])), parseInt(el.total_count)];
                        arr.unshift(realDate);
                    });
                    this.load = true;
                    this.info.series[0].data = arr;


                })
                    .catch((err) => {
                        this.errorData = {message: 'Error load data'}
                    });
            }
        }
    }
</script>
