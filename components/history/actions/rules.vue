<template>
    <tr>

        <date-info :date="date"/>

        <td class="small">

            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Правило<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'createRules'"> Администратор опубликовал правило: {{response.title}}</p>
                <p v-if="method === 'editRules'"> Администратор отредактировал правило: {{response.title}}</p>
                <p v-if="method === 'deleteRule'"> Администратор удалил правило: {{response.rules.title}}</p>
            </div>

        </td>

        <userInfo :user="user"/>
        <ip-info :network="network"/>

    </tr>
</template>

<script>
    import ipInfo from './subcomponents/ipInfo.vue';
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo, ipInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>