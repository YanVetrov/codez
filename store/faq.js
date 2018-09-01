export const state = () => ({
    faq: false,
    langs: null,
    groups: null,
    load: false,
    isActive: false,
    total_pages: 1,
    current_page: 1,
    lang:'',
    group:'',
    search:'',
});

export const mutations = {
    changeFaq(state, faqs) {
        state.faq = faqs;
    },
    changeGroups(state, groups) {
        state.groups = groups;
    },
    changeLangs(state, langs) {
        state.langs = langs;
    },
    changeUpdate(state, update) {
        state.isActive = update
    },
    changeLoad(state, load) {
        state.load = load
    },
    changePages(state, current,total) {
        state.current_page = current;
        state.total_pages = total;
    },
    changeError(state, data) {
        state.errorData = data
    },
    changeLang(state,lang){
        state.lang = lang
    },
    changeGroup(state,group){
        state.group = group
    },
    changeSearch(state,search){
        state.search = search
    }
};

export const actions = {
    getFaqFull({ commit },filter) {
        // commit('changeLoad', false);
        Promise.all([this.app.$rest.api('getFaqFull', filter), this.app.$rest.api('getFaqGroup'), this.app.$rest.api('public/server/lang/all')])
            .then(res => {
                commit('changeLoad', true);
                commit('changeFaq', res[0].data);
                commit('changeGroups', res[1].data.faqGroups);
                commit('changeLangs', res[2].data.lang);
                console.log(res[0].data.faq)


            })
    },
    deleteFaq({ commit, dispatch }, id) {
        this.app.$rest.api('deleteFaq', { id })
            .then(res => {
                console.log(res);
                dispatch('getFaqFull');
            })
    }
};

export const getters = {
    getData(state) {
        return state.faq
    },
    getLangs(state) {
        return state.langs
    },
    getGroups(state) {
        return state.groups
    },
    getLoad(state) {
        return state.load
    },
    getCurrentPage(state) {
        return state.current_page
    },
    getTotalPages(state) {
        return state.total_pages
    }
}
