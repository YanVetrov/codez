import api from '../storeConfig.js'

export const state = () => ({
    info: false,
    errorData: false,
    load: false,
    current_page: 1,
    total_page: 1,
});

export const mutations = {
    changeData(state, data) {
        state.info = data;
    },
    changeError(state, error) {
        state.error = error;
    },
    changeLoad(state, load) {
        state.load = load;
    },
    changeTotalPages(state, pages) {
        state.total_page = pages
    },
    changeCurrentPage(state, page) {
        state.page = page
    },

};

export const actions = {
    adminGetOrders({ commit }, data) {
        api('adminGetOrders', data)
            .then(res => {
                commit('changeLoad', true);
                if (res.success) {
                    commit('changeData', res.data.transactions);
                    commit('changeCurrentPage', res.data.count.select_page);
                    commit('changeTotalPages', res.data.count.pages);
                    
                }
                
            })
    }
};
export const getters = {
    getData(state) {
        return state.info
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
        return state.total_page
    }
}
