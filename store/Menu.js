export const state = () => ({
  close: false
});

export const mutations = {
  CLOSE(state) {
    state.close = !state.close;
  }
};

export const actions = {
  close({commit}) {
    commit('CLOSE')
  },
};

export const getters = {
  list: state => {
    return state.menu;
  },
  close: state => {
    return state.close;
  }
};
