<template>
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav slimscrollsidebar">
            <div class="sidebar-head" @click="$store.dispatch('Menu/close')">
                
                <h3 >
          <span class="fa-fw open-close">
            <i class="ti-close ti-menu"></i>
          </span>
                    <span class="hide-menu">Navigation</span>
                </h3>
            </div>

            <div class="user-profile"></div>
            <ul class="nav" id="side-menu">

                <li v-for="(el,i) in menu" :key="i">
                    <nuxt-link :to="el.page" :event="el.child.length === 0 ?'click': ''"
                               @click.native="el.child && el.child.length === 0 || (el.isShow = !el.isShow)"
                               class="waves-effect"
                               active-class="active">
                        <i class="mdi fa-fw" :class="'mdi-'+el.icon" data-icon="v"></i>
                        <span class="hide-menu">
              {{el.name}}
              <span v-if="el.child && el.child.length > 0" class="fa arrow"></span>
            </span>
                    </nuxt-link>
                    <ul class="nav nav-second-level collapse" :class="{'in': el.isShow}">
                        <li v-if="el.child&&el.child.length >0" v-for="(elc,i1) in el.child " :key="i1">
                            <nuxt-link :to="el.page+elc.page" active-class="active">
                                <i class="mdi fa-fw" :class="'mdi-'+elc.icon" data-icon="v"></i>
                                <span class="hide-menu"> {{elc.name}}</span>

                            </nuxt-link>
                        </li>

                    </ul>
                </li>
                <li class="devider"></li>

                <li>
                    <nuxt-link to="/logout/" class="waves-effect"><i class="mdi mdi-logout fa-fw"></i> <span
                            class="hide-menu">Log out</span>
                    </nuxt-link>
                </li>
                <li class="devider"></li>

                <li>
                    <nuxt-link to="/api/" class="waves-effect"><i class="fa fa-circle-o text-success"></i> <span
                            class="hide-menu">API</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/faq/" class="waves-effect"><i class="fa fa-circle-o text-success"></i> <span
                            class="hide-menu">FAQ</span></nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    // https://materialdesignicons.com/
    export default {
        data() {
            let menu = [{
                    name: 'Dashboard',
                    isShow: false,
                    page: '/dashboard',
                    icon: 'view-dashboard',
                    child: []
                }, {
                    name: 'News',
                    isShow: false,
                    page: '/news',
                    icon: 'newspaper',
                    child: [
                        { name: 'Create news', page: '/create', icon: 'playlist-plus' },
                        { name: 'All news', page: '/page', icon: 'format-list-bulleted-type' },
                    ]
                }, {
                    name: 'Currencies',
                    isShow: false,
                    page: '/currency',
                    icon: 'currency-usd',
                    child: [
                        { name: 'All currencies', page: '/page', icon: 'format-list-numbers' },
                        { name: 'Create currency', page: '/create', icon: 'plus' },
                    ]
                },
                {
                    name: 'Settings',
                    isShow: false,
                    page: '/settings',
                    icon: 'settings',
                    child: [
                        { name: 'History', page: '/history', icon: 'history' },
                        { name: 'Administrators', page: '/admins', icon: 'lock' },
                        { name: 'Apperance', page: '/apperance', icon: 'brush' },
                    ]
                },
                {
                    name: 'Reviews',
                    isShow: false,
                    page: '/reviews',
                    icon: 'mdi mdi-comment-multiple-outline',
                    child: [
                        { name: 'All reviews', page: '/page', icon: 'format-list-numbers' },
                        { name: 'Create reviews', page: '/create', icon: 'playlist-plus' },
                    ]
                },
                {
                    name: 'Rules',
                    page: '/rules',
                    isShow: false,
                    icon: 'book-open-variant',
                    child: [
                        { name: 'All rules', page: '/rules', icon: 'routes' },
                        { name: 'Create rule', page: '/create', icon: 'routes' },
                    ]
                },
                {
                    name: 'Faq',
                    page: '/faq',
                    isShow: false,
                    icon: 'book-open-variant',
                    child: [
                        { name: 'All FAQ', page: '/faq', icon: 'routes' },
                        { name: 'Create FAQ', page: '/create', icon: 'routes' },
                    ]
                },
                {
                    name: 'Parsers',
                    page: '/parsers',
                    isShow: false,
                    icon: 'book-open-variant',
                    child: []
                },
                {
                    name: 'Contacts',
                    page: '/contacts',
                    isShow: false,
                    icon: 'book-open-variant',
                    child: []
                },
                {
                    name: 'Routes',
                    page: '/routes',
                    isShow: false,
                    icon: 'routes',
                    child: [
                        { name: 'All routes', page: '/all', icon: 'routes' },
                        { name: 'Create route', page: '/create', icon: 'routes' },
                    ]
                },
                {
                    name: 'Users',
                    page: '/users',
                    isShow: false,
                    icon: 'mdi mdi-account-multiple-outline',
                    child: [
                        { name: 'All users', page: '/clients', icon: 'mdi mdi-account-multiple-outline' },
                        { name: 'Partners', page: '/partners', icon: 'chart-line' },
                    ]
                }

            ];


            return {
                menu
            }
        }
    }
</script>

<style>
    @media screen and (max-width:600px) {
        .col-lg-1,
        .col-lg-10,
        .col-lg-11,
        .col-lg-12,
        .col-lg-2,
        .col-lg-3,
        .col-lg-4,
        .col-lg-5,
        .col-lg-6,
        .col-lg-7,
        .col-lg-8,
        .col-lg-9,
        .col-md-1,
        .col-md-10,
        .col-md-11,
        .col-md-12,
        .col-md-2,
        .col-md-3,
        .col-md-4,
        .col-md-5,
        .col-md-6,
        .col-md-7,
        .col-md-8,
        .col-md-9,
        .col-sm-1,
        .col-sm-10,
        .col-sm-11,
        .col-sm-12,
        .col-sm-2,
        .col-sm-3,
        .col-sm-4,
        .col-sm-5,
        .col-sm-6,
        .col-sm-7,
        .col-sm-8,
        .col-sm-9,
        .col-xs-1,
        .col-xs-10,
        .col-xs-11,
        .col-xs-12,
        .col-xs-2,
        .col-xs-3,
        .col-xs-4,
        .col-xs-5,
        .col-xs-6,
        .col-xs-7,
        .col-xs-8,
        .col-xs-9 {
            padding-left: 0;
            padding-right: 0;
        }
        .sidebar {
            z-index: 9999;
        }
    }
</style>
