export const state = () => ({
  lvl:false,
});

export const mutations = {
  ADMIN(state,lvl){
    state.lvl = lvl;
  }
};

export const actions = {
  admin({commit},lvl){
    commit('ADMIN',lvl)
  }
};

export const getters = {
  checkAdmin: state =>{
    return state.lvl;
  }
};
