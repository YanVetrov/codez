import api from '../storeConfig.js'


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
    getServerStatus({ commit }) {
        api('getServerStatus')
            .then(res => {
                commit('changeLoad', true);
                if (res.success) {
                    commit('changeData', res.data);

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
