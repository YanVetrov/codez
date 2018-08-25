<template>

    <div>
        <DataInfo :data="info" v-if="load && info" @oncreate='newAdmin($event)'></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    
    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {
                load: true,
                errorData: false,
                info: true,

            }
        },
        methods: {
            newAdmin(admin) {
                this.load = false;
                let obj = {};
                admin.name && admin.name !== '' ? obj.name = admin.name : '';
                admin.link && admin.link !== '' ? obj.link = admin.link : '';
                admin.imageId && admin.imageId !== '' ? obj.imageId = admin.imageId : '';
                admin.size && admin.size !== '' ? obj.size = admin.size : '';
                admin.value && admin.value !== '' ? obj.value = admin.value : '';
                this.$rest.api('addContact', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'new contact added'
                            });
                        }
                        else {
                            this.$notify({
                                duration: 5000,
                                type: 'error',
                                title: 'Bad',
                                text: "Something wrong..."
                            })
                        }


                        this.load = true
                    })


            },
        }
    }
</script>
