<template>
    <section id="wrapper" class="new-login-register">
        <div class="lg-info-panel">
            <div class="inner-panel">
                <a href="javascript:void(0)" class="p-20 di"></a>
                <div class="lg-content">
                    <h2>THE ULTIMATE & MULTIPURPOSE ADMIN TEMPLATE OF 2017</h2>
                    <p class="text-muted">with this admin you can get 2000+ pages, 500+ ui component, 2000+ icons,
                        different demos and many more... </p>
                </div>
            </div>
        </div>
        <div class="new-login-box">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sign In to Admin</h3>
                <small>Enter your details below</small>
                <form class="form-horizontal new-lg-form" id="loginform" action="#">
                    <div class="form-group  m-t-20">
                        <div class="col-xs-12">
                            <label>Email Address</label>
                            <input class="form-control" type="text" v-model="email" required="" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <label>Password</label>
                            <input class="form-control" v-model="password" type="password" required=""
                                   placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12">
                            <div class="checkbox checkbox-info pull-left p-t-0">
                                <input id="checkbox-signup" type="checkbox">
                                <label for="checkbox-signup"> Remember me </label>
                            </div>
                            <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i
                                    class="fa fa-lock m-r-5"></i> Forgot pwd?</a></div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-xs-12">
                            <div @click="checkLogin"
                                 class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light">
                                Log In
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        layout: 'login',
        data() {
            return {
                password: '',
                email: ''
            }
        },
        mounted(){
          this.$rest.api('isAuthUser')
          .then(res=>{
              if(res.success){
                  this.$store.dispatch('admin/admin', res.data);
                  this.$router.push('dashboard');
              }
          })
        },
        methods: {
            checkLogin() {
                return this.$rest
                    .api('loginUseEmail', {email: this.email, password: this.password})
                    .then(res => {
                        if (res.success) {
                            return this.$store.dispatch('admin/admin', res.data);
                        }
                        return Promise.reject(res.error);
                    })
                    .then(() => {
                        return this.$router.push('dashboard');
                    })
                    .catch(err => {
                        return console.error(err);
                    })

            }
        }
    }
</script>
