<template>


            
                          
            
                    <ul class="users-list-toodo-sidebar--list__client">
                        <li>
                            <span><img src="~/assets/img/users-two-blue.png" alt=""></span>
                            <p class="progress">
                                Клиентов
                                <span class="line blue"></span>
                            </p>
                            <p class="count">{{data.active}}</p>
                        </li>
                        <li>
                            <span><img src="~/assets/img/sadness-face.svg" alt=""></span>
                            <p class="progress">
                                Заблокировано
                                <span class="line red"></span>
                            </p>
                            <p class="count">{{data.blocked}}</p>
                        </li>
                    </ul>
            
                    



</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
