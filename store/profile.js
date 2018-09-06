export const state = () => ({
    data: false,
    load: true,
    errorData: '',
});

export const mutations = {
    changeData(state, data) {
        state.data = data;
    },
    changeLoad(state, load) {
        state.load = load
    },
    changeError(state, data) {
        state.errorData = data
    },
};

export const actions = {
    async getProfile({ commit, dispatch }, userId) {
        let profile = await this.app.$rest.api('admin/users/profile/get', { userId }).catch(err=>{});
        await commit('changeData', profile.data.user)
        await console.log(profile)
    },
    async editProfile({ commit, dispatch }, obj) {
        obj.id = obj._id
        obj.rate = obj.affiliate.rate
        console.log(obj)
        let res = await this.app.$rest.api('admin/users/profile/edit', obj)
        console.log(res)
    },

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
}
