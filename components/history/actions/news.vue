<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'createNews'">Опубликована новость.</h4>
            <h4 class="timeline-title" v-if="method === 'editNews'">Изменена новость.</h4>
            <h4 class="timeline-title" v-if="method === 'deleteNews'">Удаленна новость.</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p v-if="method === 'createNews'">Администратор опубликовал новость: "{{response.title}}"</p>
            <p v-if="method === 'editNews'">Администратор отредактировал данные новости: "{{param.title}}"</p>
            <p v-if="method === 'deleteNews'">Администратор удалил новость: "{{response.news.title}}"</p>
        </div>
    </div>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user',],

    }
</script>

<style scoped>

</style>