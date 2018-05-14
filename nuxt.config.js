const config = require('./_config/app');

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'exchanger-admin-web',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },


    /*
    ** Customize the progress bar colors
    */
    loading: '~/components/loading.vue',
    success_page: '~/components/success_page.vue',

    css: [
        '~/assets/css/animate.css',
        '~/assets/bootstrap.min.css',
        '~/assets/css/style.css',
        '~/assets/css/default.css',

    ],
    plugins: [
        // '~/plugins/airbrake.js',
        '~/plugins/rest-api',
        {src: "~/plugins/vue2-editor", ssr: false},
        {src: "~/plugins/vue-notify", ssr: false},
        {src: '~plugins/vue-core-image-upload.js', ssr: false}

    ],

    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    moment:{

    },
    proxy: {
        // Simple proxy
        '/service/': {
            target: config.serviceUrl,
            pathRewrite: {
                '^/service/': '/'
            }
        },
    },
    build: {
        vendor: 'vue2-editor',
        extend(config, {isDev, isClient}) {
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
