import Vue from 'vue'
import VueI18n from 'vue-i18n'
import conf from '@/locales/config.js'


export default ({app, store, params}) => {
    app.i18n = new VueI18n({
        locale: store.state.locale,
        fallbackLocale: params.lang || 'ru',
        silentTranslationWarn: true,
        messages: conf.locales
    });
    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return /${link}/
        }

        return /${app.i18n.locale}${link}/
    }
}
Vue.use(VueI18n);
