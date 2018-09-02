export const state = () => ({
    filterProps: [{ name: 'Все типы', value: 'all' }, { name: 'Авторизации', value: 'auth' }],
    current_page: 1,
    total_page: 1,
    history: [],
});

export const mutations = {
    changeData(state, history) {
        state.history = history;
    },
    changeOneNews(state, info) {
        state.oneNews = info;
    },
    changeLangs(state, langs) {
        state.langs = langs;
    },
};

export const actions = {
    getHistory({ commit, state }, page) {
        this.app.$rest.api('admin/timeline/get', { page })
            .then(res => {
                console.log(res);
                if (res.success) {
                    state.current_page = res.data.count.select_page || 1;
                    state.history = res.data.history;
                    state.total_page = res.data.count.pages;


                }
                else {
                    this.app.$notify({
                        group: 'main',
                        duration: 5000,
                        type: 'error',
                        title: 'Error get history!',
                        text: res.error.message,
                    });

                    this.app.$router.back();
                }

            })
    },

};
export const getters = {
    getData(state) {
        return state.history
    },
    getLoad(state) {
        return state.load
    },
    getError(state) {
        return state.errorData
    },
    getFilter(state) {
        return state.filterProps
    },
    getCurrentPage(state) {
        return state.current_page
    },
    getTotalPages(state) {
        return state.total_pages
    }

}
