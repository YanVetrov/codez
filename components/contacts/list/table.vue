<template>


    <div class="table">

        <table>

            <thead>
            <tr>
                <td>
                    <span>Иконка</span>

                </td>
                <td>
                    <span>Имя</span>
                </td>
                <td>
                    <span>Контакт</span>

                </td>
                <td>
                    <span>Ссылка</span>

                </td>
                <td>
                    <span>размер</span>

                </td>
                <td>
                    <span>Действие</span>
                </td>
            </tr>
            </thead>

            <draggable v-model="users" :options="{handle:'.dragg',ghostClass:'.ghost'}" @change="$emit('sort',users)"
                       :element='"tbody"'>
                <tableItem
                        v-for='user in users'
                        @delete='$emit("delete",$event)'
                        @edit='$emit("edit",$event)'
                        :user='user'
                        :key='user.id'
                />
            </draggable>


        </table>

    </div>


</template>

<script>
    import tableItem from './tableItem';
    import draggable from 'vuedraggable'

    export default {
        props: ['data'],
        components: {tableItem, draggable},
        data() {
            return {
                users: this.data
            }
        }

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
