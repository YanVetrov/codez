<template>

    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span v-if="method === 'addContact'" class="icon-company img-border" style="background: #3ecb34;"><i class="fal fa-link"></i></span>
            <span v-if="method === 'editContact'" class="icon-company img-border" style="background: #1383f4;"><i class="fal fa-link"></i></span>
            <span  v-if="method === 'deleteContact'" class="icon-company img-border" style="background: #f1881d;"><i class="fal fa-link"></i></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Контакты <i class="fal fa-angle-right"></i></p>

                <p v-if="method === 'addContact'">Администратор добавил контакт {{param.name}} Ссылка: {{param.link}}</p>
                <p v-if="method === 'editContact'">Администратор отредактировал контакт {{param.name}} Ссылка: {{param.link}}</p>
                <p v-if="method === 'deleteContact'">Администратор удалил контакт {{response.contacts.name}}</p>
            </div>

        </td>
        <userInfo :user="user"/>
        <ip-info :network="network"/>

    </tr>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import ipInfo from './subcomponents/ipInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, ipInfo, dateInfo},
        props: {
            method: {type: String, required: true},
            date: {type: String, required: true},
            response: {type: Object},
            param: {type: Object, required: true},
            network: {type: Object, required: true},
            user: {type: Object, required: true}
        },

    }
</script>