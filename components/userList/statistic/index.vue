<template>

    <div class="sidebar-width border users-list-toodo-sidebar--list">
        <DataInfo :data="info" v-if="load && info"></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>
<style lang='scss' scoped>
    
</style>
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

                        if (response[1].success === true && response[2].success === true&& response[0].success === true) {
                            this.info.statistic = response[0].data;
                            let socialStat = response[1].data;

                            const socialInfo = response[2].data
                                .map(el => {
                                    if (socialStat[el.id]) {
                                        return {
                                            total: socialStat[el.id],
                                            name: el.name,
                                            src: this.$rest.fsPath + el.icon,

                                        }
                                    }
                                    return undefined;
                                })
                                .filter(fel => {
                                    return !!fel
                                });

                            this.info.social = socialInfo;
                            this.load = true;
                            return socialInfo
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
