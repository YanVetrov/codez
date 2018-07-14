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
                pagination: true,
                status_load: false,
                current_page: this.$route.params.page,
                users: [],
                total_page: [],
                email: " ",
                last_name: " ",
                balance: '',
                first_name: '',
                showDetails: false,
                created: '',
                id: " ",
                rate: " ",
                load:false,
                errorData:false,
                info:true,

            }
        },
        methods: {
            getUserAdmin(page) {
                this.status_load = false;
                this.$rest.api('getUserAdmin', {page: page || 1, limit: 12})
                    .then(response => {
                        console.log(response);
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get users!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            this.current_page = response.data.count.select_page || 1;
                            this.info = response.data.users;
                            this.total_page = response.data.count.pages;

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
            return this.getUserAdmin(this.select_page);
        }
    }
</script>
