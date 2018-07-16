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
        components: {DataInfo, WaitInfo},
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
                        if (response[1].success === true && response[2].success === true) {
                            let socialStat = response[1].data;

                            const socialInfo = response[2].data.map(el => {
                                if (socialStat[el.id]) {
                                    return {
                                        total: socialStat[el.id],
                                        name: el.name,
                                        src: this.$rest.fsPath + el.icon,

                                    }
                                }
                                return undefined;
                            }).filter(fel => {
                                return !!fel
                            });

                            this.info.social = socialInfo;
                            this.load = true;
                            return response
                        }
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get users!',
                            text: response[1].error.message
                        });
                        this.$router.back();

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
