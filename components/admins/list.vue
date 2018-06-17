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
                                <th>Type</th>
                                <th>Link</th>
                                <th>Skype</th>
                                <th>LVL</th>
                                <th>Created</th>
                                <th>Last update</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="admin in admins" :key="admin.id">
                                <td>{{admin._id}}</td>
                                <td>
                                    <a :href="admin.link"><i :class=" 'fa fa-'+admin.icon "></i>{{admin.name}}</a>
                                </td>
                                <td><a :href="admin.link">{{admin.value}}</a></td>
                                <td>skype</td>
                                <td><span class="label label-info">10</span></td>
                                <td>{{admin.createdAt}}</td>
                                <td>{{admin.updatedAt}}</td>
                                <td>
                                    <button type="button" @click="deleteAdmin(admin._id)"
                                            class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn"
                                           ><i class="ti-close"
                                             ></i>
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
                                                @page-changed="getAdmins"/>
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
        components: { paging },
        data() {
            return {
                total_page: 1,
                current_page: 1,
                name: '',
                email: '',
                link: '',
                skype: '',
                ids: {},
                admins: [

                ],
                show: false


            }
        },
        methods: {

            newAdmin() {
                this.$root.$emit('loading', true);
                let obj = {};
                this.name && this.name !== '' ? obj.name = this.name : '';
                this.link && this.link !== '' ? obj.value = this.link : '';
                this.$rest.api('addContact', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.push(obj);
                            this.$notify({
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'new contact added'
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


            },
            getAdmins(page) {
                this.$root.$emit('loading', true);
                this.$rest.api('getContacts', { page, limit: 10 })
                    .then(res => {
                        if (res.success) {
                            this.admins = res.data.contacts;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get admins!',
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
            deleteAdmin(id) {
                this.$rest.api('deleteContact',{contact_id:id})
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.forEach((el, i) => {
                                if (el.id == id) {
                                    this.admins.splice(i, 1);
                                }

                            })
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Admin ${res.data.id} successful deleted`,
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
                    .catch(err => {
                        this.$root.$emit('loading', false);
                    })

            }


        },
        mounted() {
            return this.getAdmins();
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
