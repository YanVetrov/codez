<template>

    <header class="header ">

        <div class="logo">
            <nuxt-link to="/">
                <img :src="logoUrl" alt="Logo"/>
            </nuxt-link>
        </div>

        <div class="header__main">

            <div class="header-list">

                <ul>
                    <li>
                        <a href="/" class="header-list-active">

                            <i class="fal fa-comment-alt"></i>

                            <span class="count">1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" class="header-list-active">
                            <i class="fal fa-usd-circle"></i>

                            <span class="count">1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="fal fa-user"></i>
                        </a>
                    </li>
                </ul>

            </div>


            <div class="header__item">

                <div class="master-bloc">
                    <div class="master-bloc-date">
                        <div class="master-bloc-date-photo">
                            <div class="user-bloc-date-photo-item"><img src="img/sadness-face.svg" alt=""></div>
                        </div>
                        <div class="master-bloc-date-info">
                            <p>{{firstName}} {{lastName}}</p>
                            <span>{{email}}</span>

                        </div>
                        <!--<em class="caret caret-open"></em>-->
                        <em class="caret"></em>
                    </div>

                    <!--<ul class="master-bloc-list master-bloc-list-open">-->
                    <ul class="master-bloc-list">

                        <li><a href="/">Редактировать профиль</a></li>
                        <li><a href="/">История действий</a></li>
                        <li><a href="/">{{$t('logout')}}</a></li>

                    </ul>

                </div>

                <div class="setting-block">

                    <span class="setting-icon"><i class="fal fa-sliders-h"></i></span>

                    <!--<ul class="setting-bloc-list setting-bloc-list-open">-->
                    <ul class="setting-bloc-list">

                        <li><a href="/">Редактировать профиль <i class="fal fa-pencil"></i> </a></li>
                        <li><a href="/">История действий <i class="fal fa-history"></i> </a></li>
                        <li><a href="/">Выход <i class="fal fa-sign-out"></i></a></li>
                        <li>
                            <div class="switch-block ">

                                <div class="switch__">
                                    <p>Тех.работы</p>
                                    <span>Закрыть сайт на тех.работы</span>
                                </div>

                                <div class="switch-site">

                                <span class="switch switch-switcher">
                                    <input type="radio" id="item1-state-off" name="item1" value="-1" checked>
                                    <input type="radio" id="item1-state-on" name="item1" value="1">
                                    <i></i>
                                </span>

                                </div>

                            </div>
                        </li>

                    </ul>

                </div>


            </div>

        </div>

    </header>
</template>

<script>

    export default {
        data() {
            return {
                dropdown2: 'dropdown',
                logoUrl: this.$rest.fsPath + '/img/logo/res/logo.png',
                dropdown1: 'dropdown',
                dropdown3: 'dropdown',
                dropdown: 'dropdown',
                profileList: [
                    {name: 'My profile', icon: 'user', link: '/profile'}
                ],
                messages: {
                    total: '5',
                    box: [
                        {text: "Привет!!", time: "22:30", user: "Шик"},
                        {text: "Привет!!", time: "22:30", user: "Шик"},
                        {text: "Привет!!", time: "22:30", user: "Шик"},
                        {text: "Привет!!", time: "22:30", user: "Шик"},
                        {text: "Привет!!", time: "22:30", user: "Шик"},
                    ]
                },

                firstName: '',
                lastName: '',
                email: ''
            }
        },
        mounted() {
            this.$root.$on('userInfo', (data) => {
                this.firstName = data.fn;
                this.lastName = data.ln;
                this.email = data.email;

            })
        },
        methods: {
            close() {
                this.$store.dispatch('Menu/close');

            },
            messageOpen(e) {
                let n = 'dropdown';
                this.dropdown === n ? this.dropdown = `${n} open` : this.dropdown = n;
            },
            openTask(e) {
                let n = 'dropdown';
                this.dropdown1 === n ? this.dropdown1 = `${n} open` : this.dropdown1 = n;
            },
            openProfile(e) {
                let n = 'dropdown';
                this.dropdown2 === n ? this.dropdown2 = `${n} open` : this.dropdown2 = n;
            },

            localizee(lang) {
                this.$root.$i18n.locale = lang;
                this.$store.dispatch('lang', lang);
            }
        }
    }
</script>


<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>

