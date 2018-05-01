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
                     @click.native="el.child.length === 0 || openChild()" class="waves-effect"
                     active-class="active">
            <i class="mdi mdi-av-timer fa-fw" data-icon="v"></i>
            <span class="hide-menu">
              {{el.name}}
              <span v-if="el.child.length > 0" class="fa arrow"></span>
            </span>
          </nuxt-link>
          <ul class="nav nav-second-level collapse in">
            <li v-if="el.child.length >0" v-for="(elc,i1) in el.child " :key="i1">
              <nuxt-link :to="el.page+elc.page" active-class="active">
                <i class=" fa-fw">{{elc.icon}}</i>
                <span class="hide-menu"> {{elc.name}}</span>
              </nuxt-link>
            </li>

          </ul>
        </li>
        <li class="devider"></li>

        <li>
          <nuxt-link to="/logout/" class="waves-effect"><i class="mdi mdi-logout fa-fw"></i> <span class="hide-menu">Log out</span>
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
  export default {
    methods: {
      openChild() {
        console.log('openChild тут нужно открыть то меню на которое нажали')
      }
    },
    computed: {
      menu() {
        return this.$store.getters['Menu/list']
      }
    }
  }
</script>

