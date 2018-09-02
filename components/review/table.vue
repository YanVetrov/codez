<template>
    <div class="table">
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
            <template v-for='user in data'>
                <tableItem @delete="$emit('delete',$event)" :user="user" :key="user.id"/>
                <tableReview :text="user.message" :key="user.id"/>
            </template>
            <tr class="dashboard-wait--no-proposal" v-if="data.length ===0">
                <td colspan="6">
                    <div class="dashboard-wait--no-proposal-wr">
                        <div class="dashboard-wait--no-proposal-item">
                            <p>
                                <i class="fal fa-comments"></i>
                            </p>
                        </div>
                        <div class="dashboard-wait--no-proposal-txt">
                            <p class="title">Unfortunately, we did not find</p>
                            <strong>any reviews</strong>
                            <span>for your search</span>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>


        </table>
    </div>

</template>

<script>
    import tableItem from './tableItem';
    import tableReview from './tableReview';

    export default {
        props: ['data'],
        components: {tableItem, tableReview}

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
