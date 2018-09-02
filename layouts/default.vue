<template>
    <div class="container-body">
        <HeaderMenu/>
        <div class="wrapper">
            <LeftMenu/>
            <div class="main">
                <breadcrumb/>
                <div class="main__">
                    <notifications position="top center" style="padding: 40px" group="main"/>
                    <nuxt/>
                    <footer class="footer text-center"> 2017 &copy; Elena Medvedeva</footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~/assets/sass/style.scss";
</style>

<script>
    import HeaderMenu from "~/components/_utils/menu/HeaderMenu";
    import LeftMenu from "~/components/_utils/menu/LeftMenu";
    import breadcrumb from "~/components/_utils/breadcrumb";

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
                        }
                        return res.success ? '' : this.$router.push('/signin');

                    })
                    .catch(err => {
                        this.$router.push('/signin')
                    });
            }
        },
        mounted() {
            return this.checkSession()
        },
        head() {
            return {
                bodyAttrs: {
                    class: this.$store.getters['Menu/close'] ? 'hide-sidebar' : 'open-sidebar'
                }
            };
        },
        watch: {
            $route() {
                return this.checkSession();
            }
        },
        components: {
            HeaderMenu,
            breadcrumb,
            LeftMenu
        }
    }
</script>
