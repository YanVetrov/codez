<template>
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav slimscrollsidebar">
            <div class="sidebar-head">
                <h3>
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
                               @click.native="el.child.length === 0 || (el.isShow = !el.isShow)" class="waves-effect"
                               active-class="active">
                        <i class="mdi fa-fw" :class="'mdi-'+el.icon" data-icon="v"></i>
                        <span class="hide-menu">
              {{el.name}}
              <span v-if="el.child.length > 0" class="fa arrow"></span>
            </span>
                    </nuxt-link>
                    <ul class="nav nav-second-level collapse" :class="{'in': el.isShow}">
                        <li v-if="el.child.length >0" v-for="(elc,i1) in el.child " :key="i1">
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
                    {name: 'Create news', page: '/create', icon: 'playlist-plus'},
                    {name: 'All news', page: '/page', icon: 'format-list-bulleted-type'},
                ]
            }, {
                name: 'Currencies',
                isShow: false,
                page: '/currency',
                icon: 'currency-usd',
                child: [
                    {name: 'All currencies', page: '/page', icon: 'format-list-numbers'},
                    {name: 'Create Сurrency', page: '/create', icon: 'plus'},
                ]
            },
                {
                    name: 'Reviews',
                    isShow: false,
                    page: '/reviews',
                    icon: 'mdi mdi-comment-multiple-outline',
                    child: [
                        {name: 'All reviews', page: '/page', icon: 'format-list-numbers'},
                        {name: 'Create reviews', page: '/create', icon: 'playlist-plus'},
                    ]
                }
            ];


            for (let i in menu)
                if (menu[i].page === '/' + this.$router.currentRoute.path.split('/')[1])
                    menu[i].isShow = true;

            return {
                menu
            }
        }
    }
</script>

