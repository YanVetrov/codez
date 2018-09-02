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
    getPartnersAll({ commit }, data) {
        this.app.$rest.api('public/partners-block/list', data || { page: 1, limit: 10 })
            .then(res => {
                console.log(res)
                commit('changeLoad', true);
                if (res.success) {
                    commit('changeData', res.data);

                }

            })
    },
    deletePartner({ commit, dispatch }, partner) {
        console.log(partner)
        this.app.$rest.api('admin/partners-block/delete', {partner_id:partner})
            .then(res => {
                console.log(res)
                dispatch('getPartnersAll', { page: 1, limit: 10 })

            })
    },
    createPartner({ commit, dispatch }, partner) {
        console.log(partner)
        this.app.$rest.api('admin/partners-block/create', partner)
            .then(res => {
                console.log(res)
                dispatch('getPartnersAll', { page: 1, limit: 10 })

            })
    },
    editPartner({ commit, dispatch }, partner) {
        console.log(partner)
        this.app.$rest.api('admin/partners-block/edit', partner)
            .then(res => {
                console.log(res)
                dispatch('getPartnersAll', { page: 1, limit: 10 })

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
