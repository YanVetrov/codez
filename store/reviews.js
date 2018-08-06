
export const state = () => ({
    info: false,
    errorData: false,
    load: false,
    current_page: 1,
    total_page: 1,
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
    changeTotalPages(state, pages) {
        state.total_page = pages
    },
    changeCurrentPage(state, page) {
        state.current_page = page
    },

};

export const actions = {
    getReviews({ commit }, data) {
        commit('changeLoad', false);
        this.app.$rest.api('getReviews', data || { page: 1, limit: 12 })
            .then(response => {
                console.log(response.data);
                commit('changeLoad', true);
                if (response.success === true) {
                    
                    commit('changeData', response.data.reviews)
                    commit('changeCurrentPage', response.data.count.select_page || 1)

                    commit('changeTotalPages', response.data.count.pages)
                }


            })
    },
    deleteReview({ commit }, id) {
        this.app.$rest.api('deleteReview', { review_id: id })
            .then(response => {
                console.log(response);
                return this.getReviews();
            })
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
    },
    getCurrentPage(state) {
        return state.current_page
    },
    getTotalPages(state) {
        return state.total_page
    }
}
