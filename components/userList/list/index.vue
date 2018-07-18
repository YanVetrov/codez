<template>

    <div class="users-list-toodo-main border">
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
                load:false,
                errorData:false,
                info:{},
                filter:{},

            }
        },
        methods: {
            getUserAdmin(page,filter) {
                this.status_load = false;
                filter?'':filter={};
                let obj = {page: page || 1, limit: 12,sortType:filter.sortType ||1,search:filter.search||''};
                console.log(obj);
                this.$rest.api('getUserAdmin', obj)
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
                            // this.$router.back();
                        }
                        if (response.success === true) {
                            this.current_page = response.data.count.select_page || 1;
                            this.info.users = response.data.users;
                            this.info.placehold = 'Поиск по сайту'
                            this.info.tabs = [{name:'Активные',id:'active'},{name:'Не подтвержденные',id:'notproof'},{name:'Заблокированые',id:'blacklist'},]
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
                        // this.$router.back();
                        this.load = true;
                    });

            },
        },
        created() {
            return this.getUserAdmin(this.select_page);
        }
    }
</script>
