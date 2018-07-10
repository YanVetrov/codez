<template>

    <div class="dashboard-visitors--chart border">
        <DataInfo :data="options" v-if="load && options"></DataInfo>
        
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
                options: false,
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
                                    type: 'column'
                                },
                                title: {
                                    text: this.$t('entries'),
                                    x: -20
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
                    })
                    .then((res) => {
                        this.options = res;
                        this.load = true;
                    }).catch((err) => {
                        this.errorData = { message: 'Error load data' }
                    });
            }
        }
    }
</script>
