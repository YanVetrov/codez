<template>
                
                  <div class="table-btn-group">
                            <a href="/" class="btn-table " @click="actionOrder(id,'trash')"><span class="icon-delete"></span></a>
                            <a href="/" class="btn-table" @click="actionOrder(id,'ok')"><span class="icon-checked-dash"></span></a>
                            <a href="/" class="btn-table" @click="actionOrder(id,'returnOrder')"><span class="icon-attention-dash"></span></a>
                   </div>
</template>
<style lang='scss' scoped>
</style>
<script>
    export default {
        props: ['id'],
        methods: {
            actionOrder(id, action) {
                let link;
                action == 'ok' ? link = 'okOrder' : '';
                action == 'notPaid' ? link = 'notPaidOrder' : '';
                action == 'returnOrder' ? link = 'returnOrder' : '';
                action == 'trash' ? link = 'trashOrder' : '';
                this.$rest.api(link, { id })
                    .then(res => {
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Order ${res.data.id} success ${res.data.operation}`,
                            });
                            action=='trash'?this.$root.$emit('deleteOrder', id):'';

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
        }
    }
</script>

<style scoped>
    .col-sm-6 {
        width: 100%;
    }

    h3 img {
        width: 35px;
        margin: 5px;
        height: 35px;
    }

    input {
        margin: 15px;
        border: 1px;
        border-radius: 20px;
        padding: 4px;
        color: grey;
    }
</style>
