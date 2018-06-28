<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'createRules'">Создано правило</h4>
            <h4 class="timeline-title" v-if="method === 'editRules'">Отредактировано правило</h4>
            <h4 class="timeline-title" v-if="method === 'deleteRule'"> Удаленно правило</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p class="timeline-title" v-if="method === 'createRules'"> Администратор опубликовал правило: {{response.title}}</p>
            <p class="timeline-title" v-if="method === 'editRules'"> Администратор отредактировал правило: {{response.title}}</p>
            <p class="timeline-title" v-if="method === 'deleteRule'"> Администратор удалил правило: {{response.rules.title}}</p>

        </div>
    </div>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo,dateInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>