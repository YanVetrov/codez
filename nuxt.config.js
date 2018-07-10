const config = require('./_config/app');
let resolvee = require("path").resolve;
let proxyConfig = {};
proxyConfig[config.servicePath + '/'] = { target: config.serviceUrl, pathRewrite: {} };
proxyConfig[config.servicePath + '/'].pathRewrite['^' + config.servicePath + '/'] = '/';

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'exchanger-admin-web',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },



    /*
     ** Customize the progress bar colors
     */
    loading: '~/components/loading.vue',

    css: [
        // '~/assets/sass/style.scss',
        '~/assets/bootstrap.min.css',
        '~/assets/css/animate.css',
        '~/assets/css/style.css',
        '~/assets/css/default.css',


    ],
    plugins: [
        // '~/plugins/airbrake.js',
        { src: "~/plugins/i18n" },
        '~/plugins/rest-api',
        { src: "~/plugins/vue-animate-number.js", ssr: false },
        { src: "~/plugins/vue2-editor", ssr: false },
        { src: '~/plugins/v-select.js', ssr: false },
        { src: "~/plugins/vue-charts.js", ssr: false },
        { src: "~/plugins/vue-notify", ssr: false },
        { src: '~/plugins/vue-core-image-upload.js', ssr: false }

    ],

    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/moment',
        ['nuxt-sass-resources-loader', 
            './assets/sass/style.scss'
        ]
    ],
    env: {
        config: config
    },
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    moment: {},
    proxy: proxyConfig,
    build: {
        vendor: 'vue2-editor',
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
};
