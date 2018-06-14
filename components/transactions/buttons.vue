<template>
    
                <div class="row">
                    <div class="col-lg-6 col-sm-12" style="width:100%">
                        <div class="white-box">
                            <div class="button-box">
                                <button class="fcbtn btn btn-success btn-outline btn-1b" @click="actionOrder(id,'ok')">ok</button>
                                <button class="fcbtn btn btn-info btn-outline btn-1b" @click="actionOrder(id,'notPaid')">not paid</button>
                                <button class="fcbtn btn btn-info btn-outline btn-1b" @click="actionOrder(id,'returnOrder')">return</button>
                                <button class="fcbtn btn btn-danger btn-outline btn-2b" @click="actionOrder(id,'trash')">in trash</button>
                            </div>
                        </div>
                    </div>
                </div>



</template>

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
