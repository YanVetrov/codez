<template>

    <div class="profile-wr">


        <div class="profile">


            <div class="border sidebar-width profile-sidebar">

                <h5 class="title">Profile</h5>

                <div class="profile-sidebar--photo">

                    <button>

                        <strong style="padding: 0;">
                            <img class="pic" :src="$identicon.create(profile.id)" alt="">
                        </strong>

                        <p>
                            <span>Upload<br> image </span>

                            <em>SOON!</em>
                        </p>
                    </button>

                </div>

                <div class="profile-sidebar--ac">

                    <ul>
                        <li>

                            <p class="profile-sidebar--panel-title profile-sidebar--panel-title__panel-active">
                                <i class="fal fa-id-card"></i> User
                            </p>

                            <div class="profile-sidebar--panel-body">
                                <label>
                                    <em>Email</em>
                                    <p><input type="text" placeholder="xxxx@domain.com" v-model="profile.email"><span
                                            class="btn btn__correct"></span></p>
                                </label>
                                <label>
                                    <em>First name</em>
                                    <p><input type="text" placeholder="not indicated" v-model="profile.first_name"><span
                                            class="btn btn__correct"></span></p>
                                </label>

                                <label>
                                    <em>Last name</em>
                                    <p><input type="text" placeholder="not indicated" v-model="profile.last_name"><span
                                            class="btn btn__correct"></span></p>
                                </label>
                            </div>

                        </li>
                        <li>
                            <p @click="active2==''?active2='profile-sidebar--panel-title__panel-active':active2=''"
                               class="profile-sidebar--panel-title" :class='active2'><i class="fal fa-shield-check"></i>
                                Actions</p>

                            <div class="profile-sidebar--panel-body">
                                <span v-if="profile.blocked"
                                      style="color:rgba(150,50,50,0.7)">{{profile.blockReason}}</span>
                                <button class="btn btn-blue" style="padding:5px;margin:5px"
                                        :style="profile.blocked?disabled:''">Block
                                </button>
                                <button class="btn btn-blue" style="padding:5px;margin:5px"
                                        :style="profile.blocked?'':disabled">Unblock
                                </button>
                                <button class="btn btn-blue" style="padding:5px;margin:5px">Sign-in to this account
                                </button>
                            </div>
                        </li>
                        <li>
                            <p @click="active3==''?active3='profile-sidebar--panel-title__panel-active':active3=''"
                               class="profile-sidebar--panel-title" :class='active3'><i class="fal fa-envelope"></i>
                                Contact data</p>
                            <div class="profile-sidebar--panel-body">
                                <label>
                                    <em>Phone</em>
                                    <p><input type="text" placeholder="+555 555 55 55" v-model="profile.phone"><span
                                            class="btn btn__correct"></span></p>
                                </label>

                            </div>
                        </li>
                        <li>
                            <p @click="active4==''?active4='profile-sidebar--panel-title__panel-active':active4=''"
                               class="profile-sidebar--panel-title" :class='active4'><i class="fal fa-key"></i> Access
                            </p>
                            <div class="profile-sidebar--panel-body">
                                <label>
                                    <em>Old password</em>
                                    <p><input type="text" placeholder="********" v-model="password.old"><span
                                            class="btn btn__correct"></span></p>
                                </label>
                                <label>
                                    <em>New password</em>
                                    <p><input type="text" placeholder="*********" v-model="password.new"><span
                                            class="btn btn__correct"></span></p>
                                </label>
                                <label>
                                    <em>New password again</em>
                                    <p><input type="text" placeholder="*********" v-model="password.new_repeat"><span
                                            class="btn btn__correct"></span></p>
                                </label>
                                <button class="btn btn-blue" style="padding:5px">Save password</button>
                            </div>
                        </li>
                    </ul>

                </div>

                <div class="profile-sidebar--bot">
                    <button class="btn btn-blue" @click="$emit('edit',profile)">Save profile</button>
                </div>


            </div>


            <div class="profile-block">


                <div class="profile-main-head">
                    <ul class="text-center">
                        <li v-for="tab in tabs" @click="current=tab.component"
                            :class="current===tab.component?'active':''" :key="tab.name"><span>{{$t(tab.name)}}</span>
                        </li>
                    </ul>
                </div>


                <component :profile="profile" :is="current"
                           :sidebar="false"/>


            </div>

        </div>

    </div>

</template>

<script>
    import history from '~/components/history/all'
    import orders from '~/components/orders/list'
    import partner from './partner'

    export default {
        components: {history, orders, partner},
        props: ['data'],
        data() {
            return {
                tabs: [
                    {name: 'page.user.profile.tab.history', component: "history", active: false},
                    {name: 'page.user.profile.tab.partners', component: "partner", active: false},
                    {name: 'page.user.profile.tab.orders', component: "orders", active: false},
                    {name: 'page.user.profile.tab.verifications', component: "orders", active: false}

                ],
                disabled: {
                    opacity: 0.3,
                    cursor: 'not-allowed'
                },
                current: "history",
                password: {},
                active2: '',
                active3: '',
                active4: '',
            }
        },
        computed: {
            profile() {
                return this.data
            }
        }

    }
</script>
<style scoped>
    .pic {
        width: 100%;
        height: 100%;
    }
</style>
