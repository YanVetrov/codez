export const state = () => ({
    info: false,
    errorData: false,
    load: false,
});

export const mutations = {
    changeData(state, data) {
        state.info = data;
    },
    changeError(state, error) {
        state.error = error;
    },
    changeLoad(state, load) {
        state.load = load;
    },


};

export const actions = {
    getStatisticClient({commit}) {
        this.app.$rest.api('admin/visits/statistic/get')
            .then(res => {
                let main = res.data.visitors;
                let obj = {};
                let arr = [];
                main.forEach(el => {
                    el.fromUrl.forEach(el => {
                        let count = el.count;
                        let url = el.url;
                        obj[url] ? obj[url] = parseInt(obj[url]) + count : obj[url] = count;
                    })
                });
                let total = 0;
                for (let k in obj) {
                    let objj = {};
                    objj.url = k;
                    objj.count = obj[k];
                    total += obj[k];
                    arr.push(objj);
                }
                arr.forEach(el => {
                    el.percent = Math.ceil((parseFloat(el.count * 100 / total)) * 10) / 10
                })
                console.log(arr);
                commit('changeData', arr);
                commit('changeLoad', true);
            })
            .catch((err) => {
                commit('changeError', {message: 'Error load data'})
            });
    }
};
export const getters = {
    getData(state) {
        return state.info
    },
    getLoad(state) {
        return state.load
    },
    getError(state) {
        return state.errorData
    }
};
