<template>


    
        
            
            <div class="list-contact-main border">
            
             <h3 class="title">Список контактов</h3>
                <tableMain :data='data.users'/>
            
                
                <pagination           
                :currentPage="page.current_page"
                :totalPages="page.total_page"
                @page-changed="$parent.getAdmins"/>
            
            </div>
        
            
            
        
       



</template>

<script>
import pagination from '~/components/pagination'
import tableMain from './table';
    export default {
        props: ['data','page'],
        components:{pagination,tableMain}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
