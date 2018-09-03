<template>
    <table>
        <tbody>
        <component v-bind:is="getTypeAction(action.method).componentName"
                   v-for="(action,i) in history"
                   :method="history.method"
                   :date="action.createdAt"
                   :param="action.param"
                   :user="action.user"
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
                    "admin/news/comment/delete": {componentName: 'actionCommentForNews', icon: 'exchange'},

                    "admin/news/create": {componentName: "actionNews", icon: 'sign-in'},
                    "admin/news/edit": {componentName: "actionNews", icon: 'sign-in'},
                    "admin/news/delete": {componentName: "actionNews", icon: 'sign-in'},

                    "admin/rule/create": {componentName: "actionRules", icon: 'sign-in'},
                    "admin/rule/edit": {componentName: "actionRules", icon: 'sign-in'},
                    "admin/rule/delete": {componentName: "actionRules", icon: 'sign-in'},

                    "admin/partners-block/create": {componentName: "actionPartner", icon: 'sign-in'},
                    "admin/partners-block/delete": {componentName: "actionPartner", icon: 'sign-in'},

                    "admin/faq/create": {componentName: "actionFaq", icon: 'sign-in'},
                    "admin/faq/edit": {componentName: "actionFaq", icon: 'sign-in'},
                    "admin/faq/delete": {componentName: "actionFaq", icon: 'sign-in'},

                    "admin/contact/create": {componentName: "actionContact", icon: 'sign-in'},
                    "admin/contacts/edit": {componentName: "actionContact", icon: 'sign-in'},
                    "admin/contacts/delete": {componentName: "actionContact", icon: 'sign-in'},

                    // confirmReviewAdmin: {componentName: "actionReview", icon: 'sign-in'},
                    // editReviewAdmin: {componentName: "actionReview", icon: 'sign-in'},

                    "admin/users/profile/edit": {componentName: "actionUser", icon: 'sign-in'},

                    "admin/exchanger/currency/create": {componentName: "actionCurrency", icon: 'sign-in'},
                    "admin/exchanger/currency/edit": {componentName: "actionCurrency", icon: 'sign-in'},
                    "admin/exchanger/currency/delete": {componentName: "actionCurrency", icon: 'sign-in'},
                }
            }
        },
        methods: {
            getTypeAction(method) {
                if (!!this.type[method]) {
                    return this.type[method];
                } else {
                    return {componentName: "actionNews", icon: 'settings'}
                }
            }
        },
        created() {
        }

    }
</script>

