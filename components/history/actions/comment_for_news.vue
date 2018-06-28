<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'deleteCommentNews'"> Отзыв к новосте удален</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p v-if="method === 'deleteCommentNews'">Администратор удалил  коменнтарий к новосте: "{{response.news.title}}"</p>
        </div>
    </div>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo,},
        props: ['method', 'date', 'response', 'param', 'network', 'user', ],

    }
</script>

<style scoped>

</style>