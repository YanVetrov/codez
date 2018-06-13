<template>
    <div class="row">
              название операции
        <input type="text" placeholder="example: 412423423" name="heh" v-model="operName"/>
        <select v-model="currency">
            <option disabled>Валюта</option>
            <option>валюта 1</option>
        </select>
        <button class="fcbtn btn btn-info btn-1b" @click="getAdminHistory" style="margin:5px"><i class='fa fa-search'></i></button>
        
        <history :history="history"></history>
         <paging
          :currentPage="current_page"
          :totalPages="total_page"
          @page-changed="getAdminHistory"
         />
         
        </div>
</template>

<script>
    import paging from '~/components/pagination';
    import history from '~/components/history/history';
    export default {
        data() {
            return {
                operName: '',
                currency: '',
                current_page: '',
                total_page: '',
                filterParam: {},
                history: [],
            }
        },
        methods: {
            getAdminHistory(page) {
                this.$root.$emit('loading', false);
                let obj = {}
                this.operName.trim() !== '' ? obj.operName = this.operName : '';
                this.currency !== '' ? obj.currency = this.currency : '';
                this.filterParam = obj;
                this.$rest.api('getAdminHistory', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.current_page = res.data.count.select_page || 1;
                            this.history = res.data.history;
                            this.total_page = res.data.count.pages;
                            
                            
                        }
                        else {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get history!',
                                text: res.error.message,
                            });
                           
                            this.$router.back();
                        }
                        this.$root.$emit('loading', true);

                    })
            },
        },
        components: {
            history,
            paging
        }

    }
</script>

<style scoped>
    input {
        margin: 15px;
        border: 1px;
        border-radius: 20px;
        padding: 4px;
        color: grey;
    }
</style>
