<template>

    <div class="dashboard-visitors--source sidebar-width">
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
                this.$rest.api('getStatisticClient')
                    .then(res => {
                        let main = res.data.visitors;
                        let obj = {};
                        let arr = [];
                        main.forEach(el => {
                            el.fromUrl.forEach(el => {
                                let count = el.count;
                                let url = el.url;
                                obj[url] ? obj[url] = parseInt(obj[url]) + count : obj[url] = count;
                            })
                        });
                        let total = 0;
                        for (let k in obj) {
                            let objj = {};
                            objj.url = k;
                            objj.count = obj[k];
                            total += obj[k];
                            arr.push(objj);
                        }
                        arr.forEach(el => {
                            el.percent = Math.ceil((parseFloat(el.count * 100 / total)) * 10) / 10
                        })
                        console.log(arr);
                        this.info = arr;
                        this.load = true;
                    })
                    .catch((err) => {
                        this.errorData = { message: 'Error load data' }
                    });
            }
        }
    }
</script>
