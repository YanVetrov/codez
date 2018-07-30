<template>

    <div class="list-contact-main border">
        <DataInfo :data="info" :page='{total_page,current_page}' v-if="load && info"></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>
<style lang='scss' scoped>
</style>
<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                info: 'contacts/getData',
                load: 'contacts/getLoad',
                errorData: 'contacts/getError',
            })

        },
        created() {
            this.$store.dispatch('contacts/getContacts')

        },
        methods: {
            getContacts(page) {
                this.$store.dispatch('contacts/getContacts')
            },
            deleteAdmin(contact_id) {

                this.$rest.api('deleteContact', { contact_id })
                    .then(res => {
                        console.log(res);
                        if (res.success) {

                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Contact successful deleted`,
                            });

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                        }
                        return this.getContacts();
                    })
                    .catch(err => {
                        return this.getContacts();
                    })

            },
            editAdmin(obj, newIndex) {
                newIndex ? obj.positionSort = newIndex : '';
                obj.contact_id = obj._id;
                this.$rest.api('editContact', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Contact successful edited`,
                            });


                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                            return this.getContacts();
                        }

                    })

            },
            sortAdmin(arr) {
                const contacts = arr.map((el, i) => {
                    return { id: el._id, positionSort: i + 1 };
                });

                return this.$rest.api('sortContact', { contacts })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Contact successful edited`,
                            });


                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                            return this.getContacts();
                        }

                    })

            }


        },
    }
</script>
