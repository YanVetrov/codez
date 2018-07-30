<template>

    <div>
        <DataInfo 
        :data='info'
        v-if="load"
        @publish="save($event)"
        >
        </DataInfo>
        
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
                info: {},
                load: false,
                errorData: false,


            }
        },
        methods: {
            save(obj) {
                this.load = false
                this.$rest.api('createFaq', obj)
                    .then(res => {
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'Faq successful created'
                            })
                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error ...',
                                text: res.error.message,
                            })
                        }
                        this.load = true
                    })
                    .catch(err => {
                        this.load = true
                    })


            },
            update() {
                Promise.all([this.$rest.api('getFaqGroup'), this.$rest.api('getAllLang')])
                    .then(res => {
                        this.info.groups = res[0].data.faqGroups
                        this.info.langs = res[1].data.lang;
                        this.info.faq = {};
                        this.load = true;
                    })
            }
        },

        created() {
            this.update();
        }

    }
</script>
