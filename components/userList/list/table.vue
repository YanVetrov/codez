<template>
    <div class="table" v-if="data.length >0">
        <table>
            <thead>
            <tr>
                <td>
                    <span>Пользователь</span>
                </td>
                <td>
                    <span>E-mail</span>
                </td>
                <td>
                    <span>обмены</span>

                </td>
                <td>
                    <span>Регистрация</span>
                </td>
                <td>
                    <span>Баланс</span>

                </td>
                <td></td>
            </tr>
            </thead>

            <tbody>
            <tableItem v-for='user in data' :user='user' :key='user.id'/>
            </tbody>


        </table>
    </div>
    <div v-else>
        <div style="width: 100%;text-align: center;">Не найдено пользователей</div>
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
