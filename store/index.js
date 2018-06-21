export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'ru'
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};

export const actions = {
    lang({ commit }, lang) {
        commit('SET_LANG', lang);
    }
};
