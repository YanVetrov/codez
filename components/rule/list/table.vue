<template>
                    <div class="table">
                
                        <table>
                
                            <tbody>
                            <template v-if="data.length>0">
                            <tableItem @delete="$emit('delete',$event)" v-for="rule in data" :rule="rule" :key="rule._id"/>    
                            </template>
                            
                
                
                                <tr class="dashboard-wait--no-proposal" v-else>
                                    <td colspan="1"> <div class="dashboard-wait--no-proposal-wr">
                                        <div class="dashboard-wait--no-proposal-item">
                                            <p>
                                                <i class="fal fa-question"></i>
                                            </p>
                                        </div>
                                        <div class="dashboard-wait--no-proposal-txt">
                                            <p class="title">Простите мы не нашли</p>
                                            <span>правил по вашему запросу</span>
                                            <strong>VASA</strong>
                                        </div>
                                    </div></td>
                                </tr>
                
                            </tbody>
                
                        </table>
                
                    </div>
</template>

<script>
    import tableItem from './tableItem';

    export default {
        props: ['data'],
        components: {tableItem}

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
