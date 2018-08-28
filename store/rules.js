export const state = () => ({
    rules: [],
    rule:{},
    isActive: false,
    load: true,
    errorData: false,
    total_pages: 1,
    current_page: 1,
});

export const mutations = {
    changeData(state, rules) {
        state.rules = rules;
    },
    changeLoad(state, info) {
        state.load = info;
    },
    changeRule(state, rule) {
        state.rule = rule;
    },
};

export const actions = {
    getTitleRules({ commit }, filter) {
        this.app.$rest.api('getTitleRules')
            .then(res => {
                console.log(res)
                commit('changeData', res.data.rules)
            })
    },
    getRule({ commit }, id) {
        this.app.$rest.api('getRule', { id })
            .then(res => {
                commit('changeRule', res.data.rule)
                console.log(res)
            })
    },
    createRules({ commit }, rule) {
        rule.sortNumber=1
        return this.app.$rest.api('createRules', rule)
            .then(res => {
                console.log(res)
                return res;
            })
    },
    editRule({ commit }, rule) {
        let {_id} = rule;
        rule.id = _id
        return this.app.$rest.api('editRule', rule)
            .then(res => {
                console.log(res)
                return res;
            })
    },
    deleteRule({ commit }, id) {
        return this.app.$rest.api('deleteRule', { id })
            .then(res => {
                console.log(res)
                return res;
            })
    },
};
export const getters = {
    getData(state) {
        return state.rules
    },
    getLangs(state) {
        return state.langs
    },
    getLoad(state) {
        return state.load
    },
    getError(state) {
        return state.errorData
    },
    getRule(state) {
        return state.rule
    }
}
