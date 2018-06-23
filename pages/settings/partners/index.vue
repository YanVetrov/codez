<div>Partners</div>
<template>
    <div class="row">
        <label>Partners</label>
        <nuxt-link to="./create">Create partner</nuxt-link>
        <div class="white-box">
            <div v-for="(el,i) in partners" :key="i">
                <td><input v-model='el.title'/></td>
                <td><input v-model='el.link'/></td>
                <button @click='editPartner(el)'>Save</button>
                <button @click='deletePartner(el._id)'>Delete</button>
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
                id: this.$route.params.id,


            }
        },
        methods: {

            getPartnersAll(page) {
                this.$root.$emit('loading', true);
                this.$rest.api('getPartnersAll', {page, limit: 10})
                    .then(res => {
                        if (res.success) {
                            this.partners = res.data.partners;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;
                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get partners!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.$root.$emit('loading', false);

                    })
                    .catch(err => {
                        this.$root.$emit('loading', false);
                    })
            },
            editPartner(partner) {
                this.$rest.api('editPartner', {title: partner.title, id: partner._id, link: partner.link})
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Partner successful edited`,
                            });

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                        }
                    })

            },
            deletePartner(id) {
                this.$rest.api('deletePartner', {id: id})
                    .then(res => {
                        console.log(res.data);
                        if (res.success) {
                        }
                    })
            }
        },
        mounted() {
            return this.getPartnersAll();
        }
    }
</script>

<style scoped>

</style>
