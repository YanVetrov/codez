<template>
    <div class="white-box">
        <div> <h3>Auth</h3></div>
        <div v-for="(el,i) in social " :key="i">
            <h4> {{el.name}}</h4>
        </div>

        <div>
            <div class="form-group"></div>
            <label> Client ID</label>
            <input type="text" class="form-control">
            <div><label> Secret Key</label>
                <input type="password" class="form-control" v-model="password" v-show="!showPass">
                <input type="text" class="form-control" v-model="password" v-show="showPass">
                <button class="btn " @click='showPass = !showPass'>
                    <span v-show="showPass"> Показать пароль</span>
                    <span v-show="!showPass"> Скрыть пароль</span>
                </button>
                <button class="btn-default">Активировать</button>
                <button class="btn-default">Деактивировать</button>
                <button class="btn-default">Настройка</button>
            </div>


        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                showPass: false,
                password: 'lalalala',
                social: ''
            }
        },

        methods: {
            getSocialAuthSettings() {
                // this.status_load = false;
                this.$rest.api('getSocialAuthSettings')
                    .then(response => {
                        if (response.success === true) {
                            this.social = response.data;
                        }
                    })
            }
        },
        created() {
            return this.getSocialAuthSettings()
        }

    }
</script>
<style>

</style>
