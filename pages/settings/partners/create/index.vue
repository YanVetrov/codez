<template>
        <div class="row">
            <!--<notifications group="partner_create" classes="partner-create-notifications" class="partner-notify"/>-->
            <!--<loading type="block" :status_load="status_load "/>-->
            <div class="white-box">
            <label>Partner create</label>
                <br>
                <label>Title:</label>
                <input type="text" class="form-control form-control-line" placeholder="..." v-model="title">
                <label>link:</label>
                <input type="text" class="form-control form-control-line" placeholder="..." v-model="link">
                <label>imageId:</label>
                <input type="text" class="form-control form-control-line" placeholder="..." v-model="imageId">
            </div>
                <button type="button" class="btn btn-outline btn-primary btn-1e" @click="createPartner() "> отправить</button>
        </div>
</template>

<script>
    export default {
        // components: {Loading},
        data() {
            return {
                title:'',
                link:'',
                imageId:" "
            }
        },
        methods: {
            createPartner() {
                this.status_load = false;
                this.$rest.api('createPartner', {title: this.title, imageId:this.imageId, link:this.link})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            // this.status_load = true;
                            // this.afterPost = true;
                            // this.succses_page = true;
                            // this.text = 'Успешно опубликовано';
                        }
                        if (response.success === false) {
                            // this.status_load = true;
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get partner !',
                                text: 'Server error 500! Please retry.\n' + response.error.message
                            });
                        }
                    })
            }
        }
    }
</script>