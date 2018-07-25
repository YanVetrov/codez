<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">{{$t('wait')}} {{$t('verif')}}</h3>
                <div class="scrollable">
                    <div class="table-responsive">
                        <table id="demo-foo-addrow" class="table m-t-30 table-hover contact-list" data-page-size="10">
                            <thead>
                            <tr>
                                <th>{{$t('photo')}}</th>
                                <th>{{$t('fn')}}</th>
                                <th>{{$t('ln')}}</th>
                                <th>IP</th>
                                <th>{{$t('currency')}}1 -></th>
                                <th> -> {{$t('currency')}}2</th>
                                <th>{{$t('action')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="admin in routes" :key="admin.id">
                                <td><img
                                        :src="'https://exchanger_001.proexchanger.net/service/fs'+admin.avatar"
                                        alt="user" class="img-circle"/></td>
                                <td>
                                    <a :href="admin.link">{{admin.first_name}}</a>
                                </td>
                                <td>{{admin.last_name}}</td>
                                <td>{{admin.ip}}</td>
                                <td><span class="label label-info">{{admin.currency1}}</span></td>

                                <td><span class="label label-info">{{admin.currency2}}</span></td>
                                <td>
                                    <button type="button" @click="deleteRoute(admin.id)"
                                            class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn"
                                    ><i class="ti-close"
                                    ></i>
                                    </button>
                                </td>
                            </tr>

                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="7">
                                    <div class="text-right">
                                        <paging :currentPage="current_page" :totalPages="total_page"
                                                @page-changed="WARNING_CALL_newAdmin"/>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import paging from '~/components/_utils/pagination/index';

    export default {
        components: {paging},
        data() {
            return {
                total_page: 1,
                current_page: 1,
                routes: [

                    {
                        first_name: 'Alex',
                        ip: '124.432.43.43',
                        last_name: 'Fetrov',
                        currency1: 'USD',
                        avatar: '/img/parsers/binance.png',
                        currency2: 'BTC',
                    }

                ],


            }
        },
        methods: {

            getVerification(page) {
                this.$root.$emit('loading', true);
                this.$rest.api('getVerification', {page, limit: 10})
                    .then(res => {
                        if (res.success) {
                            this.routes = res.data.routes;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get routes!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.$root.$emit('loading', false);

                    })
            },


            deleteRoute(id) {
                this.$root.$emit('loading', true);
                this.$rest.api('deleteRoute')
                    .then(res => {
                        if (res.success) {
                            this.routes.forEach((el, i) => {
                                if (el.id == id) {
                                    this.routes.splice(i, 1);
                                }

                            });
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Route ${res.data.id} successful deleted`,
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
                        this.$root.$emit('loading', false);
                    })
            },
            WARNING_CALL_newAdmin() {
                console.error('WARNING_CALL_newAdmin this function dont work (yan@gmail.com)')

            }
        },
        mounted() {
            return this.getVerification();

        }


    }
</script>

<style scoped>
    #add-contact,
    .modal {
        display: block;
        opacity: 1;

    }
</style>
