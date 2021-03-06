const config = require('./_config/app');
let proxyConfig = {};
if (!config.__proxy_path)
    config.__proxy_path = '/service';
proxyConfig[config.__proxy_path + '/'] = {target: config.__proxy_to_rest_api, pathRewrite: {}};
proxyConfig[config.__proxy_path + '/'].pathRewrite['^' + config.__proxy_path + '/'] = '/';

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'exchanger-admin-web',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Admin panel'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    loading: {
        color: '#006cf0',
        height: '5px'
    },

    css: [],

    // router: {
    //     middleware: ['auth']
    // },
    modules: [

        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        // ['nuxt-sass-resources-loader',
        //     './assets/sass/style.scss'
        // ]
    ],
    env: {
        config: config
    },
    axios: {},
    plugins: [
        // '~/plugins/airbrake.js',
        {src: "~/plugins/vue-storage.js", ssr: false},
        {src: "~/plugins/i18n"},
        {src: "~/plugins/moment.js"},
        {src: '~/plugins/rest-api'},
        {src: '~/plugins/vue-pagination.js'},
        {src: '~/plugins/vue-loader.js'},
        {src: '~/plugins/vue-modal.js'},
        {src: '~/plugins/vue-hashImage.js'},
        {src: "~/plugins/vue-animate-number.js", ssr: false},
        {src: "~/plugins/vue2-editor", ssr: false},
        {src: '~/plugins/v-select.js', ssr: false},
        {src: "~/plugins/vue-charts.js", ssr: false},
        {src: "~/plugins/vue-notify", ssr: false},
        {src: '~/plugins/vue-core-image-upload.js', ssr: false},


    ],
    proxy: proxyConfig,
    build: {
        // analyze: {
        //     analyzerMode: 'server',
        //     analyzerHost: '0.0.0.0',
        //     analyzerPort: '9999',
        //     openAnalyzer: true
        // },
        vendor: ['vue2-editor'],
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
                config.module.rules.push({
                    enforce: 'pre',

                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],

                    exclude: /(node_modules)/
                })
            }
        }
    }
};
