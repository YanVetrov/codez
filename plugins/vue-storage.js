import createPersistedState from 'vuex-persistedstate';

export default ({store, isHMR, app}) => {
    if (isHMR) return;

    createPersistedState({
        key: 'store',
        paths: ['auth']
    })(store)
}