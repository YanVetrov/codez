<template>

                
                    
                
                
                    <ul class="list-partner-ul">
                
                        <tableItem
                        v-for="partner in data"
                        :key="partner._id"
                        :_id="partner._id"
                        :link="partner.link"
                        :title="partner.title"
                        :imageSrc="partner.image.files.original.url"
                        @delete="$emit('delete',$event)"
                        
                        />
                
                    </ul>
                
                    




</template>

<script>
    import tableItem from './tableItem';
    import pagination from '~/components/_utils/pagination'

    export default {
        props: ['data'],
        components: {tableItem,pagination}

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
