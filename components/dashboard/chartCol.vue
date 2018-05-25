<template>
    <highstock :options="options"></highstock>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Entries',
                        x: -20
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                        ]
                    },
                    yAxis: {
                        title: {
                            text: 'USERS'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#ccc'
                        }]
                    },

                    rangeSelector: {
                        selected: 1
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
                        data: [
                            [Date.UTC(1970, 10, 9), 1],

                        ]

                    }]
                }
            }
        },

        mounted() {
            this.$rest.api('getStatisticClient').then(res => {

                let main = res.data.visitors;
                let arr = [];
                let arr1 = [];
                main.forEach(el => {
                    let date = el.date.slice(0, 10).split('-');
                    let realDate = [Date.UTC(parseInt(date[0]), parseInt(date[1]), parseInt(date[2])), parseInt(el.total_count)];
                    arr.push(realDate);
                });
                console.log(arr);
                this.options.series[0].data = arr;

            })


        }


    }


</script>




