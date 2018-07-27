<template>
    <section id="wrapper" class="new-login-register">
        <form class="form-horizontal new-lg-form" id="loginform" action="#">
            <div class="form-group  m-t-20">
                <div class="col-xs-12">
                    <label v-if="!valid" style="color:red">Invalid email or password</label><br/>
                    <label>Email:</label>
                    <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid' :style='{borderColor:valid?"silver":"red"}' type="text" v-model="email" required="" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <label>Password:</label>
                    <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid' :style='{borderColor:valid?"silver":"red"}' v-model="password" type="password" required=""
                           placeholder="Password">
                </div>
            </div>

            <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <div @click="checkLogin"
                         class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light">
                        Login
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>


<script>
    export default {
        layout: 'login',
        data() {
            return {
                password: '',
                email: '',
                valid: true,
            }
        },
        mounted() {
            this.$rest.api('isAuthUser')
                .then(res => {
                    if (res.success) {
                        this.$store.dispatch('auth/signIn', res.data);
                        this.$router.push('dashboard');
                    }
                })
        },
        methods: {
            checkLogin() {
                this.$root.$emit('loading',true);
                return this.$rest
                    .api('loginUseEmail', { email: this.email, password: this.password })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$root.$emit('loading',false);
                            return this.$store.dispatch('auth/signIn', res.data);
                        }
                        else {
                            this.valid = false;
                            this.email = '';
                            this.password = '';
                            this.$root.$emit('loading',false)
                        }
                        return Promise.reject(res.error);
                    })
                    .then(() => {
                        this.$root.$emit('loading',false);
                        return this.$router.push('dashboard');
                    })
                    .catch(err => {
                        this.$root.$emit('loading',false);
                        return console.error(err);
                    })

            },
            clearValid() {
                this.valid = true;
            }
        }
    }
</script>
