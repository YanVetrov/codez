<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <notifications group="review_create" classes="reviews-create-notifications" class="reviews-notify"/>
                <loading type="block" :status_load="status_load "/>
                <div class="row" v-if="afterPost === false">
                    <label><h3>{{$t('create')}}</h3></label>
                    <div>
                        <br>
                        <label> {{$t('name')}}:</label>
                        <input type="text" class="form-control form-control-line" placeholder="..." v-model="name">
                    </div>

                    <div>
                        <label> {{$t('email')}}:</label>
                        <input type="text" class="form-control form-control-line" placeholder="..." v-model="email">
                    </div>
                    <div>
                        <label> {{$t('comment')}}:</label>
                        <input type="text" class="form-control form-control-line" placeholder="..." v-model="message">
                    </div>
                    <br>
                    <button type="button" class="btn btn-outline btn-primary btn-1e" @click="createReview() "> {{$t('send')}}
                    </button>
                </div>
                <div class="row" v-else>
                    <div class="white-box " style="text-align: center">
                        <div class="col-md-12">
                            <succses_page/>
                            {{text}}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</template>


<script>
    import Loading from "~/components/loading";
    import Succses_page from "@/components/success_page";

    export default {
        components: {Loading, Succses_page},

        data() {
            return {
                status_load: true,
                succses_page: true,
                email: '',
                name: '',
                message: '',
                afterPost: false,
                text: ''


            }
        },
        methods: {
            createReview() {
                this.status_load = false;
                this.$rest.api('createReview', {email: this.email, name: this.name, message: this.message})
                    .then(response => {
                        console.log(response);
                        if (response.success === true) {
                            this.status_load = true;
                            this.afterPost = true;
                            this.succses_page = true;
                            this.text = 'Успешно опубликовано';
                        }
                        if (response.success === false) {
                            this.status_load = true;
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get review !',
                                text: 'Server error 500! Please retry.\n' + response.error.message
                            });
                        }
                    })
            }
        }
    }
</script>
<style>

</style>