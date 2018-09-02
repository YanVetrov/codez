<template>
    <table>
        <tbody>
        <component v-bind:is="getTypeAction(action.method).componentName"
                   v-for="(action,i) in history"
                   :method="history.method"
                   :date="action.createdAt"
                   :param="action.param || 'smeh'"
                   :user="action.user || 'kolya'"
                   :network="action.network"
                   :response="action.response"
                   
                   :key="i"
        />
        </tbody>

    </table>

</template>

<script>
    import actionCommentForNews from './actions/comment_for_news.vue';
    import actionNews from './actions/news.vue';
    import actionRules from './actions/rules.vue';
    import actionReview from './actions/review.vue';
    import actionPartner from './actions/partners.vue';
    import actionFaq from './actions/faq.vue';
    import actionContact from './actions/contacts.vue';
    import actionUser from './actions/user.vue';
    import actionCurrency from './actions/currency.vue';

    export default {
        components: {
            actionNews,
            actionReview,
            actionRules,
            actionCommentForNews,
            actionPartner,
            actionFaq,
            actionContact,
            actionUser,
            actionCurrency,

        },
        props: ['history'],
        data() {
            return {
                type: {
                    deleteCommentNews: {componentName: 'actionCommentForNews', icon: 'exchange'},

                    createNews: {componentName: "actionNews", icon: 'sign-in'},
                    editNews: {componentName: "actionNews", icon: 'sign-in'},
                    deleteNews: {componentName: "actionNews", icon: 'sign-in'},

                    createRules: {componentName: "actionRules", icon: 'sign-in'},
                    editRules: {componentName: "actionRules", icon: 'sign-in'},
                    deleteRule: {componentName: "actionRules", icon: 'sign-in'},

                    createPartner: {componentName: "actionPartner", icon: 'sign-in'},
                    deletePartner: {componentName: "actionPartner", icon: 'sign-in'},

                    createFaq: {componentName: "actionFaq", icon: 'sign-in'},
                    editFaq: {componentName: "actionFaq", icon: 'sign-in'},
                    deleteFaq: {componentName: "actionFaq", icon: 'sign-in'},

                    addContact: {componentName: "actionContact", icon: 'sign-in'},
                    editContact: {componentName: "actionContact", icon: 'sign-in'},
                    deleteContact: {componentName: "actionContact", icon: 'sign-in'},

                    confirmReviewAdmin: {componentName: "actionReview", icon: 'sign-in'},
                    editReviewAdmin: {componentName: "actionReview", icon: 'sign-in'},

                    editUser: {componentName: "actionUser", icon: 'sign-in'},

                    createCurrency: {componentName: "actionCurrency", icon: 'sign-in'},
                    editCurrency: {componentName: "actionCurrency", icon: 'sign-in'},
                    deleteCurrency: {componentName: "actionCurrency", icon: 'sign-in'},
                }
            }
        },
        methods: {
            getTypeAction(method) {
                if (!!this.type[method]) {
                    return this.type[method];
                } else {
                    return {componentName: "default", icon: 'settings'}
                }
            }
        },
        created() {
        }

    }
</script>


<!--<style>-->
    <!--.history-block {-->
        <!--color: #666;-->
        <!--width: 100%;-->
        <!--display: flex;-->
        <!--flex-direction: row;-->
        <!--margin-top: 15px;-->
    <!--}-->

    <!--.history-info {-->
        <!--border-radius: 3px;-->
        <!--width: 95%;-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--background: rgba(245, 245, 245, 1);-->
        <!--padding: 15px;-->

    <!--}-->

    <!--.history-title {-->
        <!--display: flex;-->
        <!--flex-direction: row;-->
        <!--justify-content: space-between;-->
        <!--border-bottom: 1px solid #CCC;-->
        <!--padding: 5px;-->

    <!--}-->

    <!--.history-operation {-->
        <!--padding: 5px;-->

    <!--}-->

    <!--.history-icon {-->
        <!--display: flex;-->
        <!--justify-content: center;-->
        <!--align-items: center;-->
        <!--width: 5%;-->
    <!--}-->

    <!--.date {-->
        <!--padding: 15px;-->
        <!--position: relative;-->
        <!--top: -50%;-->
        <!--font-size: 8px;-->
    <!--}-->

    <!--.timeline::before {-->
        <!--left: 15px;-->
    <!--}-->

    <!--.timeline > li.timeline-inverted > .timeline-panel {-->
        <!--float: none;-->
        <!--left: 50px;-->
    <!--}-->

    <!--.timeline > li > .timeline-panel {-->
        <!--float: none;-->
        <!--position: relative;-->
        <!--width: 100%;-->
    <!--}-->

    <!--.timeline > li > .timeline-badge {-->
        <!--left: 15px;-->
    <!--}-->
<!--</style>-->
