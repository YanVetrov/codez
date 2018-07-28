<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Валюты<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'createCurrency'">Администратор добавил валюту {{param.title}}</p>
                <p v-if="method === 'editCurrency'">Администратор отредактировал валюту {{param.title}}</p>
                <p v-if="method === 'deleteCurrency'">Администратор удалил валюту</p>
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