<template>


    
        
            
            
            
            
                <div class="table">
            
                    <table>
            
                        <thead>
                            <tr>
                                <td>
                                    <span>Пользователь</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>E-mail</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>обменЫ</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>Регистрация</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>Баланс</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td></td>
                            </tr>
                        </thead>
            
                        <tbody>
                            
                            
                            <tableItem v-for='user in data' :user='user' :key='user.id' />
            
                           
            
                            <tr class="dashboard-wait--no-proposal">
                                <td colspan="6">Нет заявок</td>
                            </tr>
                        </tbody>
            
                    </table>
            
                </div>
            
            
        
       



</template>

<script>
import tableItem from './tableItem';
    export default {
        props: ['data'],
        components:{tableItem}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
