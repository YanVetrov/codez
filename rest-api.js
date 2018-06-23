import Vue from 'vue'
import axios from 'axios'
Vue.use(axios);
const config = require('../_config/app');

const Rest = {
    install(Vue, options) {
        Vue.prototype.$rest = this
    },
    api(method, param) {
        return axios.post(config.apiPath + method + '/', param)
            .then(res => {
                if (res.success === false) {
                    return Promise.reject(res.error)
                }
                return res.data;
            }).catch(err => {
                console.error('API Error->', err);
                return Promise.reject(err)
            })
    },
    apiPath: config.apiPath
};
Vue.use(axios);
Vue.use(Rest);

export default ({ app }) => {
    app.rest = Rest
}