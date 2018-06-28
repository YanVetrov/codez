<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'createPartner'">Добавлен партнер</h4>
            <h4 class="timeline-title" v-if="method === 'deletePartner'" >Удален партнер</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p class="timeline-title" v-if="method === 'createPartner'"> Администратор добавил партнера {{param.title}}</p>
            <p class="timeline-title" v-if="method === 'deletePartner'"> Администратор удалил партнера {{param.title}}</p>
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