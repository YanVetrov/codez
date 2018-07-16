<template>

    <div>
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
                load: false,
                errorData: false,
                info: {},

            }
        },
        methods: {
            getUserStatistic() {
                Promise.all([this.$rest.api('getUserStatistic'), this.$rest.api('getSocialAuthStatistic'), this.$rest.api('getSocialAuthSettings')])
                    .then(response => {
                        console.log(response);
                        if (response[0].success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get users!',
                                text: response[0].error.message
                            });
                            this.$router.back();
                        }
                        if (response[0].success === true) {
                            this.info.statistic = response[0].data

                        }
                        if (response[1].success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get users!',
                                text: response[1].error.message
                            });
                            this.$router.back();
                        }
                        if (response[1].success === true) {
                            let arr=[];
                            let obj = {};
                            for(let key in response[1].data){
                                response[2].data.forEach(el=>{
                                    if(el.id == key){
                                    obj.total = response[1].data[key];
                                    obj.name = el.name;
                                    obj.src = this.$rest.fsPath + el.icon;
                                    arr.push(obj);
                                    }
                                })
                            }
                            this.info.social = arr;

                        }
                        this.load = true;

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get users!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.load = true;
                    });

            },
        },
        created() {
            return this.getUserStatistic();
        }
    }
</script>
