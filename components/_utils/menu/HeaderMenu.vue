<template>

    <header class="header ">

        <div class="logo" v-if="menuActive">
            <nuxt-link to="/">
                <img :src="logoUrl" alt="Logo" @error="logoUrl = 'https://proexchanger.net/assets/img/logo/logo_fff.svg'"/>
            </nuxt-link>
        </div>

        <div class="header__main">

            <div class="header-list">

                <ul>
                    <li>
                        <a @click="switchMenu" class="header-list">

                            <i class="fal fa-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" class="header-list-active">

                            <i class="fal fa-comment-alt"></i>

                            <span class="count">1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" class="header-list">
                            <i class="fal fa-usd-circle"></i>

                            <span class="count">1</span>
                        </a>
                    </li>

                </ul>

            </div>


            <div class="header__item">

                <div class="locales-block">
                    <div class="locales-block-date" @click="openLocalesMenu">
                        <flag-icon :iso="$t('lang.flag.'+$root.$i18n.locale)"/>
                    </div>

                    <ul :class="dropdownLocalesMenu">
                        <li>
                            <a style="cursor: pointer" @click="changeLang('en')">{{$t('lang.en')}}</a>
                        </li>
                        <li>
                            <a style="cursor: pointer" @click="changeLang('ru')">{{$t('lang.ru')}}</a>
                        </li>

                    </ul>

                </div>

                <div class="master-bloc">
                    <div class="master-bloc-date" @click="openProfileMenu">
                        <div class="master-bloc-date-photo">
                            <div class="user-bloc-date-photo-item">
                                <img class="pic" :src="$identicon.create(user.id)" alt="">
                            </div>
                        </div>
                        <div class="master-bloc-date-info">
                            <p style="line-height: 1.1;">{{user.firstName}} {{user.lastName}}</p>
                            <span>{{user.email}}</span>

                        </div>
                        <!--<em class="caret caret-open"></em>-->
                        <em class="caret"></em>
                    </div>

                    <!--<ul class="master-bloc-list master-bloc-list-open">-->
                    <ul :class="dropdownProfileMenu">
                        <li>
                            <div class="switch-block ">
                                <div class="switch__">
                                    <p>Стутус оператора</p>
                                    <span>Онлайн оператора</span>
                                </div>
                                <div class="switch-site">
                                <span class="switch switch-switcher">
                                    <input type="radio" name="notifyAdmin" value="-1" title="">
                                    <input type="radio" name="notifyAdmin" value="1" title="" checked>
                                    <i></i>
                                </span>

                                </div>

                            </div>
                        </li>
                        <li>
                            <nuxt-link :to="'/users/edit/'+user.id">Редактировать профиль <i
                                    class="fal fa-user-edit"></i>
                            </nuxt-link>
                        </li>
                        <li>
                            <a style="cursor: pointer" @click="logout">{{$t('logout')}} <i class="fal fa-sign-out"></i></a>
                        </li>

                    </ul>

                </div>

                <div class="setting-block">

                    <span class="setting-icon" @click="openSettingMenu"><i class="fal fa-sliders-h"></i></span>

                    <ul :class="dropdownSettingMenu">
                        <li>
                            <nuxt-link to="/history">История действий <i class="fal fa-history"></i></nuxt-link>
                        </li>
                        <li>
                            <div class="switch-block ">

                                <div class="switch__">
                                    <p>Тех.работы</p>
                                    <span>Закрыть сайт на тех.работы</span>
                                </div>

                                <div class="switch-site">

                                <span class="switch switch-switcher">
                                    <input type="radio" name="activeSite" value="-1" title="" checked>
                                    <input type="radio" name="activeSite" value="1" title="">
                                    <i></i>
                                </span>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="switch-block ">

                                <div class="switch__">
                                    <p>Отключить файл XML</p>
                                    <span>Отключить файл курсов для листинга в мониторингах </span>
                                </div>

                                <div class="switch-site">

                                <span class="switch switch-switcher">
                                    <input type="radio" name="xmlStatus" value="-1" title="" checked>
                                    <input type="radio" name="xmlStatus" value="1" title="">
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
    import FlagIcon from "@/components/_utils/flag"

    export default {
        components: {FlagIcon},
        data() {
            return {
                logoUrl: this.$rest.fsPath + '/img/logo/res/logo.png',
                dropdownSettingMenu: 'setting-bloc-list',
                dropdownLocalesMenu: 'locales-block-list',
                dropdownProfileMenu: 'master-bloc-list',
            }
        },
        computed: {
            user() {
                return {
                    firstName: this.$store.getters['auth/checkAdmin'].first_name,
                    lastName: this.$store.getters['auth/checkAdmin'].last_name,
                    email: this.$store.getters['auth/checkAdmin'].email,
                    id: this.$store.getters['auth/checkAdmin']._id
                }
            },
            menuActive(){
                return this.$store.getters['Menu/close']
            }
        },
        methods: {

            logout() {
                this.$store.dispatch('auth/destroyUser', () => this.$router.push('/signin'));

            },
            switchMenu(){
                this.$store.commit('Menu/CLOSE')
            },

            openLocalesMenu() {
                let n = 'locales-block-list';
                this.dropdownLocalesMenu === n ? this.dropdownLocalesMenu = `${n}-open` : this.dropdownLocalesMenu = n;
                this.dropdownSettingMenu = 'setting-bloc-list';
                this.dropdownProfileMenu = 'master-bloc-list';
            },
            openProfileMenu() {
                let n = 'master-bloc-list';
                this.dropdownProfileMenu === n ? this.dropdownProfileMenu = `${n}-open` : this.dropdownProfileMenu = n;
                this.dropdownSettingMenu = 'setting-bloc-list';
                this.dropdownLocalesMenu = 'locales-block-list';

            },
            openSettingMenu() {
                let n = 'setting-bloc-list';
                this.dropdownSettingMenu === n ? this.dropdownSettingMenu = `${n}-open` : this.dropdownSettingMenu = n;
                this.dropdownProfileMenu = 'master-bloc-list';
                this.dropdownLocalesMenu = 'locales-block-list';


            },

            changeLang(lang) {
                this.$store.dispatch('local/change', lang);
                this.$root.$i18n.locale = lang;
                this.dropdownLocalesMenu = 'locales-block-list';


            }
        }
    }
</script>


<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>

