<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">Contact listing</h3>
                <div class="scrollable">
                    <div class="table-responsive">
                        <table id="demo-foo-addrow" class="table m-t-30 table-hover contact-list" data-page-size="10">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Login</th>
                                <th>Email</th>
                                <th>Skype</th>
                                <th>LVL</th>
                                <th>DATE</th>
                                <th>Last active</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="admin in admins" :key="admin._id">
                                <td>{{admin.id}}</td>
                                <td>
                                    <a :href="admin.link"><img
                                            :src="'https://exchanger_001.proexchanger.net/service/fs'+admin.avatar"
                                            alt="user" class="img-circle"/> {{admin.name}}</a>
                                </td>
                                <td>{{admin.email}}</td>
                                <td>{{admin.skype}}</td>
                                <td><span class="label label-info">{{admin.lvl}}</span></td>
                                <td>{{admin.date}}</td>
                                <td>{{admin.lastActive}}</td>
                                <td>
                                    <button type="button"
                                            class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn"
                                            data-toggle="tooltip" data-original-title="Delete"><i class="ti-close"
                                                                                                  aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>

                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="2">
                                    <button type="button" class="btn btn-info btn-rounded" @click="show=true">Add New
                                        Contact
                                    </button>
                                </td>
                                <div v-if="show" id="add-contact" class="modal fade in" tabindex="-1" role="dialog"
                                     aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-hidden="true">×
                                                </button>
                                                <h4 class="modal-title" id="myModalLabel">Add New Contact</h4></div>
                                            <div class="modal-body">
                                                <div class="form-horizontal form-material">
                                                    <div class="form-group">
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Type name" v-model="name"></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control" placeholder="Email"
                                                                   v-model='email'></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control" placeholder="Skype"
                                                                   v-model="skype"></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control" placeholder="Link"
                                                                   v-model="link"></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <div class="fileupload btn btn-danger btn-rounded waves-effect waves-light">
                                                                <span><i class="ion-upload m-r-5"></i>Upload Contact Image</span>
                                                                <input type="file" class="upload"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-info waves-effect"
                                                        @click="newAdmin">Add
                                                </button>
                                                <button type="button" class="btn btn-default waves-effect"
                                                        @click="show=false">Cancel
                                                </button>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>
                                <td colspan="7">
                                    <div class="text-right">
                                        <paging :currentPage="current_page" :totalPages="total_page"
                                                @page-changed="newAdmin"/>
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
    import paging from '~/components/pagination';

    export default {
        components: {paging},
        data() {
            return {
                total_page: 1,
                current_page: 1,
                name: '',
                email: '',
                link: '',
                skype: '',
                admins: [

                    {
                        name: 'Alex',
                        id: '34234',
                        lastActive: '00:34:04',
                        lvl: '10',
                        avatar: '/img/parsers/binance.png',
                        email: '324erw@gmail.com',
                        skype: '@yans',
                        date: '20/12/2018'
                    }

                ],
                show: false


            }
        },
        methods: {

            newAdmin() {
                this.$root.$emit('loading', true);
                let obj = {};
                this.name && this.name !== '' ? obj.name = this.name : '';
                this.skype && this.skype !== '' ? obj.skype = this.skype : '';
                this.email && this.email !== '' ? obj.email = this.email : '';
                this.link && this.link !== '' ? obj.link = this.link : '';
                this.$rest.api('addAdmin', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'new Admin added'
                            });
                            this.show = false;


                        }
                        else {
                            this.$notify({
                                duration: 5000,
                                type: 'error',
                                title: 'Bad',
                                text: "Something wrong..."
                            })
                        }


                        this.$root.$emit('loading', false);
                    })


            }


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
