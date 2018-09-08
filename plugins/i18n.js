import Vue from 'vue'
import VueI18n from 'vue-i18n'
import conf from '@/locales/config.js'




export default ({app, store}) => {
    app.i18n = new VueI18n({
        locale: store.getters['local/locale'],
        fallbackLocale: conf.defaultLang,
        silentTranslationWarn: true,
        messages: conf.locales
    });

};

Vue.use(VueI18n);

