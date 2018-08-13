<template>

                
                    
                
<div class="table">
                
                        <table>
                
                            <thead>
                                <tr>
                                    <td>
                                        <span>ID</span>
                
                                    </td>
                                    <td>
                                        <span>Отдает</span>
                
                                    </td>
                                    <td>
                                        <span>Сумма</span>
                
                                    </td>
                                    <td class="ref">
                                        <span></span>
                
                                    </td>
                                    <td>
                                        <span>Получает</span>
                
                                    </td>
                                    <td>
                                        <span>Сумма</span>
                
                                    </td>
                                    <td>
                                        <span>ДАТА</span>
                                    </td>
                                    <td>
                                        <span>УПРАВЛЕНИЕ</span>
                                    </td>
                                </tr>
                            </thead>
                
                            <tbody>
                              <tableItem
                              v-for="order in data"
                              :key="order.id"
                              :order="order"
                              />
                            </tbody>
                
                        </table>
                
                    </div>
                
                    




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
