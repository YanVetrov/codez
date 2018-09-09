export const state = () => ({
  close: true,
  lvl: false,
  tabs: {
    profile: false,
    settings: false,
    lang: false,
  }
});

export const mutations = {
  CLOSE(state) {
    state.close = !state.close;
  },
  ADMIN(state, lvl) {
    state.lvl = lvl;
  },
  changeTab(state, { tab, val }) {
    state.tabs[tab] = val
  },
  closeAll(state) {
    Object.keys(state.tabs).forEach(el => state.tabs[el] = false)
  }
};

export const actions = {
  close({ commit }) {
    commit('CLOSE')
  },
  admin({ commit }, lvl) {
    commit('ADMIN', lvl)
  },
};

export const getters = {
  list: state => state.menu,

  checkAdmin: state => state.lvl,

  close: state => state.close,

  tabState: state => val => state.tabs[val]

};
