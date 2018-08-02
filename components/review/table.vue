<template>
    <div class="table" v-if="data.length >0">
        <table>
            <thead>
            <tr>
                                <td>
                                    <span>ID</span>
                
                                </td>
                                <td>
                                    <span>Опубликовал</span>
                                </td>
                                <td>
                                    <span>Дата</span>
                
                                </td>
                                <td>
                                    <span>USER ID</span>
                
                                </td>
                                <td>
                                    <span>IP</span>
                
                                </td>
                                <td>
                                    <span>Действия</span>
                                </td>
                            </tr>
            </thead>

            <tbody>
            <template v-for='user in data' >
                
                                            <tableItem @delete="$emit('delete',$event)" :user="user" :key="user.id" />
                
                                            <tableReview :text="user.message" :key="user.id" />
            </template>
            </tbody>


        </table>
    </div>
    <div v-else>
        <div style="width: 100%;text-align: center;">Не найдено пользователей</div>
    </div>
</template>

<script>
    import tableItem from './tableItem';
    import tableReview from './tableReview';

    export default {
        props: ['data'],
        components: {tableItem,tableReview}

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
