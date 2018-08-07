export const state = () => ({
    user: {},
});

export const mutations = {
    setAuth(state, user) {
        state.user = user;
    },
    deleteUser(state) {
        state.user = {};

    }
};

export const actions = {
    signIn({commit}, user) {
        commit('setAuth', user);
    },
    destroyUser({commit}, cb) {
        this.app.$rest.api('destroySession')
            .then(res => {
                commit('deleteUser');
                cb && cb();
            });
    }
};

export const getters = {
    checkAdmin: state => {
        return state.user;
    }
};