export const state = () => ({
    data: false,
    load: true,
    errorData: '',
    total_pages: 1,
    current_page: 1,
});

export const mutations = {
    changeData(state, data) {
        state.data = data;
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
    changeSearch(state, search) {
        state.search = search
    }
};

export const actions = {
    
};

export const getters = {
    getData(state) {
        return state.data
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
