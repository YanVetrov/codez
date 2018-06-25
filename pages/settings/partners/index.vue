<div>Partners</div>
<template>
    <div class="row">
        <label>{{$t('partners')}}</label>
        <div class="white-box">
            <nuxt-link :to="this.$route.path.replace(/\/$/,'')+'/create'">{{$t('create')}}</nuxt-link>
            <div v-for="(el,i) in partners" :key="i">
                <td style="width: 100px;text-align:center"><img :src="config.fsPath +el.image.files.medium.url" style="height: 30px"/></td>
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
    import config from "~/_config/app.json";
    import pagination from '~/components/pagination';

    export default {
        components: {Loading, pagination},
        props:[
            'url'
        ],
        data() {
            return {
                config,
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
                    .then(res => { console.log(res.data.partners)
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
                console.log(id);
                this.$rest.api('deletePartner', {partner_id: id})
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: 'Success!',
                                text: ''
                            });
                            this.getPartnersAll(this.current_page);
                        }
                        if (res.success === false) {
                            // this.status_load = true;
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error delete partner!',
                                text: res.error.message
                            });
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
