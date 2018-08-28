export const state = () => ({
  close: true,
  lvl:false,
});

export const mutations = {
  CLOSE(state) {
    state.close = !state.close;
  },
  ADMIN(state,lvl){
    state.lvl = lvl;
  }
};

export const actions = {
  close({commit}) {
    commit('CLOSE')
  },
  admin({commit},lvl){
    commit('ADMIN',lvl)
  }
};

export const getters = {
  list: state => {
    return state.menu;
  },
  checkAdmin: state =>{
    return state.lvl;
  },
  close: state => {
    return state.close;
  }
};
