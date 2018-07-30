import api from '../storeConfig.js'


export const state = () => ({
    faq: null,
    langs: null,
    groups: null,
    isActive:false,
});

export const mutations = {
    changeFaq(state, faqs) {
        state.faq = faqs;
    },
    changeGroups(state, groups) {
        state.groups = groups;
    },
    changeLangs(state, langs) {
        state.langs = langs;
    },
    changeUpdate(state,update){
      state.isActive = update  
    }
};

export const actions = {
    getFaqFull({ commit }) {
        Promise.all([api('getFaqFull', { group: '' }), api('getFaqGroup'), api('getAllLang')])
            .then(res => {
                commit('changeFaq', res[0].data.faq)
                commit('changeGroups', res[1].data.faqGroups)
                commit('changeLangs', res[2].data.lang)
               
                
            })
    }
};
export const getters = {
    getFaq(state) {
        return state.faq
    },
    getLangs(state) {
        return state.langs
    },
    getGroups(state) {
        return state.groups
    }
}
