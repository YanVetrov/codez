<template>
  <div id="wrapper">
    
    <HeaderMenu v-if='login' />
    <LeftMenu v-if='login'/>
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
    data(){
      return{
        login:false,  
      }
    },
    beforeCreate(){
      this.$store.getters['Menu/checkAdmin']?'':this.$router.push('/signin');
    },
    mounted(){
      this.$root.$on('login',(res)=>{this.login=res});
      this.$route.name=='signin'?this.login=false:this.login=true;
    },
    methods:{
      check(){
        console.log(this.$store.getters['Menu/checkAdmin'])
      }
    },
    head() {
      return {
        bodyAttrs: {
          class: this.$store.getters['Menu/close'] ? 'fix-header show-sidebar hide-sidebar' : 'fix-header'
        }
      };
    },
    watch:{
      $route(){
        this.$route.name=='signin'?this.login=false:this.login=true;
        this.$store.getters['Menu/checkAdmin']?'':this.$router.push('/signin');
      }
    },
    components: {
      HeaderMenu,
      LeftMenu
    }
  }

</script>

