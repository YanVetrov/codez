import Vue from 'vue'
import axios from 'axios'

const config = require('../_config/app');

const Rest = {
    install(Vue, options) {
        Vue.prototype.$rest = this
    },
    api(method, param) {
        return axios.post(config.baseUrl + config.servicePath + config.apiPath + method + '/', param)
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
    baseUrl: config.baseUrl ,
    apiPath: config.baseUrl + config.servicePath + config.apiPath,
    fsPath: config.baseUrl + config.servicePath + config.fsPath
};
Vue.use(Rest);

export default ({app}) => {
    app.rest = Rest
}