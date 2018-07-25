<template>
    <div class="left-menu">

        <ul class="left-menu-list">

            <li v-for="(el,i) in menu" :key="i" :class="(!!el.title)?'left-menu--category':'left-menu--sub-category'">
                <template v-if="!!el.title">
                    <span>
                        {{typeof $t(el.name)=='string'?""+$t(el.title):""+el.title}}
                        <i :class="'fal '+el.icon" :style="'color: '+el.color"></i>
                    </span>
                </template>
                <template v-else>
                    <nuxt-link :to="el.page" :event="el.child.length === 0 ?'click': ''"
                               @click.native="el.child && el.child.length === 0 || (el.isShow = !el.isShow)"
                               class=""
                               active-class="active">

                        <i :class="'fal '+el.icon"></i>
                        {{typeof $t(el.name)==='string'? $t(el.name):el.name}}
                        <template v-if="el.child && el.child.length > 0">
                            <i v-if="!!el.isShow" class="i-show-status fal fa-angle-down"></i>
                            <i v-else class="i-show-status fal fa-angle-right"></i>
                        </template>
                    </nuxt-link>

                    <ul class="left-menu-list__sub" v-if="el.child && el.child.length > 0" :class="{'in': el.isShow}">
                        <li v-if="el.child&&el.child.length >0" v-for="(elc,i1) in el.child " :key="i1">
                            <nuxt-link :to="el.page+elc.page" active-class="active">
                                {{typeof $t(elc.name)==='string'?$t(elc.name):elc.name}}
                            </nuxt-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>

    </div>
</template>


<script>
    // https://materialdesignicons.com/
    export default {
        data() {

            let exchanger_menu = [{
                title: 'menu.exchanger',
                icon: 'fa-file-invoice-dollar',
                color: '#f9b655'
            }, {
                name: 'menu.orders',
                isShow: false,
                page: '/orders',
                icon: 'fa-file-invoice-dollar',
                child: []
            }, {
                name: 'menu.currencies',
                isShow: false,
                page: '/currency',
                icon: 'fa-usd-circle',
                child: [
                    {name: 'menu.listCurrencies', page: '/page', icon: 'format-list-numbers'},
                    {name: 'menu.createCurrency', page: '/create', icon: 'plus'},
                ]
            }, {
                name: 'menu.routes',
                page: '/routes',
                isShow: false,
                icon: 'fa-route',
                child: [
                    {name: 'menu.listRoutes', page: '/all', icon: 'routes'},
                    {name: 'menu.createRoutes', page: '/create', icon: 'routes'},
                ]
            }, {
                name: 'menu.parsers',
                page: '/parsers',
                isShow: false,
                icon: 'fa-broadcast-tower',
                child: []
            }, {
                name: 'menu.merchantsAndApi',
                page: '/merchantsAndApi',
                isShow: false,
                icon: 'fa-shopping-cart',
                child: []
            }];
            let main_menu = [{
                title: 'menu.general',
                icon: 'fa-sliders-h',
                color: '#117ce6'

            },
                {
                    name: 'menu.dashboard',
                    isShow: false,
                    page: '/dashboard',
                    icon: 'fa-cubes',
                    child: []
                },
                {
                    name: 'menu.reviews',
                    isShow: false,
                    page: '/reviews',
                    icon: 'fa-comments',
                    child: []
                },
                {
                    name: 'menu.news',
                    isShow: false,
                    page: '/news',
                    icon: 'fa-newspaper',
                    child: [
                        {name: 'menu.listNews', page: '/page'},
                        {name: 'menu.createNews', page: '/create'},

                    ]
                }, {
                    name: 'menu.faq',
                    page: '/faq',
                    isShow: false,
                    icon: 'fa-question',
                    child: [
                        {name: 'menu.listFaq', page: '/faq', icon: 'routes'},
                        {name: 'menu.createFaq', page: '/create', icon: 'routes'},
                    ]
                }, {
                    name: 'menu.users',
                    page: '/users',
                    isShow: false,
                    icon: 'fa-user-edit',
                    child: [
                        {name: 'menu.clients', page: '/clients', icon: 'users'},
                        {name: 'menu.partners', page: '/partners', icon: 'chart-line'},

                    ]
                }, {
                    name: 'menu.blockPartners',
                    page: '/partners',
                    isShow: false,
                    icon: 'fa-handshake',
                    child: []
                }, {
                    name: 'menu.rules',
                    page: '/rules',
                    isShow: false,
                    icon: 'fa-book',
                    child: [
                        {name: 'rules', page: '/rules', icon: 'routes'},
                        {name: 'create', page: '/create', icon: 'routes'},
                    ]
                }, {
                    name: 'menu.contacts',
                    page: '/contacts',
                    isShow: false,
                    icon: 'fa-phone',
                    child: []
                },
            ];

            const admin_menu = [{
                title: 'menu.adminSite',
                icon: 'fa-toolbox',
                color: '#40ec12'
            }, {
                name: 'menu.appearance',
                isShow: false,
                page: '/appearance',
                icon: 'fa-pencil-ruler',
                child: []
            }, {
                name: 'menu.history',
                isShow: false,
                page: '/history',
                icon: 'fa-history',
                child: []
            }, {
                name: 'menu.admins',
                isShow: false,
                page: '/admins',
                icon: 'fa-user-secret',
                child: []
            },{
                name: 'menu.authSystem',
                isShow: false,
                page: '/authSystem',
                icon: 'fa-sign-in',
                child: []
            }, {
                name: 'menu.otherSettings',
                isShow: false,
                page: '/settings',
                icon: 'fa-cogs',
                child: [
                    {name: '404', page: '/404'},
                ]
            }];


            return {
                menu: [
                    ...main_menu,
                    ...exchanger_menu,
                    ...admin_menu
                ]

            }
        },
    }
</script>
