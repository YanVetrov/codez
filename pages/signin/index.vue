<template>

    <div class="modal-wr">

        <div class="modal-personal-room modal-block" v-show="showComponent ==='login'">

            <h3 class="modal-block--title">
                Sign-in control panel
                <a href="#">forgot password?</a>
            </h3>

            <div class="modal-main bg-stars">

                <form action="#" onsubmit="return false;checkLogin();">
                    <label>
                        <i class="fal fa-envelope"></i>
                        <!--<i class="fal fa-envelope-square"></i>-->
                        <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid'
                               :style='{borderColor:valid?"":"red"}' type="text" v-model="email" required=""
                               placeholder="Email">
                    </label>

                    <label>
                        <i class="fal fa-key"></i>
                        <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid'
                               :style='{borderColor:valid?"":"red"}' v-model="password" type="password" required=""
                               placeholder="*****">
                    </label>
                    <button class="btnauth" @click="checkLogin" type="button">Enter</button>
                </form>

            </div>

        </div>

        <div class="modal-personal-room modal-block" v-show="showComponent ==='2fa'">

            <h3 class="modal-block--title">
                Enter a verification code
            </h3>

            <div class="modal-main">

                <div class="modal-main--at">

                    <div class="fal fa-shield">
                        <i class="fal fa-lock"></i>
                    </div>
                    <p>Get a verification code form the <strong>Google
                        Authenticator</strong> app</p>
                </div>

                <form onsubmit="return false;checkLogin();" action="#">
                    <label>
                        <i class="fal fa-envelope-square"></i>
                        <input type="text" placeholder="*** ***" v-model="code">
                    </label>

                    <label class="modal-switch">
                        <input type="checkbox"/>
                        <div class="modal-switch__text">Remember this computer for 30 days</div>
                    </label>

                    <button class="btnauth" type="button" @click="checkLogin">Confirm</button>
                </form>

            </div>

        </div>

    </div>

</template>
<script>
    export default {
        layout: 'login',
        data() {
            return {
                email: 'test1@gmail.com',
                password: 'qweqwe',
                code: undefined,
                showComponent: 'login',
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
                this.$root.$emit('loading', true);
                return this.$rest
                    .api('loginUseEmail', {email: this.email, password: this.password, code: this.code})
                    .then(res => {
                        if (res.success) {
                            this.$store.dispatch('auth/signIn', res.data);
                            return this.$router.push('dashboard');
                        }
                        else {
                            console.log(res);
                            if (res && res.error && res.error.errorCode === 6231533598118172) {
                                this.showComponent = '2fa';
                                return;
                            }
                            this.valid = false;

                        }
                        return Promise.reject(res.error);
                    })
                    .then(() => {
                        this.$root.$emit('loading', false);

                    })
                    .catch(err => {
                        this.$root.$emit('loading', false);
                        return console.error(err);
                    })

            },
            clearValid() {
                this.valid = true;
            }
        }
    }
</script>
