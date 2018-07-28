<template>
        <td class="bg user">

            <div>

                <span class="icon-company"><img src="img/bank.svg" alt=""></span>

                <div class="company">
                    <p class="name-company">{{user.last_name}} {{user.first_name}}</p>
                    <p><span>{{user.email}}</span></p>
                </div>

            </div>

        </td>

</template>

<script>
    export default {
        props: ['user']
    }
</script>
