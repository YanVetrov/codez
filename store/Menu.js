export const state = () => ({
  close: false,
  lvl:false,
});

export const mutations = {
  CLOSE(state) {
    state.close = !state.close;
  },
  ADMIN(state){
    state.lvl = true;
  }
};

export const actions = {
  close({commit}) {
    commit('CLOSE')
  },
  admin({commit}){
    commit('ADMIN')
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
