export const state = () => ({
    news: null,
    oneNews: false,
    langs: null,
    groups: null,
    isActive: false,
    load: true,
    errorData: false,
    total_pages: 1,
    current_page: 1,
});

export const mutations = {
    changeData(state, news) {
        state.news = news;
    },
    changeOneNews(state, info) {
        state.oneNews = info;
    },
    changeLangs(state, langs) {
        state.langs = langs;
    },
};

export const actions = {
    getAllLangs({ commit }) {
        this.app.$rest.api('public/server/lang/all')
            .then(res => {
                commit('changeLangs', res.data.lang)
            })
    },
    getNewsFull({ commit },filter) {
        this.app.$rest.api('public/news/list/full',filter)
            .then(res => {
                commit('changeData', res.data)
            })
    },
    getOneNews({ commit }, id) {
        this.app.$rest.api('public/news/get/one', { id })
            .then(res => {
                commit('changeOneNews', res.data)
                console.log(res)
            })
    },
    createNews({ commit }, news) {
        news.news_id = news._id
        news.lang = news.lang.split('-')[0];
        news.imageId = news.imageid;
        console.log(news)
        return this.app.$rest.api('admin/news/create', news)
            .then(res => {
                console.log(res)
                return res;
            })
    },
    editNews({ commit }, news) {
        news.news_id = news._id
        news.lang = news.lang.split('-')[0];
        news.imageId = news.imageid;
        return this.app.$rest.api('admin/news/edit', news)
            .then(res => {
                console.log(res)
                return res;
            })
    },
    deleteNews({ commit }, id) {
        return this.app.$rest.api('admin/news/delete', { id })
            .then(res => {
                console.log(res)
                return res;
            })
    },
};
export const getters = {
    getData(state) {
        return state.news
    },
    getOneNews(state) {
        return state.oneNews
    },
    getLangs(state) {
        return state.langs
    },
    getLoad(state) {
        return state.load
    },
    getError(state) {
        return state.errorData
    },
    getOneNews(state) {
        return state.oneNews
    }
}
