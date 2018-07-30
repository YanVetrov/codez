import axios from 'axios';
import config from './_config/app'

export default function (method, param) {
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
}