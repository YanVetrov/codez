<template>
    <div class="review border">
        <headerblock
                :tabs="tabs"
                @ontab='changeTab'/>


        <search placeholder="Search reviews... (ip,name,text)"
                :filter="sortFilter"
                @filterChange='filterChange'
                @searchChange='searchChange'/>


        <tableMain :data='data' @delete="$parent.deleteReview($event)" :load="load"/>


        <pagination :currentPage="page.current_page"
                    :totalPages="page.total_page"
                    @page-changed="$parent.getReviews"/>
    </div>
</template>

<script>
    import headerblock from './header';
    import search from '../_utils/search';
    import tableMain from './table';

    export default {
        props: ['data', 'page','load'],
        components: {tableMain, headerblock, search},
        data() {
            return {
                tabs: [
                    {key: 'all', name: 'all'},
                    {key: 'confirmed', name: 'confirmed'},
                    {key: 'pending', name: 'pending'},
                    {key: 'blocked', name: 'blocked'},
                ],
                sortFilter: [
                    {value: 'all', name: 'Select filter'},
                    {value: 'created_at=1', name: 'New'},
                    {value: 'created_at=-1', name: 'Old'}
                ]
            }
        },
        methods:{
            changeTab(){
                /**
                 * TODO: need transfer this fn to  index.vue
                 * */
                console.log('change tab',arguments)
            },
            filterChange(){
                /**
                 * TODO: need transfer this fn to  index.vue
                 * */
                console.log('filterChange',arguments);
                this.$parent.getReviews(1,{sortType:''})
            },
            searchChange(){
                console.log('searchChange',arguments);
                /**
                 * TODO: need transfer this fn to  index.vue
                 * */
                this.$parent.getReviews(1,{search:''})

            }
        }

    }
</script>