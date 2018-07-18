<template>


            
                <div  class="sidebar-width border users-list-toodo-sidebar--active-block">
            
                    <div class="users-list-toodo-sidebar--active-block__top">
                        <h5 class="title">Активность</h5>
                        <p>{{data.length}} Онлайн</p>
                    </div>
            
                    <div class="users-list-toodo-sidebar--active-block__list--wr">
            
                        <ul class="users-list-toodo-sidebar--active-block__list">
                            <li v-for='user in data' :key='user.id'>
                                <p class="flag"><img src="~/assets/img/comments.png" alt="flag"></p>
            
                                <p class="ip">IP {{user.ip}}</p>
            
                                <span class="device"><span class="icon-laptop"></span></span>
            
                                <div class="active-change">
                                    <p class="active-change__">{{user.actionText}}</p>
                                    <div class="active-change--item">
                                        <p><img src="~/assets/img/user-new.png" alt="user"></p>
            
                                        <div class="active-change--info">
                                            <p>{{user.country}} &mdash; {{user.countryName}}</p>
                                            <span>{{user.email?user.email:''}}</span>
                                        </div>
            
                                    </div>
                                </div>
            
                            </li>
                            
                        </ul>
            
                    </div>
                </div>
            
              



</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
