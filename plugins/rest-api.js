import Vue from 'vue'
import axios from 'axios'

const config = require('../_config/app');

const Rest = {
  install(Vue, options) {
    Vue.prototype.$rest = this
  },
  api(method, param) {
    return axios.post(config.apiPath + method + '/', param).then(res => {
      return res.data;
    })
  }
};
Vue.use(Rest);

export default ({ app }) => {
  app.rest = Rest
}