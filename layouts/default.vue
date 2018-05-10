<template>
  <div id="wrapper">
    <HeaderMenu/>
    <LeftMenu/>
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Starter Page</h4></div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i
              class="ti-settings text-white"></i></button>
            <ol class="breadcrumb">
              <li><a href="#">Dashboard</a></li>
              <li class="active">Starter Page</li>
            </ol>
          </div>
          <!-- /.col-lg-12 -->
        </div>

        <nuxt/>

      </div>
      <!-- /.container-fluid -->
      <footer class="footer text-center"> 2017 &copy; Elena Medvedeva</footer>
    </div>

  </div>
</template>

<script>
  import HeaderMenu from "~/components/Menu/HeaderMenu";
  import LeftMenu from "~/components/Menu/LeftMenu";


  export default {
    head() {
      console.log('this.$store.1', this.$store.getters['Menu/close']);
      return {
        bodyAttrs: {
          class: this.$store.getters['Menu/close'] ? 'fix-header show-sidebar hide-sidebar' : 'fix-header'
        }
      };
    },
    components: {
      HeaderMenu,
      LeftMenu
    }
  }

</script>

