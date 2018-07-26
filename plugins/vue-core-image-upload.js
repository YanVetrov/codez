import Vue from 'vue';
import VueCoreImageUpload from 'vue-image-crop-upload';

import imageUploader from "@/components/_utils/imageUploader/index";

Vue.component('imgUploader', imageUploader);
Vue.component('ImageUploader', VueCoreImageUpload);
