export const state = () => ({
    user: {},
});

export const mutations = {
    ADMIN(state, user) {
        state.user = user;
    }
};

export const actions = {
    admin({ commit }, user) {
        commit('ADMIN', user);
    }
};

export const getters = {
    checkAdmin: state => {
        return state.user;
    }
};
