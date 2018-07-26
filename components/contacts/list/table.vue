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

            <draggable v-model="contacts" :options="{handle:'.dragg',ghostClass:'.ghost'}"
                       @change="$emit('sort',contacts)"
                       :element='"tbody"'>
                <tableItem
                        v-for='item in contacts'
                        @delete='$emit("delete",$event)'
                        @edit='$emit("edit",$event)'
                        :_id="item._id"
                        :name="item.name"
                        :link="item.link"
                        :value="item.value"
                        :imageSrc="item.images.big"
                        :size="item.size"

                        :key='item.id'
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
                contacts: this.data.map((item) => {
                    let images = {};
                    if (item && item.image && item.image.files) {
                        for (let key in item.image.files) {
                            if (item.image.files.hasOwnProperty(key)) {
                                if (item.image.files[key].type && item.image.files[key].url) {
                                    images[item.image.files[key].type] = item.image.files[key].url
                                }
                            }
                        }
                    }
                    return {
                        _id: item._id,
                        name: item.name,
                        link: item.link,
                        value: item.value,
                        size: item.size,
                        positionSort: item.positionSort,
                        images,
                        active: true,
                        updatedAt: item.updatedAt,
                        createdAt: item.createdAt,
                    }
                })
            }
        }

    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
