
export const state = () => ({
    info: false,
    errorData: false,
    load: false,
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

};

export const actions = {
    getAllParsers({ commit }, data) {
        commit('changeLoad', false);
        this.app.$rest.api('admin/parser/list', data || { page: 1, limit: 12 })
            .then(response => {
                console.log(response.data);
                commit('changeLoad', true);
                if (response.success === true) {
                    commit('changeData', response.data)
                }


            })
    },
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
}
