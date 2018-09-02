<template>

    <div class="dashboard-visitors--country sidebar-width">
        <DataInfo :data="info" v-if="load && info"></DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import mapData from "./mapData.js";
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: { DataInfo, WaitInfo },
        created() {
            this.updateData();
        },
        methods: {
            updateData() {
                this.$rest.api('admin/visits/statistic/get').then(res => {

                        let main = res.data.visitors;
                        let obj = {};
                        let arr = [];
                        let arr1 = [];
                        main.forEach(el => {
                            let date = el.date.slice(0, 10);
                            el.countries.forEach(el => {
                                arr1.push([el.country.toLocaleLowerCase(), el.count]);

                            });
                            el.fromUrl.forEach(el => {
                                el.date = date;
                                arr.push(el)
                            })


                        });
                        this.info.series[0].data = arr1;
                        this.load = true;

                    })
                    .catch((err) => {
                        this.errorData = { message: 'Error load data' }
                    });
            }
        },
        data() {
            return {
                load: false,
                errorData: false,
                info: {
                    chart: {},
                    title: {
                        text: ''
                    },
                    mapNavigation: {
                        enabled: true,
                        enableDoubleClickZoomTo: false
                    },
                    legend: {
                        enabled: true
                    },
                    series: [{
                        name: this.$t('country'),
                        mapData: mapData,
                        data: [],
                        colorAxis: {
                            min: 1,
                            type: 'logarithmic',
                            minColor: '#333',
                            maxColor: '#000000',
                            stops: [
                                [0, '#000'],
                                [0.67, '#4444FF'],
                                [1, '#000022']
                            ]
                        },
                        dataLabels: {
                            enabled: true,
                            color: '#FFFFFF',
                            formatter: function() {
                                if (this.point.value) {
                                    return this.point.name;
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: 'Количество посещений ',
                            pointFormat: '{point.value}'
                        }
                    }],

                }

            }
        },
    }
</script>
