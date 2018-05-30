<template>
  <div id="wrapper">
    
    <HeaderMenu  />
    <LeftMenu />
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title"></h4></div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">

            <ol class="breadcrumb">
            
              <li @click="check()" class="active">{{$route.name}}</li>
            </ol>
          </div>
        </div>

        <notifications position="top center" style="padding: 40px" group="main"/>
        <nuxt/>

      </div>
      <footer class="footer text-center"> 2017 &copy; Elena Medvedeva</footer>
    </div>

  </div>
</template>

<script>
  import HeaderMenu from "~/components/Menu/HeaderMenu";
  import LeftMenu from "~/components/Menu/LeftMenu";

  export default {
    middleware: 'auth',
    methods: {
      check() {
        console.log(this.$store.getters['admin/checkAdmin'])
      }
    },
    head() {
      return {
        bodyAttrs: {
          class: this.$store.getters['Menu/close'] ? 'fix-header show-sidebar hide-sidebar' : 'fix-header'
        }
      };
    },
    watch: {
      $route() {
        this.$store.getters['admin/checkAdmin'] ? '' : this.$router.push('/signin');
        this.$rest.api('isAuthUser')
          .then(res => {
            console.log(res);
          })
      }
    },
    components: {
      HeaderMenu,
      LeftMenu
    }
  }
</script>
