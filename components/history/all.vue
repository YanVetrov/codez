<template>
    <div class="row">
              название операции
        <input type="text" placeholder="example: 412423423" name="heh" v-model="operName"/>
        <select v-model="currency">
            <option disabled>Валюта</option>
            <option>валюта 1</option>
        </select>
        <button class="fcbtn btn btn-info btn-1b" @click="getOrders" style="margin:5px"><i class='fa fa-search'></i></button>
        
        <history :history="history"></history>
         <paging
          :currentPage="current_page"
          :totalPages="total_page"
          @page-changed="getHistory"
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
                history: [{

                        currency: 'Private UAH',
                        short: 'UAH',
                        total: '11',
                        operation: "change",
                        time: "24.06.2018 13:44",
                        user: "Sergey12",
                        id: 'id:422',
                        ip: '194.22.42.122',
                        email: 'serg@gmail.com',

                    },
                    { currency: 'Private UAH', short: 'UAH', total: '11', operation: "change", time: "24.06.2018 13:44", user: "Sergey12", id: 'id:422', ip: '194.22.42.122', email: 'serg@gmail.com', },
                ],
            }
        },
        methods: {
            getOrders() {
                this.$root.$emit('loading', true);
                let obj = {}
                this.operName.trim() !== '' ? obj.operName = this.operName : '';
                this.currency !== '' ? obj.currency = this.currency : '';
                this.filterParam = obj;
                this.$rest.api('adminGetOrders', obj)
                    .then(res => {
                        this.current_page = res.data.count.select_page || 1;
                        this.history = res.data.history;
                        this.total_page = res.data.count.pages;
                        this.$root.$emit('loading', false);
                    })

            },
            getHistory(page) {
                this.$root.$emit('loading', false);
                let pages = { page: page || 1, limit: 10 },
                    filter = this.filterParam,
                    obj = { pages, filter };
                this.$rest.api('getHistory', obj)
                    .then(res => {
                        if (res.success) {
                            this.current_page = res.data.count.select_page || 1;
                            this.history = res.data.history;
                            this.total_page = res.data.count.pages;
                        }
                        if (!res.success) {
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
