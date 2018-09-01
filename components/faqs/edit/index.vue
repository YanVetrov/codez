<template>

    <div>
        <DataInfo 
        :data='info'
        v-if="load"
        @publish="editFaq($event)"
        @delete="deleteFaq($event)"
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
            editFaq(obj) {
                obj.id=obj._id;
                obj.lang=obj.lang.split('-')[1];
                this.load = false
                this.$rest.api('editFaq', obj)
                    .then(res => {
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'Faq successful edited'
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
            deleteFaq(id) {
                this.load = false
                this.$rest.api('admin/faq/delete', {id})
                    .then(res => {
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'Faq successful deleted'
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
                let id = this.$route.params.id
                Promise.all([this.$rest.api('public/faq/get/group'), this.$rest.api('public/server/lang/all'),this.$rest.api('public/faq/get/one', { id })])
                    .then(res => {
                        this.info.groups = res[0].data.faqGroups
                        this.info.langs = res[1].data.lang;
                        this.info.faq = res[2].data;
                        this.info.faq.canDelete = true;
                        this.load = true;
                    })
            }
        },

        created() {
            this.update();
        }

    }
</script>
