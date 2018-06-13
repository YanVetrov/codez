<template>
    <div class="row">
        <div class="row a">
            <loading type="block" :status_load="status_load "/>
            <div class='white-box' v-if="showDetails === true">
                <div>
                    <div class='lay'>
                        <div class='av'></div>
                    </div>
                    <div class='lay'><h3>ФИО</h3>
                        {{first_name}} {{last_name}}
                    </div>
                    <div>
                        <nuxt-link class="btn btn-outline btn-rounded btn-info btn2" :to="'/users/clients/edit/'+id"><i
                                class='icon-pencil'></i>
                        </nuxt-link>
                    </div>
                    <div class='lay'><h3>E-mail</h3> {{email}}</div>
                    <div class='lay'><h3>Баланс</h3> {{balance}}</div>
                    <div class='lay'><h3>Партнеры</h3></div>
                    <div class='lay'><h3>Партнерский процент</h3> {{rate}}</div>
                    <div class='lay'><h3>Партнер</h3></div>
                    <div class='lay'><h3>Зарегистрирован</h3> {{moment(created).format('DD.MM.YY')}}</div>

                </div>
            </div>
        </div>
        <users v-for="(el,i) in users" :key="i" :el="el"
               @viewDetails="viewDetails">
        </users>
        <pagination :currentPage="current_page"
                    :totalPages="total_page"
                    @page-changed="getUserAdmin">
        </pagination>


    </div>


</template>
<script>
    import Loading from "~/components/loading";
    import moment from 'moment'
    import pagination from '~/components/pagination'
    import Users from "~/components/users/users";

    export default {
        components: {Users, Loading, pagination},
        data() {
            return {
                pagination: true,
                status_load: false,
                current_page: this.$route.params.page,
                users: [],
                total_page: [],
                moment: moment,
                email: " ",
                last_name: " ",
                balance: '',
                first_name: '',
                showDetails: false,
                created: '',
                id: " ",
                rate: " "

            }
        },
        methods: {
            getUserAdmin(page) {
                this.status_load = false;
                this.$rest.api('getUserAdmin', {page: page || 1, limit: 12})
                    .then(response => {
                        console.log(response);
                        if (response.success === false) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get users!',
                                text: response.error.message
                            });
                            this.$router.back();
                        }
                        if (response.success === true) {
                            this.current_page = response.data.count.select_page || 1;
                            this.users = response.data.users;
                            this.total_page = response.data.count.pages;
                            this.balance = response.data.users.balance;
                            this.rate = response.data.users.rate

                        }
                        this.status_load = true;

                    })
                    .catch(err => {
                        this.$notify({
                            group: 'main',
                            duration: 5000,
                            type: 'error',
                            title: 'Error get users!',
                            text: 'Server error 500! Please retry.\n' + err
                        });
                        this.$router.back();
                        this.status_load = true;
                    });

            },
            viewDetails(el) {
                console.log(el.rate);
                this.el = el,
                    this.email = el.email,
                    this.first_name = el.first_name,
                    this.last_name = el.last_name,
                    this.balance = el.balance,
                    this.created = el.createdAt,
                    this.id = el._id,
                    this.rate = el.rate,
                    this.showDetails = true


            },
        },
        created() {
            return this.getUserAdmin(this.select_page);
        }
    }
</script>

<style>
    .line {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid rgba(245, 245, 245, 0);
        padding: 5px;
        margin-top: 10px;
        color: #666;
    }

    .info {
        border-bottom: none;
    }

    .lay:not(.comment) {
        width: 20%;
    }

    .info .lay {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .av {
        width: 30px;
        height: 30px;
        background: silver;
        border-radius: 100%;
        margin-right: 5px;
    }

    .comment {
        background: rgba(252, 252, 252, 1);
        overflow: hidden;
        align-items: flex-end;
        padding: 15px;
    }

    .lay:first-child {
        width: 5%;
    }

    .line .btn {
        margin-left: 3px;
    }

    .comment .btn {
        height: 30px;
    }

    .comment i {
        font-size: 25px;
        color: #DDD;
    }

    .line .comment-area {
        border-radius: 5px;
        padding: 15px;
        height: 20px;
        width: 90%;

    }

    .a {
        width: 50%;
        margin-left: 600px;

    }
</style>