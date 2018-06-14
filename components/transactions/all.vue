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
        <button class="fcbtn btn btn-info btn-1b" @click="getTransactions" style="margin:5px">accept</button>
        
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
            getTransactions(page) {
                this.$root.$emit('loading', false);
                let filters = {};
                this.currency1 && this.currency1 !== '' ? filters.currency1 = this.currency1 : '';
                this.currency2 && this.currency2 !== '' ? filters.currency2 = this.currency2 : '';
                this.startDate && this.startDate !== '' ? filters.startDate = this.startDate : '';
                this.endDate && this.endDate !== '' ? filters.endDate = this.endDate : '';
                this.filterId && this.filterId !== '' ? filters.id = this.filterId : '';
                this.filterParam = filters;
                let pages = { page, limit: 10 },
                    obj = { filters, pages }
                this.$rest.api('adminGetOrders', obj)
                    .then(res => {
                        console.log(res)
                        if (res.success === true) {
                            this.transactions = res.data.transactions;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

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
            this.$root.$on('delete', (id) => {
                console.log('ok')
                this.transactions.forEach((el, i) => {
                    if (el.id == id) {
                        this.transactions.splice(i, 1);
                    }

                })


            })
            return this.getTransactions();
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
