import Vue from 'vue'
import Identicon from './identicon.js/identicon.js'
import md5 from 'md5';

const Rest = {
    install(Vue, options) {
        Vue.prototype.$identicon = this
    },
    create(hash) {
        if (!hash) hash = '404';
        let hash_ = md5(hash);
        let svgData = new Identicon(hash_, {
            format: 'svg',
            background: [235, 235, 235, 235]
        });
        return 'data:image/svg+xml;base64,' + svgData.toString();
    }
};
Vue.use(Rest);

export default ({app}) => {
    app.identicon = Rest
}
