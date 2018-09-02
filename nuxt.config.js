const config = require('./_config/app');
let proxyConfig = {};
proxyConfig[config.servicePath + '/'] = {target: config.serviceAPI, pathRewrite: {}};
proxyConfig[config.servicePath + '/'].pathRewrite['^' + config.servicePath + '/'] = '/';

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

    loading: '~/components/_utils/loader/index.vue',

    css: [],
    plugins: [
        // '~/plugins/airbrake.js',
        {src: "~/plugins/vue-storage.js", ssr: false},
        {src: "~/plugins/i18n"},
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
    // router: {
    //     middleware: ['auth']
    // },
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/moment',
        // ['nuxt-sass-resources-loader',
        //     './assets/sass/style.scss'
        // ]
    ],
    env: {
        config: config
    },
    axios: {},
    moment: {},

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
