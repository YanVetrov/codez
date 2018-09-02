<template>
    <nuxt/>
</template>


<script>
    export default {
        created() {
            this.$store.dispatch('statisticResource/getStatisticClient');
            this.$store.dispatch('serverStatus/getServerStatus');
            this.$store.dispatch('exchangesPending/adminGetOrders');
            // this.$store.dispatch('contacts/getContacts')
            // this.$store.dispatch('faq/getFaqFull')
        },
        methods: {
            checkSession() {
                return this.$rest
                    .api('admin/auth/session/get')
                    .then(res => {
                        if (res.success) {
                            this.$store.dispatch('auth/signIn', res.data);
                            return this.$router.push('/dashboard');
                        }
                    });
            }
        },
        mounted() {
            return this.checkSession()
        },

        watch: {
            $route() {
                return this.checkSession();
            }
        }
    }
</script>

<style lang="scss">
    @import "~/assets/sass/module_autorization.scss";
</style>