<template>
    <div class="row">
        ID
        <input type="text" placeholder="example: 412423423" name="heh" v-model="filterId"/>
        Start date
        <input type="date" placeholder="dd/mm/yy" name="startDate" v-model="startDate"/>
        End date
        <input type="date" placeholder="dd/mm/yy" name="endDate" v-model="endDate"/>
        Currency 1
        <select v-model="currency1">
            <option>валюта 1</option>
        </select>
        Currency 2
        <select v-model="currency2">
            <option>валюта 2</option>
        </select>
        <button class="fcbtn btn btn-info btn-1b" @click="getOrders" style="margin:5px">accept</button>
        
        <transactions :transactions="transactions" ></transactions>
         <paging
          :currentPage="current_page"
          :totalPages="total_page"
          @page-changed="getTransactions"
         />
        </div>
</template>

<script>
    import paging from '~/components/pagination';
    import transactions from '~/components/transactions/transactions';
    export default {
        data() {
            return {
                filterId: '',
                startDate: '',
                endDate: '',
                currency1: '',
                currency2: '',
                current_page: '',
                total_page: '',
                transactions: [],
                filterParam: {}
            }
        },
        methods: {
            getOrders() {
                this.$root.$emit('loading', true);

                let filterParam = {};
                this.currency1 && this.currency1 !== '' ? filterParam.currency1 = this.currency1 : '';
                this.currency2 && this.currency2 !== '' ? filterParam.currency2 = this.currency2 : '';
                this.startDate && this.startDate !== '' ? filterParam.startDate = this.startDate : '';
                this.endDate && this.endDate !== '' ? filterParam.endDate = this.endDate : '';
                this.filterId && this.filterId !== '' ? filterParam.id = this.filterId : '';
                this.filterParam = filterParam;

                this.$rest.api('adminGetOrders', filterParam)
                    .then(res => {
                        this.current_page = res.data.count.select_page || 1;
                        this.transactions = res.data.transactions;
                        this.total_page = res.data.count.pages;
                        this.$root.$emit('loading', false);
                    })
                    .catch(err => {
                        this.$root.$emit('loading', false);
                    })

            },
            getTransactions(page) {
                this.$root.$emit('loading', false);
                let pages = { page: page || 1, limit: 10 },
                    filter = this.filterParam,
                    obj = { pages, filter }
                this.$rest.api('getTransactions', obj)
                    .then(res => {
                        if (res.success) {
                            this.current_page = res.data.count.select_page || 1;
                            this.transactions = res.data.transactions;
                            this.total_page = res.data.count.pages;
                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get transactions!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.$root.$emit('loading', true);

                    })
            },
        },
        mounted() {
            return this.getOrders();
        },
        components: {
            transactions,
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
