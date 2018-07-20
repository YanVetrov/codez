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
            
                        
                        <draggable v-model="data" :options="{handle:'.dragg',ghostClass:'.ghost'}" @change="$emit
                        ('edit',$event.moved.element,$event.moved.newIndex+0.00001)
                        " 
                        :element='"tbody"'>
                            <tableItem 
                            v-for='user in data' 
                            @delete='$emit("delete",$event)' 
                            @edit='$emit("edit",$event)'
                            :user='user' 
                            :key='user.id' 
                            />
            </draggable>
                            <tr class="dashboard-wait--no-proposal">
                                <td colspan="6">Нет заявок</td>
                            </tr>
                        
            
                    </table>
            
                </div>
            
            
        
       



</template>

<script>
import tableItem from './tableItem';
import draggable from 'vuedraggable'
    export default {
        props: ['data'],
        components:{tableItem,draggable}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
