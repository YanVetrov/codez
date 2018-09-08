<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">FAQ<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'admin/faq/create'">Администратор создал ответ на вопрос: {{response.title}}</p>
                <p v-else-if="method === 'admin/faq/delete'">Администратор удалил вопрос: {{response.faq.title}} </p>
                <p v-else-if="method === 'admin/faq/edit'">Администратор отредактировал вопрос: {{JSON.stringify(response)}} </p>
                <p v-else>{{method}}</p>
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
        props: ['method', 'date', 'response', 'param', 'network', 'user', ],

    }
</script>

<style scoped>

</style>