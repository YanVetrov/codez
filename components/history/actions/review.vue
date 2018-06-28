<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title" v-if="method === 'confirmReviewAdmin'"> Подтвержденн отзыв админом </h4>
            <h4 class="timeline-title" v-if="method === 'editReviewAdmin'"> Отредактирован отзыв админом </h4>
            <h4 class="timeline-title" v-if="method === 'deleteReviewAdmin'"> Админ удалил отзыв  </h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p v-if="method === 'confirmReviewAdmin'">Администратор подвердил отзыв: {{param.name}}</p>
            <p v-if="method === 'editReviewAdmin'">Администратор отредактировал данные отзыва: {{param.name}}</p>
            <p v-if="method === 'editReviewAdmin'">Администратор удалил отзыв: {{response.review.name}}</p>
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