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
    methods: {
      check() {
        console.log(this.$store.getters['admin/checkAdmin'])
      }
    },
    mounted() {
      this.$rest
        .api('isAuthUser')
        .then(res => {
          if (res.success) {
            this.$store.dispatch('admin/admin', res.data);
            let d = res.data,
              fn = d.first_name,
              ln = d.last_name,
              email = d.email,
              obj = { fn, ln, email }
            this.$root.$emit('userInfo', obj)
            console.log(obj)
          }
          res.success ? '' : this.$router.push('/signin');

        })
        .catch(err => {

        })
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
        this.$rest.api('isAuthUser')
          .then(res => {
            res.success ? '' : this.$router.push('/signin');
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
