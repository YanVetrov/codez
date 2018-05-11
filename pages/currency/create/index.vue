<template>
    <div class="row">
        <div class="white-box">
            <notifications group="currency_create" classes="news-create-notifications" class="news-notify"/>
            <loading type="block" :status_load="status_load"/>
            создание валюты
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
                    type: 'currencies'
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
                            group: 'currency_create',
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
                    group: 'currency_create',
                    duration: 5000,
                    type: 'error',
                    title: 'Error upload image!',
                    text: 'Please retry upload image'
                })
            },

            postPost() {
                this.status_load = false;
                this.$rest.api('createCurrency',
                    {
                        imageId: this.imageId
                    })
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.afterPost = true;
                        }
                        if (response.success === false) {
                            this.$notify({
                                group: 'currency_create',
                                duration: 5000,
                                type: 'error',
                                title: 'Error create currency!',
                                text: response.error.message
                            })
                        }
                    })
                    .catch(() => {
                        this.$notify({
                            group: 'currency_create',
                            duration: 5000,
                            type: 'error',
                            title: 'Error create currency!',
                            text: 'Server error 500! =( try'
                        })
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