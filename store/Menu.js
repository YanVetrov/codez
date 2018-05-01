export const state = () => ({
  close: false,
  menu: [{
    name: 'Main',
    page: '/test',
    icon: '2',
    child: [
      {name: 'test11', page: '/test11', icon: '11'},
      {name: 'test22', page: '/test22', icon: '33'},
    ]
  }, {
    name: 'Main3',
    page: '/test3',
    icon: '3',
    child: []
  }]
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
