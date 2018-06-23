<template>
    <div class="row">
        <!--<notifications group="partner_create" classes="partner-create-notifications" class="partner-notify"/>-->
        <!--<loading type="block" :status_load="status_load "/>-->
        <div class="white-box">
            <a @click="back()">Back</a>

            <label>Partner create</label>
            <br>
            <label>Изображение партнера</label>
            <a class="btn" @click="toggleShow">Загрузить фото</a>
            <ImageUploader field="image"
                           class="uploader-image"
                           @crop-success="cropSuccess"
                           @crop-upload-success="cropUploadSuccess"
                           @crop-upload-fail="cropUploadFail"
                           v-model="show"
                           :width="360"
                           :height="150"
                           langType="en"
                           :noRotate="false"
                           :noCircle="true"
                           :noSquare="true"
                           :url="$rest.apiPath+'uploadImage/'"
                           :params="params"
                           :headers="headers"
                           img-format="png"></ImageUploader>
            <br>
            <img :src="imgDataUrl">
            <label>Title:</label>
            <input type="text" class="form-control form-control-line" placeholder="..." v-model="title">
            <label>link:</label>
            <input type="text" class="form-control form-control-line" placeholder="..." v-model="link">
            <button type="button" class="btn btn-outline btn-primary btn-1e" @click="createPartner() "> отправить
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        // components: {Loading},
        data() {
            return {
                title: '',
                link: '',
                params: {
                    public: true,
                    type: 'partners'
                },
                headers: {
                    smail: '._~'
                },
                imgDataUrl: '',
                imageId: '',
                show: false,

            }
        },
        methods: {
            back() {
                return this.$router.back()
            },
            createPartner() {
                this.status_load = false;
                this.$rest.api('createPartner', {
                    title: this.title,
                    imageId: this.imageId,
                    link: this.link
                })
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
            },
            toggleShow() {
                this.show = !this.show;
            },
            cropSuccess(imgDataUrl) {
                this.imgDataUrl = imgDataUrl;
            },

            cropUploadSuccess(jsonData, field) {
                if (jsonData.success === true) {
                    this.imageId = jsonData.data._id;
                }
                else {
                    this.imgDataUrl = '';
                    this.imageId = '';
                    if (jsonData.error) {
                        this.$notify({
                            group: 'news_create',
                            duration: 5000,
                            type: 'error',
                            title: 'Error upload image!',
                            text: jsonData.error.message
                        })
                    }
                }
            },
            cropUploadFail(status, field) {
                this.imgDataUrl = '';
                this.imageId = '';
                this.$notify({
                    group: 'news_create',
                    duration: 5000,
                    type: 'error',
                    title: 'Error upload image!',
                    text: 'Please retry upload image'
                })
            },

        }
    }
</script>