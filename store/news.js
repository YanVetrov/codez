
export const state = () => ({
    news: null,
    oneNews: false,
    langs: null,
    groups: null,
    isActive: false,
});

export const mutations = {
    changeData(state, info) {
        state.info = info;
    },
    changeOneNews(state, info) {
        state.oneNews = info;
    },
    changeLangs(state, langs) {
        state.langs = langs;
    },
};

export const actions = {
    getNewsFull({ commit }) {
        Promise.all([this.app.$rest.api('getNewsFull'), this.app.$rest.api('getAllLang')])
            .then(res => {
                commit('changeData', res[0].data.news)
                commit('changeLangs', res[1].data.lang)
            })
    },
    getOneNews({ commit }, news_id) {
        this.app.$rest.api('getOneNews', { news_id })
            .then(res => {
                commit('changeOneNews', res.data.news)
            })
    },
    createNews({ commit }, news) {
        return this.app.$rest.api('createNews', news)
            .then(res => {
                return res;
            })
    },
    deleteNews({ commit }, news_id) {
        return this.app.$rest.api('deleteNews', { news_id })
            .then(res => {
                return res;
            })
    },
};
export const getters = {
    getData(state) {
        return state.info
    },
    getLangs(state) {
        return state.langs
    },
    getOneNews(state) {
        return state.oneNews
    }
}
