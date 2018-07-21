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
    import HeaderMenu from "~/components/Menu/HeaderMenu";
    import LeftMenu from "~/components/Menu/LeftMenu";
    import breadcrumb from "~/components/Menu/breadcrumb";

    export default {
        methods: {
            check() {
                console.log(this.$store.getters['admin/checkAdmin'])
            }
        },
        mounted() {
            this.$rest
                .api('isAuthUser')
                .then(res => {
                    if (res.success) {
                        this.$store.dispatch('admin/admin', res.data);
                        let d = res.data,
                            fn = d.first_name,
                            ln = d.last_name,
                            email = d.email,
                            obj = {fn, ln, email}
                        this.$root.$emit('userInfo', obj)
                        console.log(obj)
                    }
                    res.success ? '' : this.$router.push('/signin');

                })
                .catch(err => {

                })
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
                this.$rest.api('isAuthUser')
                    .then(res => {
                        res.success ? '' : this.$router.push('/signin');
                        console.log(res);
                    })
            }
        },
        components: {
            HeaderMenu,
            breadcrumb,
            LeftMenu
        }
    }
</script>
