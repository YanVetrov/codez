<template>
    <nav class="navbar navbar-default navbar-static-top m-b-0">
        <div class="navbar-header">
            <div class="top-left-part">
                <!-- Logo -->
                <nuxt-link class="logo" to="/">

                    <span class="hidden-xs">
                        <img :src="logoUrl" alt="home" class="dark-logo"/>
                        <img :src="logoUrl" alt="home" class="light-logo"/>
                     </span>
                </nuxt-link>
            </div>
            <!-- /Logo -->
            <!-- Search input and Toggle icon -->

            <ul class="nav navbar-top-links navbar-left">
                <li><a @click="close()" class="open-close waves-effect waves-light"><i class="ti-menu"></i></a></li>
                <script>

                </script>
                <li :class="dropdown" @click="messageOpen()">
                    <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"> <i
                            class="mdi mdi-gmail"></i>
                        <div class="notify"><span class="heartbit"></span> <span class="point"></span></div>
                    </a>
                    <ul class="dropdown-menu mailbox animated bounceInDown">
                        <li>
                            <div class="drop-title">{{$t('youhave')}} {{messages.total}} {{$t('notifications')}}</div>
                        </li>
                        <li>
                            <div class="message-center">
                                <a href="#" v-for="mess in messages.box" :key='mess.id'>
                                    <div class="user-img"><img src="../../static/images/users/pawandeep.jpg" alt="user"
                                                               class="img-circle">
                                        <span class="profile-status online pull-right"></span></div>
                                    <div class="mail-contnet">
                                        <h5>{{mess.user}}</h5> <span class="mail-desc">{{mess.text.lenght>10?mess.text.slice(0,10)+'...':mess.text}}</span>
                                        <span class="time">{{mess.time}}</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a class="text-center" href="javascript:void(0);"> <strong>{{$t('see')}} {{$t('all')}}
                                {{$t('notifications')}}</strong> <i
                                    class="fa fa-angle-right"></i> </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- .Task dropdown -->

                <!-- .Megamenu -->

                <!-- /.Megamenu -->
            </ul>
            <ul class="nav navbar-top-links navbar-right pull-right">

                <li :class="dropdown2" @click="openProfile()">
                    <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img
                            src="../../static/images/users/varun.jpg" alt="user-img" width="36" class="img-circle"><b
                            class="hidden-xs">{{firstName}}</b><span
                            class="caret"></span> </a>
                    <ul class="dropdown-menu dropdown-user animated flipInY">
                        <li>
                            <div class="dw-user-box">
                                <div class="u-img"><img src="../../static/images/users/varun.jpg" alt="user"/></div>
                                <div class="u-text"><h4>{{firstName}} {{lastName}}</h4>
                                    <p class="text-muted">{{email}}</p><a href="profile.html"
                                                                          class="btn btn-rounded btn-danger btn-sm">{{$t('profile')}}</a>
                                </div>
                            </div>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li v-for='list in profileList' :key="list.id">
                            <nuxt-link :to="list.link"><i :class="'ti-'+list.icon"></i>{{list.name}}</nuxt-link>
                        </li>
                        <li><a href="#"><i class="ti-wallet"></i> {{$t('balance')}}</a></li>
                        <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                        <li role="separator" class="divider"></li>
                        <li @click="locale"><a href="#"><i class="ti-settings"></i> {{$t('account')}} {{$t('settings')}}</a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#"><i class="fa fa-power-off"></i> {{$t('logout')}}</a></li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>

                <!-- /.dropdown -->
            </ul>
        </div>
        <!-- /.navbar-header -->
        <!-- /.navbar-top-links -->
        <!-- /.navbar-static-side -->
    </nav>
</template>

<script>
    const config = require('../../_config/app');

    export default {
        data() {
            return {
                dropdown2: 'dropdown',
                logoUrl: config.fsPath + '/img/logo/res/logo.png',
                dropdown1: 'dropdown',
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
            locale() {
                this.$store.dispatch('lang', 'ru');
            }
        }
    }
</script>


<style scoped>

</style>
