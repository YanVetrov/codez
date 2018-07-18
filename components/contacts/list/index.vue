<template>

    <div>
        <DataInfo :data="info" :page='{total_page,current_page}' v-if="load && info"></DataInfo>
        
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
                current_page: this.$route.params.page,
                users: [],
                total_page: [],
                load:false,
                errorData:false,
                info:{},
                filter:{},

            }
        },
       methods: {

            newAdmin() {
                this.load=false;
                let obj = {};
                this.name && this.name !== '' ? obj.name = this.name : '';
                this.link && this.link !== '' ? obj.link = this.link : '';
                this.value && this.value !== '' ? obj.value = this.value : '';
                this.$rest.api('addContact', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.push(obj);
                            this.$notify({
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'new contact added'
                            });
                            this.show = false;


                        }
                        else {
                            this.$notify({
                                duration: 5000,
                                type: 'error',
                                title: 'Bad',
                                text: "Something wrong..."
                            })
                        }


                        this.load=true;
                    })


            },
            getAdmins(page) {
                this.load=false;
                this.$rest.api('getContacts', { page, limit: 10 })
                    .then(res => {
                        if (res.success) {
                            res.data.contacts.forEach(el => {
                                el.edit = false;
                            })
                            this.info.users = res.data.contacts;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get admins!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.load=true;

                    })
                    .catch(err => {
                        this.load=true;
                    })
            },
            deleteAdmin(contact_id) {
                this.$rest.api('deleteContact', { contact_id })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.forEach((el, i) => {
                                if (el.id == contact_id) {
                                    this.admins.splice(i, 1);
                                }

                            })
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
                        this.load=true;
                    })
                    .catch(err => {
                        this.load=true;
                    })

            },
            editAdmin(value, name, contact_id, link) {

                this.$rest.api('editContact', { value, name, contact_id, link })
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
                        }
                    })

            }


        },
        mounted() {
            return this.getAdmins();
        }
    }
</script>
