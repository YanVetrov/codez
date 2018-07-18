<template>


    
        
            

                            <tr>
            
                                <td>
            
                                    <span class="icon-company"><img src="~/assets/img/bank.svg" alt=""></span>
            
                                    <div class="company">
                                        <p class="name-company">{{user.first_name}} {{user.last_name}} </p>
                                        <p>Был вчера в **:**</p>
                                    </div>
            
                                </td>
            
                                <td>
                                    <p>{{user.email}}</p>
                                </td>
            
                                <td>
            
                                    <ul>
                                        <li>
                                            <p class="color blue">{{user.exchangesTotal}}</p>
                                            <p><span>Всего</span></p>
                                        </li>
                                        <li>
                                            <p class="color green">{{user.exchangesSuccess}}</p>
                                            <p><span>Успешно</span></p>
                                        </li>
                                    </ul>
            
            
                                </td>
            
                                <td class="user-data">
                                    <p>{{user.createdAt.split('T')[0]}} </p>
                                    <p>в 14:25 ч</p>
                                </td>
            
                                <td>
                                    <p class="color green">{{user.balance}} <span>USD</span></p>
                                    <p>Партнерские <span>{{user.partner}}</span></p>
                                </td>
            
                                <td>
                                    <div class="table-btn-users">
                                        <a href="/" class="btn btn-simple btn-simple--img"><span class="icon-edit-profile"></span>Профиль</a>
                                    </div>
                                </td>
                            </tr>
            

            
            
        
       



</template>

<script>
    export default {
        props: ['user'],
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
