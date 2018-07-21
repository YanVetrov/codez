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

    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {
                current_page: this.$route.params.page,
                users: [],
                total_page: [],
                load: false,
                errorData: false,
                info: {},
                filter: {},

            }
        },
        methods: {
            getAdmins(page) {
                this.load = false;
                this.$rest.api('getContacts', { page, limit: 10 })
                    .then(res => {
                        if (res.success) {
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
                        this.load = true;

                    })
                    .catch(err => {
                        this.load = true;
                    })
            },
            deleteAdmin(contact_id) {

                this.$rest.api('deleteContact', { contact_id })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.users.forEach((el, i) => {
                                if (el.id == contact_id) {
                                    this.info.users.splice(i, 1);
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
                        return this.getAdmins();
                    })
                    .catch(err => {
                        return this.getAdmins();
                    })

            },
            editAdmin(obj, newIndex) {
                console.log(obj)
                newIndex ? obj.positionSort = newIndex : '';
                obj.contact_id = obj._id
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
                            return this.getAdmins();
                        }
                        
                    })

            },
            sortAdmin(arr) {
                let newArr=[]
                let obj={}
                arr.forEach((el,i)=>{
                    obj.id=el._id;
                    obj.positionSort=i+1;
                    newArr.push(obj);
                })
                console.log(newArr)
                this.$rest.api('sortContact', newArr)
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
                             return this.getAdmins();
                        }
                       
                    })

            }


        },
        mounted() {
            return this.getAdmins();
        }
    }
</script>
