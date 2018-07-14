<template>


            
                                   <div class="sidebar-width border users-list-toodo-sidebar--list">
            
                    <ul class="users-list-toodo-sidebar--list__client">
                        <li>
                            <span><img src="~/assets/img/users-two-blue.png" alt=""></span>
                            <p class="progress">
                                Клиентов
                                <span class="line blue"></span>
                            </p>
                            <p class="count">1245</p>
                        </li>
                        <li>
                            <span><img src="~/assets/img/sadness-face.svg" alt=""></span>
                            <p class="progress">
                                Заблокировано
                                <span class="line red"></span>
                            </p>
                            <p class="count">2154</p>
                        </li>
                    </ul>
            
                    <div class="users-list-toodo-sidebar--social">
                        <p class="users-list-toodo-sidebar--social__title text-center">зарегестрировано через соц.сети</p>
            
                        <ul class="users-list-toodo-sidebar--social__list">
            
                            <li>
                                <p><img src="~/assets/img/vk.svg" alt=""></p>
                                <span>735</span>
                            </li>
            
                            <li>
                                <p><img src="~/assets/img/twitter.svg" alt=""></p>
                                <span>735</span>
                            </li>
            
                            <li>
                                <p><img src="~/assets/img/telegram.svg" alt=""></p>
                                <span>735</span>
                            </li>
            
                            <li>
                                <p><img src="~/assets/img/google.svg" alt=""></p>
                                <span>735</span>
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
