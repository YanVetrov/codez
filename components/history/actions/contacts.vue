<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'addContact'">Добавлен контакт</h4>
            <h4 class="timeline-title" v-if="method === 'editContact'">Отредактирован контакт</h4>
            <h4 class="timeline-title" v-if="method === 'deleteContact'"> Удален контакт</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
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
    </div>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>