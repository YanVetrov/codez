<div>Partners</div>
<template>
    <div class="row">
        <label>Partners</label>
        <div class="white-box">
            <div v-for="(el,i) in partners" :key="i">{{el.title}}
                <!--{{el.image}}-->
                <nuxt-link class="btn btn-outline btn-rounded btn-info btn2" :to="'settings/edit/'+el._id"><i
                        class='icon-pencil'></i>
                </nuxt-link>
            </div>

            <br>
        </div>
        <pagination :currentPage="current_page"
                    :totalPages="total_page"
                    @page-changed="getPartnersAll">
        </pagination>
    </div>
</template>
<script>
    import Loading from "~/components/loading";
    import pagination from '~/components/pagination';

    export default {
        components: {Loading, pagination},
        data() {
            return {
                status_load: true,
                partners: [],
                total_page: [],
                current_page: this.$route.params.page,
            }
        },
        methods: {
            getPartnersAll(page) {
                this.$rest.api('getPartnersAll', {page: page || 1, limit: 10})
                    .then(response => {
                        console.log(response);
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get partners!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            console.log(response.data.partners._id);
                            this.current_page = response.data.count.select_page || 1;
                            this.total_page = response.data.count.pages;
                            this.partners = response.data.partners;
                        }
                        this.status_load = true;
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get partners!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.status_load = true;
                    });
            },
        },
        created() {
            return this.getPartnersAll();
        }
    }
</script>

<style scoped>

</style>
