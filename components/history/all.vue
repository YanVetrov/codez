<template>
    <div class="action-wr">
        <div class="action-main border">

            <div class="action-main--top">

                <h3 class="title">ЗАЯВКАМИ на обмен</h3>

            </div>

            <search placeholder="Search text..." :filter="filterProps"></search>


            <div class="table table-head">

                <table>

                    <thead>
                    <tr>

                        <td class="small">
                            <span>Data</span>
                        </td>
                        <td class="small"></td>
                        <td></td>
                        <td class="user">
                            <span>USER</span>
                        </td>
                        <td class="middle">
                            <span>IP INFO</span>
                        </td>

                    </tr>
                    </thead>

                </table>

            </div>

            <div class="table">


                <history :history="history"/>

                <pagination
                        :currentPage="current_page"
                        :totalPages="total_page"
                        @page-changed="getAdminHistory"
                />

            </div>

        </div>
    </div>


</template>

<script>
    import search from '~/components/_utils/search';
    import history from '~/components/history/history';

    export default {
        components: {history, search},

        data() {
            console.log(this.$route.params.page);
            return {
                filterProps: [{name: 'Все типы', value: 'all'}, {name: 'Авторизации', value: 'auth'}],
                current_page: this.$route.params.page,
                total_page: 1,
                filterParam: {},
                history: [],
            }
        },
        methods: {
            getAdminHistory(page) {
                if (page !== this.current_page) return this.$router.replace({
                    name: this.$route.name,
                    params: {page}
                });
                this.current_page = page || 1;

                this.$rest.api('getAdminHistory', {page})
                    .then(res => {
                        console.log(res);
                        this.$root.$emit('loading', false);
                        if (res.success) {
                            this.current_page = res.data.count.select_page || 1;
                            this.history = res.data.history;
                            this.total_page = res.data.count.pages;

                        }
                        else {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get history!',
                                text: res.error.message,
                            });

                            this.$router.back();
                        }

                    })
            },
        },
        mounted() {
            return this.getAdminHistory(this.current_page);
        }

    }
</script>

