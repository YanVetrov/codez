export const state = () => ({
    faq: false,
    langs: null,
    groups: null,
    oneFaq: false,
    load: true,
    isActive: false,
    errorData: '',
    total_pages: 1,
    current_page: 1,
    lang: '',
    group: '',
    search: '',
});

export const mutations = {
    changeFaq(state, faqs) {
        state.faq = faqs;
    },
    changeOneFaq(state, faq) {
        state.oneFaq = faq;
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
    changePages(state, current, total) {
        state.current_page = current;
        state.total_pages = total;
    },
    changeError(state, data) {
        state.errorData = data
    },
    changeLang(state, lang) {
        state.lang = lang
    },
    changeGroup(state, group) {
        state.group = group
    },
    changeSearch(state, search) {
        state.search = search
    }
};

export const actions = {
    async getFaqFull({ commit, dispatch }, filter) {
        await dispatch('getLangsGroups')
        let faq = await this.app.$rest.api('public/faq/get/list', filter);
        await console.log(faq)
        await commit('changeFaq', faq.data.faq)
    },
    async getLangsGroups({ commit }) {
        if (!state.groups && !state.langs) {
            let groups = await this.app.$rest.api('public/faq/get/group')
            let langs = await this.app.$rest.api('public/server/lang/all')
            await commit('changeGroups', groups.data.faqGroups);
            await commit('changeLangs', langs.data.lang);
        }
    },
    async getOneFaq({ commit, state, dispatch }, id) {
        await dispatch('getLangsGroups')
        let faq = await this.app.$rest.api('public/faq/get/one', { id })
        await commit('changeOneFaq', faq.data)

    },
    async createFaq({ commit, state }, obj) {
        let res = await this.app.$rest.api('admin/faq/create', obj)
        console.log(res)
    },
    async editFaq({ commit, dispatch }, obj) {
        console.log(obj)
        obj.id = obj._id;
        obj.lang = obj.lang.split('-')[1];
        let res = await this.app.$rest.api('admin/faq/edit', obj)
        console.log(res)
            .catch(err => {
                //
            })
    },
    async deleteFaq({ commit, dispatch }, id) {
        let res = await this.app.$rest.api('admin/faq/delete', { id })
        await console.log(res);
        await dispatch('getFaqFull');
    }
};

export const getters = {
    getData(state) {
        return state.faq
    },
    getOneFaq(state) {
        return state.oneFaq
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
    getError(state) {
        return state.errorData
    },
    getCurrentPage(state) {
        return state.current_page
    },
    getTotalPages(state) {
        return state.total_pages
    }
}
