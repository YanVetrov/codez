<template>


    
        
            
            <div>
            
             <h3 class="title">Список контактов</h3>
                <tableMain :data='data.users'
                @edit="$parent.editAdmin($event)"
                @delete='$parent.deleteAdmin($event)'
                @sort='$parent.sortAdmin($event)'
                />
            
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
