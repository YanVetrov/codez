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
                        data: []

                    }]
                }
            }
        },

        mounted() {
       
            this.$rest.api('getStatisticClient').then(res => {

                let main = res.data.visitors;
                let arr = [];
                main.forEach(el => {
                    let date = el.date.slice(0, 10).split('-');
                    let realDate = [Date.UTC(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2])), parseInt(el.total_count)];
                    arr.unshift(realDate);
                });
                
                this.options.series[0].data = arr;
                

            })


        }


    }


</script>




