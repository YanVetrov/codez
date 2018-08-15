<template>

    <div class="modal-wr">

        <div class="modal-personal-room modal-block" v-show="showComponent ==='login'">

            <h3 class="modal-block--title">
                Sign-in control panel
                <a href="#">forgot password?</a>
            </h3>

            <div class="modal-main bg-stars">

                <form action="#" onsubmit="return false;checkLogin();">
                    
                    <div style="height:20px;">
                        <transition name='fade-trans'>
                        <div v-if="!valid" style="color:#ed4c40;font-weight:bold">{{message || 'Invalid authenticator code'}}</div>
                        </transition>
                    </div>
                    
                    <label>
                        <i class="fal fa-envelope"></i>
                        <!--<i class="fal fa-envelope-square"></i>-->
                        <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid'
                               :style='{borderColor:valid?"":"#ed4c40"}' type="text" v-model="email" required=""
                               placeholder="Email">
                    </label>

                    <label>
                        <i class="fal fa-key"></i>
                        <input @keyup.enter="checkLogin" class="form-control" @focus='clearValid'
                               :style='{borderColor:valid?"":"#ed4c40"}' v-model="password" type="password" required=""
                               placeholder="*****">
                    </label>
                    <button class="btnauth" @click="checkLogin" type="button" :disabled="loader" :class="{loader:loader}">
                        Enter
                        <i class="fal fa-spinner-third fa-spin" v-show="loader" style="margin-left: 10px"></i>
                    </button>
                </form>

            </div>

        </div>

        <div class="modal-personal-room modal-block" v-show="showComponent ==='2fa'">

            <h3 class="modal-block--title">
                Enter a verification code
                <a @click="back">BACK</a>
            </h3>

            <div class="modal-main">
                    <div style="height:20px;">
                        <transition name='fade-trans'>
                        <div v-if="!valid" style="color:#ed4c40;font-weight:bold">{{message || 'Invalid authenticator code'}}</div>
                        </transition>
                    </div>
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
                        <input type="text" placeholder="*** ***" v-model="code" @focus='clearValid'
                               :style='{borderColor:valid?"":"#ed4c40"}'>
                    </label>

                    <label class="modal-switch">
                        <input type="checkbox"/>
                        <div class="modal-switch__text">Remember this computer for 30 days</div>
                    </label>

                    <button class="btnauth" type="button" @click="checkLogin" :disabled="loader" :class="{loader:loader}">
                        Confirm
                        <i class="fal fa-spinner-third fa-spin" v-show="loader" style="margin-left: 10px"></i>
                    </button>
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
                email: 'yan@gmail.com',
                password: 'qweqwe',
                code: undefined,
                showComponent: 'login',
                valid: true,
                validCode: true,
                loader: false,
                message: false,
            }
        },
        mounted() {
            this.$rest.api('isAuthUser')
                .then(res => {
                    if (res.success) {
                        // this.$store.dispatch('auth/signIn', res.data);
                        // this.$router.push('dashboard');
                    }
                })
        },
        methods: {
            checkLogin() {
                this.loader = true;

                return this.$rest
                    .api('loginUseEmail', { email: this.email, password: this.password, code: this.code })
                    .then(res => {
                        if (res.success) {
                            this.$store.dispatch('auth/signIn', res.data);
                            return this.$router.push('dashboard');
                        }
                        else {
                            console.log(res);
                            if (res.error.errorCode === 63426324) {
                                this.message = res.error.message.split('.')[0];
                            }
                            if (res && res.error && res.error.errorCode === 6231533598118172) {
                                if (this.showComponent == '2fa') {
                                    return this.valid = false;
                                }
                                this.showComponent = '2fa';
                                return;
                            }
                            this.valid = false;

                        }
                        // return Promise.reject(res.error);
                    })
                    .then(() => {
                        this.loader = false;

                    })
                    .catch(err => {
                        this.loader = false;

                        // return console.error(err);
                    })

            },
            clearValid() {
                this.valid = true;
                this.message = false;
            },
            back() {
                this.showComponent = 'login'
                this.clearValid();
            }
        }
    }
</script>

<style>
    .fade-trans-enter-active,
    .fade-trans-leave-active {
        transition: all .5s;
    }

    .fade-trans-enter,
    .fade-trans-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
</style>
