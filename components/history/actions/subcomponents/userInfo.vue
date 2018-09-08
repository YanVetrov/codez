<template>
    <td class="bg user">
        <div>
                <span class="icon-company">
                    <img :src="$identicon.create(user._id)" alt="">
                </span>

            <div class="company">
                <p class="name-company">{{user.first_name}} {{user.last_name}}</p>
                <p><span>{{user.email}}</span></p>
            </div>

        </div>
    </td>
</template>

<script>
    export default {
        props: {
            user: {type: Object, required: true}
        }
    }
</script>
