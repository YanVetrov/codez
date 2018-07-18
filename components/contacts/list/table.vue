<template>


    
        
            
            
            
            <div class="table">
            
                    <table>
            
                        <thead>
                            <tr>
                                <td>
                                    <span>Иконка</span>
            
                                </td>
                                <td>
                                    <span>Имя</span>
                                </td>
                                <td>
                                    <span>Контакт</span>
            
                                </td>
                                <td>
                                    <span>Ссылка</span>
            
                                </td>
                                <td>
                                    <span>размер</span>
            
                                </td>
                                <td>
                                    <span>Действие</span>
                                </td>
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
