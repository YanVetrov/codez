<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span class="icon-company img-border"><img src="img/bank.svg" alt=""></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Отзывы<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'confirmReviewAdmin'">Администратор подвердил отзыв: {{param.name}}</p>
                <p v-if="method === 'editReviewAdmin'">Администратор отредактировал данные отзыва: {{param.name}}</p>
                <p v-if="method === 'editReviewAdmin'">Администратор удалил отзыв: {{response.review.name}}</p>
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
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>