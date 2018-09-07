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
    }
};

export const actions = {
    getProfile({commit, dispatch}, userId) {
        return this.app.$rest.api('admin/users/profile/get', {userId})
            .then(profile => {
                return commit('changeData', profile.data.user)
            })
            .catch(err => {
                console.error(err);
                new Error('Error actions.getProfile');
                return Promise.reject(err);
            });

    },
    editProfile({commit, dispatch}, obj) {
        obj.userId = obj._id;
        obj.rate = obj.affiliate.rate;
        return this.app.$rest.api('admin/users/profile/edit', obj)
            .then(res => {
                console.log('actions.editProfile:', res);
                return res
            })
            .catch(err => {
                console.error(err);
                new Error('Error actions.editProfile');
                return Promise.reject(err);
            });
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
};