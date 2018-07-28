<template>

    <tr>

        <date-info :date="date"/>

        <td class="small">

            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Контакты <i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'addContact'">Администратор добавил контакт
                    {{$moment(date).format('DD.MM.YY в HH:mm')}}
                    Имя: {{param.name}}
                    Ссылка:{{param.link}}
                </p>
                <p v-if="method === 'editContact'">Администратор отредактировал контакт
                    {{$moment(date).format('DD.MM.YY в HH:mm')}}
                    Имя: {{param.name}}
                    Ссылка:{{param.link}}</p>
                <p v-if="method === 'deleteContact'">Администратор удалил контакт
                    {{$moment(date).format('DD.MM.YY в HH:mm')}}
                    Имя: {{response.contacts.name}}
                    Ссылка:{{response.contacts.link}}
                </p>
            </div>

        </td>
        <userInfo :user="user" />
        <ip-info :network="network"/>

    </tr>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import ipInfo from './subcomponents/ipInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo,ipInfo, dateInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>