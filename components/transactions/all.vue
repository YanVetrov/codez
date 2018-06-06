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
        
        </div>
</template>

<script>
    import transactions from '~/components/transactions/transactions';
    export default {
        data() {
            return {
                filterId: '',
                startDate: '',
                endDate: '',
                currency1: '',
                currency2: '',
                transactions: [],
            }
        },
        methods: {
            getOrders() {
                this.$root.$emit('loading', true);
                // filter params
                let filterParam = {};
                if (this.currency1 && this.currency1 !== '')
                    filterParam.currency1 = this.currency1;
                if (this.currency2 && this.currency2 !== '')
                    filterParam.currency2 = this.currency2;
                if (this.startDate && this.startDate !== '')
                    filterParam.startDate = this.startDate;
                if (this.endDate && this.endDate !== '')
                    filterParam.endDate = this.endDate;
                if (this.filterId && this.filterId !== '')
                    filterParam.id = this.filterId;

                // send api req
                this.$rest.api('adminGetOrders', filterParam)
                    .then(res => {
                        this.transactions = res.data.transactions;
                        this.$root.$emit('loading', false);
                    })

            }
        },
        mounted() {
            return this.getOrders();
        },
        components: {
            transactions
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
