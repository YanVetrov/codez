<template>
    <tr :ident="_id">
        <td>
            <span class="fal fa-company"><img :src="$rest.fsPath+imageSrc" alt=""></span>
        </td>

        <td>
            <p>{{name}}</p>
        </td>

        <td>

            <div class="correct-input">
                <label>
                    <input type="text" placeholder="нет контакта" v-model='value'
                           @blur="$emit('edit',{value:value,contact_id:_id})">
                    <span class="btn btn__correct"></span>
                </label>
            </div>

        </td>

        <td class="user-data">
            <div class="correct-input">
                <label>
                    <input type="text" placeholder="нет ссылки" v-model='link'
                           @blur="$emit('edit',{link:link,contact_id:_id})">
                    <span class="btn btn__correct"></span>
                </label>
            </div>
        </td>

        <td>
            <p class="color green">{{(100/12 *size).toFixed(0)}} %</p>
        </td>

        <td class="dragg">
            <div class="table-btn-users">
                <a class="btn btn-simple cart-delete" @click.prevent="$emit('delete',_id)"></a>
            </div>
            <div class="double-b"></div>
        </td>
    </tr>


</template>

<script>
    export default {
        props: {
            _id: {type: String, required: true},
            name: {type: String, required: true},
            link: {type: String, required: false},
            value: {type: String, required: false},
            imageSrc: {type: String, required: true},
            size: {type: Number, required: true},
        },
    }
</script>

<style lang='scss' scoped>

</style>
