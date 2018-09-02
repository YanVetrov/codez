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
    import { mapGetters, mapActions } from 'vuex';
    export default {
        components: { history, search },

        data() {
            console.log(this.$route.params.page);
            return {
                filterParam: {},
            }

        },
        computed: {
            ...mapGetters({
                total_page:'history/getTotalPages',
                current_page:'history/getCurrentPage',
                history:'history/getData',
                filterProps:'history/getFilter',
            })
        },
        methods: {
            ...mapActions({
                getAdminHistory:'history/getHistory'
            })
        },
        mounted() {
            return this.getAdminHistory();
        }

    }
</script>
