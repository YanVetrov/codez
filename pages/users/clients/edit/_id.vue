<template>
    <div class="row">
        <div class="white-box">
            <notifications group="review_create" classes="news-create-notifications" class="news-notify"/>
            <loading type="block" :status_load="status_load "/>
            <div class="row" v-if="afterEdit === false">
                <label>ИМЯ:</label>
                <input type="text" class="form-control form-control-line" v-model="first_name">
                <label>ФАМИЛИЯ:</label>
                <input type="text" class="form-control form-control-line" v-model="last_name">
                <label>E-mail:</label>
                <input type="text" class="form-control form-control-line" v-model="email">
                <label>ПАРТНЕРСКИЙ ПРОЦЕНТ</label>
                <input type="text" class="form-control form-control-line" v-model="rate">
                <br>
                <button type="button" class=" btn-outline btn-primary btn-1e" @click="back">
                    Вернуться
                </button>
                <button type="button" class="btn btn-outline btn-primary btn-1e" @click='editUser()'>отправить</button>
            </div>
            <div class="row" v-else>
                <div class="white-box " style="text-align: center">
                    <div class="col-md-12">
                        <succses_page/>
                        {{text}}
                    </div>
                    <nuxt-link class="btn btn-outline btn-rounded btn-info " :to="'/users/clients/'">Вернуться
                        <i></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import Loading from "~/components/loading";
    import Succses_page from "@/components/success_page";

    export default {
        components: {Succses_page, Loading},

        data() {
            return {
                status_load: true,
                succses_page: true,
                id: this.$route.params.id,
                first_name: '',
                last_name: '',
                afterEdit: false,
                text: '',
                email: '',
                rate: " "

            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            getOneUser() {
                this.$rest.api('getOneUser', {id: this.id})
                    .then(response => {
                        console.log(response.data.affiliate.rate, 'one');
                        if (response.success === true) {
                            this.first_name = response.data.first_name;
                            this.last_name = response.data.last_name;
                            this.email = response.data.email;
                            this.rate = response.data.affiliate.rate;

                        }
                    })
            },
            editUser() {
                this.status_load = false;
                this.$rest.api('editUser', {
                    id: this.id,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    rate: this.rate
                })
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.status_load = true;
                            this.afterEdit = true;
                            this.succses_page = true;
                            this.text = 'ОК';


                        }
                        if (response.success === false) {
                            this.status_load = true;
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get user!',
                                text: 'Server error 500! Please retry.\n' + response.error.message
                            });
                        }
                    })
            },

        },
        created() {
            return this.getOneUser()
        },

    }

</script>