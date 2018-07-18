<template>


    
        
            
            <div>
            
                <tabs :data='data.tabs'
                      @ontab='$parent.getUserAdmin'
                      
                       />
            
                
               <search 
               :ph="data.placehold"
               @onselect='$parent.getUserAdmin(1,{sortType:$event})'
               @onenter='$parent.getUserAdmin(1,{search:$event})'
               />
            
            
                <tableMain :data='data.users'/>
            
                
                <pagination           
                :currentPage="page.current_page"
                :totalPages="page.total_page"
                @page-changed="$parent.getUserAdmin"/>
            
            </div>
        
            
            
        
       



</template>

<script>
import pagination from '~/components/pagination'
import tabs from './tabs';
import search from './searchblock';
import tableMain from './table';
    export default {
        props: ['data','page'],
        components:{pagination,tableMain,tabs,search}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
