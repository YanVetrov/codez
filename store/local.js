export const state = () => {
    const locale = ((process.browser) ? window.localStorage.getItem('locale') : undefined);
    return {
        locales: ['ru', 'en'],
        selectLang: locale
    }
};

export const mutations = {
    setLang(state, locale) {

        if (state.locales.indexOf(locale) !== -1) {
            state.selectLang = locale;

            if (process.browser) {
                window.localStorage.setItem('locale', locale);

            }
        }
    }
};

export const actions = {
    change({commit}, lang) {
        commit('setLang', lang);
    }
};

export const getters = {
    locale: state => {
        return ((process.browser) ? window.localStorage.getItem('locale') : state.selectLang);
    }
};