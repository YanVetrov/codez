<template>
    <no-ssr>
        <ImageUploader
                field="image"
                class="uploader-image"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"

                v-model="showLocal"
                :width="width"
                :height="height"
                langType="en"
                :noRotate="false"
                :noCircle="true"
                :noSquare="true"
                :url="$rest.apiPath+'admin/files/upload/image/'"
                :params="params"
                :headers="headers"
                img-format="png"/>
    </no-ssr>
</template>

<script>
    import ImageUploader from 'vue-image-crop-upload/upload-2.vue';

    export default {
        components: {ImageUploader},
        props: {
            type: {type: String, required: true},
            width: {type: Number, required: true},
            height: {type: Number, required: true},
            show: {type: Boolean, default: false},
        },
        computed: {

            showLocal: {
                get() {
                    return this.show;
                },
                set(newValue) {
                    this.toggleShow(newValue);
                    return this.show;
                }
            }
        },
        data() {
            return {
                imageId: '',
                imageBase64: '',
                params: {
                    public: true,
                    type: this.type
                },
                headers: {
                    smail: '._~'
                }
            }
        },
        watch: {
            imageId: function (newVal, oldVal) {
                this.$emit('change-imageId', newVal);
                return newVal;

            },
            imageBase64: function (newVal, oldVal) {
                this.$emit('change-imageBase64', newVal);
                return newVal;
            }
        },
        methods: {

            toggleShow() {
                this.$emit('close');
            },
            cropSuccess(imageBase64) {
                console.log('cropSuccess=>');

                this.imageBase64 = imageBase64;
                return true;
            },

            cropUploadSuccess(jsonData, field) {
                console.log('cropUploadSuccess=>', jsonData);
                if (jsonData.success === true) {
                    this.imageId = jsonData.data._id;
                    return true;

                }

                this.imageBase64 = '';
                this.imageId = '';
                if (jsonData.error) {
                    this.$notify({
                        group: 'main',
                        duration: 5000,
                        type: 'error',
                        title: 'Error upload image!',
                        text: jsonData.error.message
                    })
                }
                return false;

            },
            cropUploadFail(status, field) {
                console.log('cropUploadFail', arguments);
                this.imageBase64 = '';
                this.imageId = '';
                this.$notify({
                    group: 'main',
                    duration: 5000,
                    type: 'error',
                    title: 'Error upload image!',
                    text: 'Please retry upload image'
                });
                return true;

            },

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
</style>