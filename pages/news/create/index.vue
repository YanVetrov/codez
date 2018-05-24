<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box " style="text-align: center" v-if="afterPost === true">
                <img src='~/static/images/ok.svg' width="250px" height="250px">
                <h2> Успешно опубликовано </h2>
                <button type="button" class=" btn-outline btn-primary btn-1e" @click="backToCreateNews()">
                    Создать еще одну новость
                </button>
            </div>


            <div v-else class="white-box">
                <notifications group="news_create" classes="news-create-notifications" class="news-notify"/>
                <loading type="block" :status_load="status_load"/>
                <h3 class="box-title">Создание новости </h3>
                <p class="text-muted m-b-30 font-12">Инфо текст новстей</p>

                <div>
                    <label>Изображение новости</label>
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

                </div>
                <br>

                <label for="label001">Заголовок новости</label>
                <input id='label001' type="text" class="form-control form-control-line" placeholder="..."
                       v-model="title">

                <div id="app" class="form-group" style="margin-top: 20px">
                    <label>Текст новости</label>
                    <vue-editor v-model="content"></vue-editor>
                </div>


                <div class="btn-group">
                    <button type="button" class="fcbtn btn btn-outline btn-primary btn-1e" @click="postPost()">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Loading from "~/components/loading";

    export default {
        components: {Loading},
        data() {
            return {
                status_load: true,
                afterPost: false,
                title: '',
                content: '',
                imageId: '',

                show: false,
                params: {
                    public: true,
                    type: 'news'
                },
                headers: {
                    smail: '*_~'
                },
                imgDataUrl: ''
            };
        },
        methods: {
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


            backToCreateNews() {
                this.afterPost = false;
                this.title = '';
                this.content = '';
            },
            postPost() {

                this.status_load = false;
                this.$rest.api('createNews',
                    {
                        title: this.title,
                        imageId: this.imageId,
                        content: this.content
                    })
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.afterPost = true;
                        }
                        if (response.success === false) {
                            this.$notify({
                                group: 'news_create',
                                duration: 5000,
                                type: 'error',
                                title: 'Error create news!',
                                text: response.error.message
                            })
                        }
                    })
                    .catch(() => {
                        this.err_n = true;
                    })
                    .finally(() => {
                        this.status_load = true;
                    });

            }


        }
    }

</script>

<style>
    /*uploader style*/
    .vue-image-crop-upload.uploader-image .vicp-wrap {
        width: 300px;
    }

    .vue-image-crop-upload.uploader-image .vicp-wrap .vicp-operate {
        right: auto;
        bottom: 10px;
    }

    .vue-image-crop-upload.uploader-image .vicp-wrap .vicp-step1 .vicp-drop-area {
        height: 250px;
        padding: 60px 10px;
    }

    /*uploader style*/

    .news-notify {
        position: absolute;
        top: auto !important;
        bottom: 35px !important;
        right: 25px !important;
        z-index: 1;
    }

    .news-create-notifications {
        padding: 10px;
        width: 100%;

        margin: 0 5px 5px;

        font-size: 12px;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;
    }

    .news-create-notifications.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    .news-create-notifications.error {
        background: #E54D42;
        border-left-color: #B82E24;
    }

    .news-create-notifications.success {
        background: #68CD86;
        border-left-color: #42A85F;
    }


</style>