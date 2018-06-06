<template>
    <div class="row">
              название операции
        <input type="text" placeholder="example: 412423423" name="heh" v-model="operName"/>
        <select v-model="currency">
            <option disabled>Валюта</option>
            <option>валюта 1</option>
        </select>
        <button class="fcbtn btn btn-info btn-1b" @click="getOper" style="margin:5px"><i class='fa fa-search'></i></button>
        
        <history :history="history"></history>
        
        </div>
</template>

<script>
    import history from '~/components/history/history';
    export default {
        data() {
            return {
                operName:'',
                currency:'',
                history: [
                    { currency: 'Private UAH', short: 'UAH', total: '11', operation: "1", time: "24.06.2018 13:44", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                    { currency: 'Private UAH', short: 'UAH', total: '15', operation: "1", time: "21.05.2018 24:54", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                    { currency: 'Private UAH', short: 'UAH', total: '223', operation: "1", time: "24.04.2018 13:44", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                    { currency: 'Private UAH', short: 'UAH', total: '55', operation: "1", time: "14.03.2018 23:34", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                    { currency: 'Private UAH', short: 'UAH', total: '32', operation: "1", time: "22.03.2018 13:44", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                    { currency: 'Private UAH', short: 'UAH', total: '235', operation: "1", time: "25.02.2018 12:54", user: "Sergey12[id:422] serg@gmail.com 194.22.42.122 " },
                ],
            }
        },
        methods: {
            getOrders() {
                this.$root.$emit('loading', true);
                // filter params
                let obj = {}
                this.operName.trim()!==''?obj.operName=this.operName:'';
                this.currency!==''?obj.currency=this.currency:'';
                console.log(obj);

                // send api req
                this.$rest.api('adminGetOrders', obj)
                    .then(res => {
                      
                        this.$root.$emit('loading', false);
                    })

            }
        },
        components: {
            history
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
