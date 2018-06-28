<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'createCurrency'">Добавалена валюта</h4>
            <h4 class="timeline-title" v-if="method === 'editCurrency'">Отредактирован валюта</h4>
            <h4 class="timeline-title" v-if="method === 'deleteCurrency'"> Удаленна валют</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <h4 class="timeline-title" v-if="method === 'createCurrency'">Администратор добавил валюту {{param.title}}</h4>
            <h4 class="timeline-title" v-if="method === 'editCurrency'">Администратор отредактировал валюту {{param.title}}</h4>
            <h4 class="timeline-title" v-if="method === 'deleteCurrency'">Администратор удалил валюту</h4>
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