
export const state = () => ({
    info: false,
    load: false,
    errorData: false,
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
    }

};

export const actions = {
    getContacts({ commit }) {
        this.app.$rest.api('public/contacts/list')
            .then(res => {
                commit('changeLoad', true);
                if (res.success) {
                    commit('changeData', res.data.contacts);

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
}
