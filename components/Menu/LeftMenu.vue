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
                title: 'exchanger',
                icon: 'fa-file-invoice-dollar',
                color: '#f9b655'
            }, {
                name: 'currencies',
                isShow: false,
                page: '/currency',
                icon: 'fa-usd-circle',
                child: [
                    {name: 'currencies', page: '/page', icon: 'format-list-numbers'},
                    {name: 'create', page: '/create', icon: 'plus'},
                ]
            }, {
                name: 'routes',
                page: '/routes',
                isShow: false,
                icon: 'fa-route',
                child: [
                    {name: 'routes', page: '/all', icon: 'routes'},
                    {name: 'create', page: '/create', icon: 'routes'},
                ]
            }, {
                name: 'parsers',
                page: '/parsers',
                isShow: false,
                icon: 'fa-broadcast-tower',
                child: []
            }];


            return {
                menu: [{
                    title: 'dash',
                    icon: 'fa-sliders-h',
                    color: '#117ce6'
                }, {
                    name: 'dash',
                    isShow: false,
                    page: '/dashboard',
                    icon: 'fa-cubes',
                    child: []
                }, {
                    name: 'news',
                    isShow: false,
                    page: '/news',
                    icon: 'fa-newspaper',
                    child: [
                        {name: 'create', page: '/create', icon: 'playlist-plus'},
                        {name: 'news', page: '/page', icon: 'format-list-bulleted-type'},
                    ]
                }, {
                    name: 'settings',
                    isShow: false,
                    page: '/settings',
                    icon: 'fa-cogs',
                    child: [

                        {name: 'history', page: '/history'},
                        {name: 'Auth', page: '/auth'},
                        {name: 'admins', page: '/admins'},
                        {name: 'design', page: '/apperance'},
                        {name: 'Partners', page: '/partners'}

                    ]
                }, {
                    name: 'reviews',
                    isShow: false,
                    page: '/reviews',
                    icon: 'fa-comments',
                    child: [
                        {name: 'reviews', page: '/page'},
                        {name: 'create', page: '/create'},
                    ]
                }, {
                    name: 'Faq',
                    page: '/faq',
                    isShow: false,
                    icon: 'fa-question',
                    child: [
                        {name: 'FAQ', page: '/faq', icon: 'routes'},
                        {name: 'create', page: '/create', icon: 'routes'},
                    ]
                }, {
                    name: 'rules',
                    page: '/rules',
                    isShow: false,
                    icon: 'fa-book',
                    child: [
                        {name: 'rules', page: '/rules', icon: 'routes'},
                        {name: 'create', page: '/create', icon: 'routes'},
                    ]
                }, {
                    name: 'contacts',
                    page: '/contacts',
                    isShow: false,
                    icon: 'fa-phone',
                    child: []
                }, {
                    name: 'users',
                    page: '/users',
                    isShow: false,
                    icon: 'fa-user-edit',
                    child: [
                        {name: 'users', page: '/clients', icon: 'users'},
                        {name: 'partners', page: '/partners', icon: 'chart-line'},

                    ]
                },
                    ...exchanger_menu
                ]

            }
        },
    }
</script>
